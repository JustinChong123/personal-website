import React, { useMemo } from 'react'
import glyphs, { CAP_HEIGHT } from './glyphs.js'
import '../FlickerText/FlickerText.css'
import './ExtrudedText.css'

const DEPTH = 0.5 // em the letters extrude downwards
const SLANT = 0.25 // sideways drift of the extrusion per unit of depth (positive = to the right)
const TRACKING = 0.01 // extra em between letters
const SPACE = 0.3 // em width of a space
const CORNER_ANGLE = 25 // degrees; outline turns sharper than this get an edge line
const FLICKER_PATTERNS = 3
const S = 1000 // SVG units per em

const EXTRUDE = [SLANT * DEPTH, DEPTH]

function insideGlyph(contours, x, y) {
    let inside = false
    for (const c of contours) {
        for (let i = 0, j = c.length - 1; i < c.length; j = i++) {
            const [xi, yi] = c[i], [xj, yj] = c[j]
            if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
        }
    }
    return inside
}

/*
 * Builds the visible parts of one extruded letter: the side faces that point towards the viewer
 * (sorted back to front), the edge lines on them, and the front face outline.
 */
function buildLetter(contours, offsetX) {
    const [ex, ey] = EXTRUDE
    const faces = []
    const shift = ([x, y]) => [x + offsetX, y]

    for (const raw of contours) {
        const c = raw.map(shift)
        const n = c.length
        const visible = []
        for (let i = 0; i < n; i++) {
            const a = c[i], b = c[(i + 1) % n]
            const dx = b[0] - a[0], dy = b[1] - a[1]
            const len = Math.hypot(dx, dy) || 1
            // outward normal: whichever perpendicular points out of the glyph
            let nx = dy / len, ny = -dx / len
            const mx = (a[0] + b[0]) / 2 - offsetX, my = (a[1] + b[1]) / 2
            if (insideGlyph(contours, mx + nx * 0.002, my + ny * 0.002)) { nx = -nx; ny = -ny }
            visible.push(nx * ex + ny * ey > 0)
        }
        // an extrusion edge line at a vertex where the outline turns sharply, or where the side turns away (silhouette)
        const edgeAt = c.map((p, i) => {
            const prev = c[(i - 1 + n) % n], next = c[(i + 1) % n]
            const a1 = Math.atan2(p[1] - prev[1], p[0] - prev[0]), a2 = Math.atan2(next[1] - p[1], next[0] - p[0])
            let turn = Math.abs(a2 - a1) * 180 / Math.PI
            if (turn > 180) turn = 360 - turn
            const before = visible[(i - 1 + n) % n], after = visible[i]
            return (before || after) && (turn > CORNER_ANGLE || before !== after)
        })
        for (let i = 0; i < n; i++) {
            if (!visible[i]) continue
            const a = c[i], b = c[(i + 1) % n]
            faces.push({
                a, b,
                depth: ((a[0] + b[0]) / 2) * ex + ((a[1] + b[1]) / 2) * ey,
                edgeA: edgeAt[i],
                edgeB: edgeAt[(i + 1) % n],
            })
        }
    }
    faces.sort((f, g) => f.depth - g.depth)

    const front = contours.map((raw) => 'M' + raw.map(shift).map(([x, y]) => `${(x * S).toFixed(1)} ${(y * S).toFixed(1)}`).join('L') + 'Z').join('')
    return { faces, front }
}

const fmt = ([x, y]) => `${(x * S).toFixed(1)},${(y * S).toFixed(1)}`
const back = ([x, y]) => [x + EXTRUDE[0], y + EXTRUDE[1]]

// Big 3D block letters with a red face, black sides and a white line on every edge. Each letter flickers in.
function ExtrudedText({ text, maxDelay = 0.3 }) {
    const { letters, width } = useMemo(() => {
        let x = 0
        const letters = []
        for (const char of text.toUpperCase()) {
            const glyph = glyphs[char]
            if (!glyph) { x += SPACE; continue }
            letters.push({
                ...buildLetter(glyph.contours, x),
                delay: Math.random() * maxDelay,
                pattern: Math.floor(Math.random() * FLICKER_PATTERNS) + 1,
            })
            x += glyph.advance + TRACKING
        }
        return { letters, width: x - TRACKING + EXTRUDE[0] }
    }, [text, maxDelay])

    const top = -CAP_HEIGHT - 0.02
    const height = CAP_HEIGHT + DEPTH + 0.04

    return (
        <svg
            className="extrudedText"
            viewBox={`${-0.02 * S} ${top * S} ${(width + 0.04) * S} ${height * S}`}
            style={{ width: `${width + 0.04}em`, height: `${height}em` }}
            role="img"
            aria-label={text}
        >
            {letters.map(({ faces, front, delay, pattern }, i) => (
                <g key={i} className={`flickerChar flickerPattern${pattern}`} style={{ animationDelay: `${delay.toFixed(2)}s` }}>
                    {faces.map(({ a, b, edgeA, edgeB }, j) => (
                        <g key={j}>
                            <polygon className="extrudedSideFace" points={`${fmt(a)} ${fmt(b)} ${fmt(back(b))} ${fmt(back(a))}`} />
                            <line className="extrudedEdge" x1={a[0] * S + EXTRUDE[0] * S} y1={a[1] * S + EXTRUDE[1] * S} x2={b[0] * S + EXTRUDE[0] * S} y2={b[1] * S + EXTRUDE[1] * S} />
                            {edgeA && <line className="extrudedEdge" x1={a[0] * S} y1={a[1] * S} x2={(a[0] + EXTRUDE[0]) * S} y2={(a[1] + EXTRUDE[1]) * S} />}
                            {edgeB && <line className="extrudedEdge" x1={b[0] * S} y1={b[1] * S} x2={(b[0] + EXTRUDE[0]) * S} y2={(b[1] + EXTRUDE[1]) * S} />}
                        </g>
                    ))}
                    <path className="extrudedFace" d={front} />
                </g>
            ))}
        </svg>
    )
}

export default ExtrudedText
