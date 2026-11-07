import React, { useEffect, useRef, useState } from 'react'
import './BlueprintGrid.css'

const STEP_MS = 1500

// What's drawn in the grid, in viewBox units (grid cells are 40 wide)
const PILL = { x: 240, y: 360, h: 40 }

/*
 * Each step moves the pointer to `to`, then shows the listed items. `pillWidth` lets a step resize
 * the pill, so the grid shows things being changed, not just created. The last step clears it all.
 */
const STEPS = [
    { to: [240, 360], show: [] },
    { to: [400, 400], show: ['pill'], pillWidth: 160 },
    { to: [400, 330], show: ['pill', 'pillDims'], pillWidth: 160 },
    { to: [580, 200], show: ['pill', 'pillDims', 'flower'], pillWidth: 160 },
    { to: [620, 160], show: ['pill', 'pillDims', 'flower', 'flowerGuides'], pillWidth: 160 },
    { to: [480, 600], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window'], pillWidth: 160 },
    { to: [480, 540], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window', 'windowDims'], pillWidth: 160 },
    { to: [480, 380], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window', 'windowDims'], pillWidth: 240 },
    { to: [360, 460], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window', 'windowDims', 'dashed'], pillWidth: 240 },
    { to: [280, 160], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window', 'windowDims', 'dashed', 'circle'], pillWidth: 240 },
    { to: [320, 120], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window', 'windowDims', 'dashed', 'circle', 'circleDims'], pillWidth: 240 },
    { to: [320, 120], show: ['pill', 'pillDims', 'flower', 'flowerGuides', 'window', 'windowDims', 'dashed', 'circle', 'circleDims'], pillWidth: 240 },
    { to: [140, 440], show: [], pillWidth: 240 },
]
const ALL_ITEMS = STEPS[STEPS.length - 2].show

// A measurement line with end ticks and a label in the middle
function Dim({ x1, y1, x2, y2, label, vertical = false }) {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2
    const ticks = vertical
        ? `M${x1 - 5} ${y1}h10M${x2 - 5} ${y2}h10`
        : `M${x1} ${y1 - 5}v10M${x2} ${y2 - 5}v10`
    return (
        <>
            <path pathLength="1" d={`M${x1} ${y1}L${x2} ${y2}${ticks}`} />
            <text x={vertical ? mx - 12 : mx} y={vertical ? my + 4 : my - 10} textAnchor={vertical ? 'end' : 'middle'}>{label}</text>
        </>
    )
}

// 8-petal flower outline around (cx, cy)
function flowerPath(cx, cy, r = 26, petals = 8) {
    let d = ''
    for (let i = 0; i <= petals; i++) {
        const a = (i / petals) * Math.PI * 2
        const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r
        if (i === 0) { d += `M${x.toFixed(1)} ${y.toFixed(1)}`; continue }
        const am = ((i - 0.5) / petals) * Math.PI * 2
        const qx = cx + Math.cos(am) * r * 1.45, qy = cy + Math.sin(am) * r * 1.45
        d += `Q${qx.toFixed(1)} ${qy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`
    }
    return d
}

function renderItem(id, pillWidth) {
    const { x, y, h } = PILL
    switch (id) {
        case 'pill':
            return <rect pathLength="1" className="bpResizable" x={x} y={y} width={pillWidth} height={h} rx={h / 2} />
        case 'pillDims':
            return (
                <>
                    <Dim x1={x} y1={y - 22} x2={x + pillWidth} y2={y - 22} label={pillWidth} />
                    <Dim x1={x - 22} y1={y} x2={x - 22} y2={y + h} label={h} vertical />
                </>
            )
        case 'flower':
            return <path pathLength="1" d={flowerPath(600, 200)} />
        case 'flowerGuides':
            return (
                <g className="bpGuide">
                    <path pathLength="1" d="M520 120L680 280M680 120L520 280M600 100V300M500 200H700" />
                    <circle pathLength="1" cx="600" cy="200" r="38" />
                    <text x="540" y="204" textAnchor="end">10</text>
                </g>
            )
        case 'window':
            return (
                <>
                    <rect pathLength="1" x="400" y="520" width="280" height="160" rx="6" />
                    <path pathLength="1" d="M400 556H680" />
                    <circle pathLength="1" cx="420" cy="538" r="5" />
                    <circle pathLength="1" cx="440" cy="538" r="5" />
                    <circle pathLength="1" cx="460" cy="538" r="5" />
                </>
            )
        case 'windowDims':
            return <Dim x1={400} y1={496} x2={680} y2={496} label="280" />
        case 'dashed':
            return <rect pathLength="1" className="bpDashed" x="160" y="440" width="200" height="40" rx="20" />
        case 'circle':
            return <circle pathLength="1" cx="280" cy="160" r="40" />
        case 'circleDims':
            return (
                <g className="bpGuide">
                    <path pathLength="1" d="M280 160L320 160" />
                    <circle pathLength="1" cx="280" cy="160" r="2.5" />
                    <text x="300" y="150" textAnchor="middle">r 40</text>
                </g>
            )
        default:
            return null
    }
}

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*
 * Blueprint-style grid behind the right side of the landing page. A pointer moves around it,
 * drawing, measuring and resizing small UI shapes, then clears them and starts over.
 */
function BlueprintGrid() {
    const reduced = useRef(prefersReducedMotion()).current
    const [step, setStep] = useState(reduced ? STEPS.length - 2 : 0)
    // bumped each time an item reappears, so its draw-in animation replays
    const versions = useRef({})
    const prevShown = useRef(new Set())

    useEffect(() => {
        if (reduced) return undefined
        const timer = setInterval(() => setStep((s) => (s + 1) % STEPS.length), STEP_MS)
        return () => clearInterval(timer)
    }, [reduced])

    const { to, show, pillWidth = 160 } = STEPS[step]
    const shown = new Set(show)
    shown.forEach((id) => { if (!prevShown.current.has(id)) versions.current[id] = (versions.current[id] || 0) + 1 })
    prevShown.current = shown

    return (
        <div className="blueprintGrid" aria-hidden="true">
            <svg viewBox="0 0 760 760" preserveAspectRatio="xMidYMin slice">
                <defs>
                    <pattern id="bpCell" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0H0V40" className="bpGridLine" />
                    </pattern>
                    <radialGradient id="bpGlow" cx="0.75" cy="0.15" r="0.6">
                        <stop offset="0" stopColor="#9B59B6" stopOpacity="0.28" />
                        <stop offset="1" stopColor="#9B59B6" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <rect width="760" height="760" fill="url(#bpGlow)" />
                <rect width="760" height="760" fill="url(#bpCell)" />
                <path className="bpGridAccent" d="M0 40H760M720 0V760M0 480H760" />

                <g className="bpItems">
                    {ALL_ITEMS.map((id) => (
                        <g key={`${id}-${versions.current[id] || 0}`} className={shown.has(id) ? 'bpItem bpItemOn' : 'bpItem'}>
                            {renderItem(id, pillWidth)}
                        </g>
                    ))}
                </g>

                {!reduced && (
                    <g className="bpPointer" style={{ transform: `translate(${to[0]}px, ${to[1]}px)` }}>
                        <circle key={step} className="bpClick" r="14" />
                        <path d="M0 0L0 22L6 16.5L10.5 26L14 24.5L9.5 15L17 15Z" />
                    </g>
                )}
            </svg>
        </div>
    )
}

export default BlueprintGrid
