import React, { useEffect, useRef, useState } from 'react'
import './BlueprintGrid.css'

const CELL = 40
const HOLD_MS = 1600 // pause at each end
const MOVE_MS = 1400 // time to animate between the two states

/*
 * The three shapes, each with a start and end state (viewBox units, grid cells are 40 wide):
 * the bar stretches 2 cells to the right, the squiggly circle grows, the window header slides 2 cells right.
 */
const BAR = { x: 160, y: 320, h: 40, w: [120, 120 + 2 * CELL] }
const FLOWER = { cx: 520, cy: 160, r: [26, 44] }
const WINDOW = { x: [320, 320 + 2 * CELL], y: 460, w: 280, bar: 44 }

const lerp = ([a, b], t) => a + (b - a) * t
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// 8-petal flower outline around (cx, cy)
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
const HLine = ({ x1, x2, y }) => <rect className="bpGuide" x={x1} y={y - 0.5} width={x2 - x1} height="1" fill="url(#bpFadeH)" />
const VLine = ({ x, y1, y2 }) => <rect className="bpGuide" x={x - 0.5} y={y1} width="1" height={y2 - y1} fill="url(#bpFadeV)" />

// A measurement with end ticks and a centered label
function Dim({ x1, x2, y, label }) {
    return (
        <g className="bpDim">
            <path d={`M${x1} ${y}H${x2}M${x1} ${y - 4}v8M${x2} ${y - 4}v8`} />
            <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle">{label}</text>
        </g>
    )
}

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*
 * Blueprint-style grid behind the right side of the landing page: three UI shapes framed by fading
 * guide lines, all easing between two states at the same time, on a loop.
 */
function BlueprintGrid() {
    const [t, setT] = useState(0)
    const frame = useRef(null)

    useEffect(() => {
        if (prefersReducedMotion()) return undefined
        const cycle = 2 * (HOLD_MS + MOVE_MS)
        const start = performance.now()
        const tick = (now) => {
            const k = (now - start) % cycle
            let p
            if (k < HOLD_MS) p = 0
            else if (k < HOLD_MS + MOVE_MS) p = (k - HOLD_MS) / MOVE_MS
            else if (k < 2 * HOLD_MS + MOVE_MS) p = 1
            else p = 1 - (k - 2 * HOLD_MS - MOVE_MS) / MOVE_MS
            setT(ease(p))
            frame.current = requestAnimationFrame(tick)
        }
        frame.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame.current)
    }, [])

    const barW = lerp(BAR.w, t)
    const barRight = BAR.x + barW
    const r = lerp(FLOWER.r, t)
    const box = r * 1.45 // the flower's petal tips
    const winX = lerp(WINDOW.x, t)
    const winRight = winX + WINDOW.w

    return (
        <div className="blueprintGrid" aria-hidden="true">
            <svg viewBox="0 0 760 760" preserveAspectRatio="xMidYMin slice">
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
                </defs>
                <rect width="760" height="760" fill="url(#bpCell)" />

                {/* Bar */}
                <HLine x1={BAR.x - 140} x2={barRight + 140} y={BAR.y} />
                <HLine x1={BAR.x - 140} x2={barRight + 140} y={BAR.y + BAR.h} />
                <VLine x={BAR.x} y1={BAR.y - 120} y2={BAR.y + BAR.h + 120} />
                <VLine x={barRight} y1={BAR.y - 120} y2={BAR.y + BAR.h + 120} />
                <rect className="bpShape" x={BAR.x} y={BAR.y} width={barW} height={BAR.h} rx={BAR.h / 2} />
                <Dim x1={BAR.x} x2={barRight} y={BAR.y - 20} label={Math.round(barW / CELL) * 10} />
                <text className="bpLabel" x={BAR.x - 16} y={BAR.y + BAR.h / 2 + 4} textAnchor="end">10</text>

                {/* Squiggly circle */}
                <g className="bpStar">
                    {[0, 45, 90, 135].map((a) => {
                        const rad = (a * Math.PI) / 180, len = box + 60
                        return <line key={a} x1={FLOWER.cx - Math.cos(rad) * len} y1={FLOWER.cy - Math.sin(rad) * len} x2={FLOWER.cx + Math.cos(rad) * len} y2={FLOWER.cy + Math.sin(rad) * len} />
                    })}
                </g>
                <HLine x1={FLOWER.cx - box - 110} x2={FLOWER.cx + box + 110} y={FLOWER.cy - box} />
                <HLine x1={FLOWER.cx - box - 110} x2={FLOWER.cx + box + 110} y={FLOWER.cy + box} />
                <VLine x={FLOWER.cx - box} y1={FLOWER.cy - box - 110} y2={FLOWER.cy + box + 110} />
                <VLine x={FLOWER.cx + box} y1={FLOWER.cy - box - 110} y2={FLOWER.cy + box + 110} />
                <path className="bpShape" d={flowerPath(FLOWER.cx, FLOWER.cy, r)} />
                <text className="bpLabel" x={FLOWER.cx - box - 14} y={FLOWER.cy + 4} textAnchor="end">{Math.round(r / 2.6)}</text>

                {/* Window header */}
                <HLine x1={winX - 160} x2={winRight + 160} y={WINDOW.y} />
                <VLine x={winX} y1={WINDOW.y - 120} y2={WINDOW.y + 200} />
                <VLine x={winRight} y1={WINDOW.y - 120} y2={WINDOW.y + 200} />
                <path className="bpShape" d={`M${winX} ${WINDOW.y + 160}V${WINDOW.y + 6}a6 6 0 0 1 6 -6H${winRight - 6}a6 6 0 0 1 6 6V${WINDOW.y + 160}M${winX} ${WINDOW.y + WINDOW.bar}H${winRight}`} />
                {[0, 1, 2].map((i) => <circle key={i} className="bpShape" cx={winX + 22 + i * 20} cy={WINDOW.y + WINDOW.bar / 2} r="5" />)}
                <Dim x1={winX} x2={winRight} y={WINDOW.y - 22} label="80" />
            </svg>
        </div>
    )
}

export default BlueprintGrid
