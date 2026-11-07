import React, { useEffect, useRef, useState } from 'react'
import './BlueprintGrid.css'

const CELL = 24 // grid cell size; everything below is positioned in whole cells
const COLS = 22
const ROWS = 21 // the drawing is 22 x 21 cells; it scales to fit the area
const W = COLS * CELL
const H = ROWS * CELL

/*
 * Measurement labels read 10 per grid cell.
 * The three shapes, each with a start and end state, in grid cells:
 * the bar stretches 2 cells to the right, the squiggly circle grows from a 3-cell to a 5-cell square
 * (centered on a cell, so its edges sit on grid lines), and the window header slides 3 cells left.
 * Each has its own timing, so they drift in and out of step instead of moving in unison.
 */
const BAR = { x: 5 * CELL, y: 10 * CELL, h: CELL, w: [4 * CELL, 6 * CELL], hold: 1500, move: 1250, delay: 0 }
const FLOWER = { cx: 16.5 * CELL, cy: 4.5 * CELL, half: [1.5 * CELL, 2.5 * CELL], hold: 1900, move: 1550, delay: 650 }
const WINDOW = { x: [9 * CELL, 6 * CELL], y: 15 * CELL, w: 12 * CELL, bar: CELL, hold: 1700, move: 1400, delay: 1300 }
const SHAPES = [BAR, FLOWER, WINDOW]

// Hover crosshair: long enough to cross the whole grid from any point; opacity by distance from the center
const CROSS_REACH = 2 * Math.max(W, H)
const CROSS_FALLOFF = [[0, 1], [0.25, 0.45], [1, 0.12], [2, 0.07]] // [cells from center, opacity]
const CROSS_STOPS = (() => {
    const at = (cells) => (CROSS_REACH + cells * CELL) / (2 * CROSS_REACH)
    const side = CROSS_FALLOFF.slice(1).map(([c, o]) => [c, o])
    return [
        [0, 0.05],
        ...side.slice().reverse().map(([c, o]) => [at(-c), o]),
        [0.5, 1],
        ...side.map(([c, o]) => [at(c), o]),
        [1, 0.05],
    ]
})()

const lerp = ([a, b], t) => a + (b - a) * t
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// 8-petal flower outline around (cx, cy); r is the radius of the dips between petals
function flowerPath(cx, cy, r, petals = 8) {
    let d = ''
    for (let i = 0; i <= petals; i++) {
        const a = (i / petals) * Math.PI * 2
        const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r
        if (i === 0) { d += `M${x.toFixed(2)} ${y.toFixed(2)}`; continue }
        const am = ((i - 0.5) / petals) * Math.PI * 2
        d += `Q${(cx + Math.cos(am) * r * 1.45).toFixed(2)} ${(cy + Math.sin(am) * r * 1.45).toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)}`
    }
    return d
}

// Guide lines that run past a shape's edges and fade out at both ends
// How far the flower outline reaches from its center (along x or y), per unit of r
const FLOWER_REACH = (() => {
    const d = flowerPath(0, 0, 1, 8)
    const nums = d.match(/-?[\d.]+/g).map(Number)
    let max = 0
    // sample each quadratic segment finely and keep the largest |x|
    let px = nums[0]
    for (let i = 2; i + 3 < nums.length; i += 4) {
        const [qx, , x] = nums.slice(i, i + 4)
        for (let k = 0; k <= 50; k++) {
            const t = k / 50
            const bx = (1 - t) * (1 - t) * px + 2 * (1 - t) * t * qx + t * t * x
            max = Math.max(max, Math.abs(bx))
        }
        px = x
    }
    return max
})()

const HLine = ({ x1, x2, y }) => <rect className="bpGuide" x={x1} y={y - 0.5} width={x2 - x1} height="1" fill="url(#bpFadeH)" />
const VLine = ({ x, y1, y2 }) => <rect className="bpGuide" x={x - 0.5} y={y1} width="1" height={y2 - y1} fill="url(#bpFadeV)" />

const DIM_INSET = 3 // a ruler's ends stop just short of the grid lines it measures between

// A horizontal ruler with end ticks and a centered label above it
function Dim({ x1, x2, y, label }) {
    const a = x1 + DIM_INSET, b = x2 - DIM_INSET
    return (
        <g className="bpDim">
            <path d={`M${a} ${y}H${b}M${a} ${y - 4}v8M${b} ${y - 4}v8`} />
            <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle">{label}</text>
        </g>
    )
}

// A vertical ruler with end ticks and its label to the left
function VDim({ y1, y2, x, label }) {
    const a = y1 + DIM_INSET, b = y2 - DIM_INSET
    return (
        <g className="bpDim">
            <path d={`M${x} ${a}V${b}M${x - 4} ${a}h8M${x - 4} ${b}h8`} />
            <text x={x - 8} y={(y1 + y2) / 2 + 4} textAnchor="end">{label}</text>
        </g>
    )
}

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*
 * Blueprint-style grid behind the right side of the landing page: three UI shapes framed by fading
 * guide lines, each easing between two states on its own loop.
 */
function BlueprintGrid() {
    const [[tBar, tFlower, tWindow], setT] = useState([0, 0, 0])
    const frame = useRef(null)
    const containerRef = useRef(null)
    const svgRef = useRef(null)
    // grid intersection nearest the pointer, in cells, or null when the pointer isn't over the grid
    const [hover, setHover] = useState(null)

    // Text sits on top of the grid, so follow the mouse across the page rather than listening on the grid
    useEffect(() => {
        let last = null
        let queued = false
        const update = () => {
            queued = false
            const box = containerRef.current?.getBoundingClientRect()
            const svg = svgRef.current
            if (!last || !box || !svg || getComputedStyle(containerRef.current).display === 'none'
                || last.x < box.left || last.x > box.right || last.y < box.top || last.y > box.bottom) {
                setHover(null)
                return
            }
            const point = new DOMPoint(last.x, last.y).matrixTransform(svg.getScreenCTM().inverse())
            const col = Math.round(point.x / CELL), row = Math.round(point.y / CELL)
            setHover((h) => (h && h.col === col && h.row === row ? h : { col, row }))
        }
        const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update) } }
        const onMove = (event) => { last = { x: event.clientX, y: event.clientY }; queue() }
        const onLeave = () => { last = null; queue() }
        window.addEventListener('mousemove', onMove, { passive: true })
        window.addEventListener('scroll', queue, { passive: true })
        document.documentElement.addEventListener('mouseleave', onLeave)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('scroll', queue)
            document.documentElement.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    useEffect(() => {
        if (prefersReducedMotion()) return undefined
        const start = performance.now()
        // hold at the start state, ease to the end state, hold, ease back
        const progress = (now, { hold, move, delay }) => {
            const cycle = 2 * (hold + move)
            const k = (((now - start - delay) % cycle) + cycle) % cycle
            if (k < hold) return 0
            if (k < hold + move) return ease((k - hold) / move)
            if (k < 2 * hold + move) return 1
            return 1 - ease((k - 2 * hold - move) / move)
        }
        const tick = (now) => {
            setT(SHAPES.map((shape) => (now - start < shape.delay ? 0 : progress(now, shape))))
            frame.current = requestAnimationFrame(tick)
        }
        frame.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame.current)
    }, [])

    const barW = lerp(BAR.w, tBar)
    const barRight = BAR.x + barW
    const box = lerp(FLOWER.half, tFlower) // half-size of the flower's square, on grid lines at both ends
    const r = box / FLOWER_REACH
    const winX = lerp(WINDOW.x, tWindow)
    const winRight = winX + WINDOW.w

    return (
        <div className="blueprintGrid" aria-hidden="true" ref={containerRef}>
            <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMin meet">
                <defs>
                    <pattern id="bpCell" width={CELL} height={CELL} patternUnits="userSpaceOnUse">
                        <path d={`M${CELL} 0H0V${CELL}`} className="bpGridLine" />
                    </pattern>
                    <linearGradient id="bpFadeH" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="#fff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="bpFadeV" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#fff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    {/* the window's sides fade out downwards, like a page cut off */}
                    <linearGradient id="bpWindowFade" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0.35" stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <mask id="bpWindowMask" maskContentUnits="userSpaceOnUse">
                        <rect x={-W} y={WINDOW.y - CELL} width={3 * W} height={6 * CELL} fill="url(#bpWindowFade)" />
                    </mask>
                    {['H', 'V'].map((dir) => (
                        <linearGradient key={dir} id={`bpCross${dir}`} gradientUnits="userSpaceOnUse"
                            x1={dir === 'H' ? -CROSS_REACH : 0} x2={dir === 'H' ? CROSS_REACH : 0}
                            y1={dir === 'V' ? -CROSS_REACH : 0} y2={dir === 'V' ? CROSS_REACH : 0}>
                            {CROSS_STOPS.map(([offset, opacity], i) => <stop key={i} offset={offset} stopColor="#fff" stopOpacity={opacity} />)}
                        </linearGradient>
                    ))}
                </defs>
                {/* the grid runs past the drawing so it fills the whole area whatever its shape */}
                <rect x={-2 * W} y={-H} width={5 * W} height={3 * H} fill="url(#bpCell)" />

                {/* Bar */}
                <HLine x1={BAR.x - 4 * CELL} x2={barRight + 4 * CELL} y={BAR.y} />
                <HLine x1={BAR.x - 4 * CELL} x2={barRight + 4 * CELL} y={BAR.y + BAR.h} />
                <VLine x={BAR.x} y1={BAR.y - 3 * CELL} y2={BAR.y + BAR.h + 3 * CELL} />
                <VLine x={barRight} y1={BAR.y - 3 * CELL} y2={BAR.y + BAR.h + 3 * CELL} />
                <rect className="bpShape" x={BAR.x} y={BAR.y} width={barW} height={BAR.h} rx={BAR.h / 2} />
                <Dim x1={BAR.x} x2={barRight} y={BAR.y - 20} label={Math.round(barW / CELL) * 10} />
                <text className="bpLabel" x={BAR.x - 16} y={BAR.y + BAR.h / 2 + 4} textAnchor="end">10</text>

                {/* Squiggly circle */}
                <g className="bpStar">
                    {[0, 45, 90, 135].map((a) => {
                        const rad = (a * Math.PI) / 180, len = box + 1.6 * CELL
                        return <line key={a} x1={FLOWER.cx - Math.cos(rad) * len} y1={FLOWER.cy - Math.sin(rad) * len} x2={FLOWER.cx + Math.cos(rad) * len} y2={FLOWER.cy + Math.sin(rad) * len} />
                    })}
                </g>
                <HLine x1={FLOWER.cx - box - 3 * CELL} x2={FLOWER.cx + box + 3 * CELL} y={FLOWER.cy - box} />
                <HLine x1={FLOWER.cx - box - 3 * CELL} x2={FLOWER.cx + box + 3 * CELL} y={FLOWER.cy + box} />
                <VLine x={FLOWER.cx - box} y1={FLOWER.cy - box - 3 * CELL} y2={FLOWER.cy + box + 3 * CELL} />
                <VLine x={FLOWER.cx + box} y1={FLOWER.cy - box - 3 * CELL} y2={FLOWER.cy + box + 3 * CELL} />
                <path className="bpShape" d={flowerPath(FLOWER.cx, FLOWER.cy, r)} />
                <VDim y1={FLOWER.cy - box} y2={FLOWER.cy + box} x={FLOWER.cx - box - 0.8 * CELL} label={Math.round((2 * box) / CELL) * 10} />

                {/* Window header */}
                <HLine x1={winX - 4 * CELL} x2={winRight + 4 * CELL} y={WINDOW.y} />
                <VLine x={winX} y1={WINDOW.y - 3 * CELL} y2={WINDOW.y + 6 * CELL} />
                <VLine x={winRight} y1={WINDOW.y - 3 * CELL} y2={WINDOW.y + 6 * CELL} />
                <path className="bpShape" mask="url(#bpWindowMask)" d={`M${winX} ${WINDOW.y + 5 * CELL}V${WINDOW.y + 6}a6 6 0 0 1 6 -6H${winRight - 6}a6 6 0 0 1 6 6V${WINDOW.y + 5 * CELL}M${winX} ${WINDOW.y + WINDOW.bar}H${winRight}`} />
                {[0, 1, 2].map((i) => <circle key={i} className="bpShape" cx={winX + 20 + i * 18} cy={WINDOW.y + WINDOW.bar / 2} r="4.5" />)}
                <Dim x1={winX} x2={winRight} y={WINDOW.y - 22} label={(WINDOW.w / CELL) * 10} />

                {/* Crosshair at the grid intersection nearest the pointer: bright where the lines cross,
                    fading within one cell to a faint line that runs across the whole grid */}
                {hover && (
                    <g className="bpCrosshair" style={{ transform: `translate(${hover.col * CELL}px, ${hover.row * CELL}px)` }}>
                        <rect x={-CROSS_REACH} y={-0.5} width={2 * CROSS_REACH} height="1" fill="url(#bpCrossH)" />
                        <rect x={-0.5} y={-CROSS_REACH} width="1" height={2 * CROSS_REACH} fill="url(#bpCrossV)" />
                        <text x="8" y="-8">[{hover.col * 10}, {hover.row * 10}]</text>
                    </g>
                )}
            </svg>
        </div>
    )
}

export default BlueprintGrid
