import React, { useMemo } from 'react'
import glyphs, { CAP_HEIGHT } from './glyphs.js'
import '../FlickerText/FlickerText.css'
import './ExtrudedText.css'

const DEPTH = 0.36 // em the letters extrude downwards
const SLANT = 0.25 // sideways drift of the extrusion per unit of depth (positive = to the right)
const LEAN = 0.13 // how far the tops of the red faces lean right, per unit of height (tilts them back)
const SQUASH = 0.9 // vertical squash of the red faces, so they look tipped back
const TRACKING = 0.01 // extra em between letters
const SPACE = 0.3 // em width of a space
const CORNER_ANGLE = 25 // degrees; outline turns sharper than this get an edge line
const SEAM_OVERLAP = 0.004 // em each side face overlaps its neighbours, so no hairline gaps show between them
const SLIVER = 0.004 // em; side faces thinner than this (seen edge-on, near a curve's silhouette) don't hide lines
const FLICKER_PATTERNS = 3
const S = 1000 // SVG units per em

const EXTRUDE = [SLANT * DEPTH, DEPTH]
const back = ([x, y]) => [x + EXTRUDE[0], y + EXTRUDE[1]]

// Tilts a point of the red face back: tops lean right and the face is squashed vertically
const tilt = ([x, y]) => [x - LEAN * y * SQUASH, y * SQUASH]

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
 * Builds the visible parts of one extruded letter: the side faces that point towards the viewer, in
 * back-to-front order, each with the edge lines it owns. Every edge line belongs to exactly one face
 * (the nearest one that touches it), so no line is drawn twice and they all look the same weight.
 */
function buildLetter(rawContours, offsetX) {
    const [ex, ey] = EXTRUDE
    const contours = rawContours.map((c) => c.map(tilt).map(([x, y]) => [x + offsetX, y]))
    const faces = []
    const corners = [] // { point, faces: [indices of the visible faces it's drawn on top of] }

    contours.forEach((c) => {
        const n = c.length
        const visible = c.map((a, i) => {
            const b = c[(i + 1) % n]
            const dx = b[0] - a[0], dy = b[1] - a[1]
            const len = Math.hypot(dx, dy) || 1
            // outward normal: whichever perpendicular points out of the glyph
            let nx = dy / len, ny = -dx / len
            if (insideGlyph(contours, (a[0] + b[0]) / 2 + nx * 0.002, (a[1] + b[1]) / 2 + ny * 0.002)) { nx = -nx; ny = -ny }
            return nx * ex + ny * ey > 0
        })
        const faceIndex = c.map((a, i) => {
            if (!visible[i]) return -1
            const b = c[(i + 1) % n]
            // how wide the face looks on screen, measured across the extrusion direction
            const width = Math.abs((b[0] - a[0]) * ey - (b[1] - a[1]) * ex) / Math.hypot(ex, ey)
            faces.push({ a, b, width, depth: ((a[0] + b[0]) / 2) * ex + ((a[1] + b[1]) / 2) * ey })
            return faces.length - 1
        })
        // the visible face before/after edge i, plus any paper-thin faces beyond it that pile up on the same spot
        const facesAround = (i) => {
            const out = []
            for (const step of [-1, 1]) {
                let k = step < 0 ? (i - 1 + n) % n : i
                for (let hops = 0; hops < 8 && faceIndex[k] >= 0; hops++) {
                    out.push(faceIndex[k])
                    if (faces[faceIndex[k]].width >= SLIVER) break
                    k = (k + step + n) % n
                }
            }
            return out
        }
        // back edges are drawn above their neighbouring faces, which overlap them slightly to close seams
        c.forEach((a, i) => {
            if (faceIndex[i] < 0) return
            faces[faceIndex[i]].backAbove = [faceIndex[(i - 1 + n) % n], faceIndex[i], faceIndex[(i + 1) % n]].filter((f) => f >= 0)
        })
        // an extrusion edge line where the outline turns sharply, or where the side turns away (silhouette)
        c.forEach((p, i) => {
            const prev = c[(i - 1 + n) % n], next = c[(i + 1) % n]
            const a1 = Math.atan2(p[1] - prev[1], p[0] - prev[0]), a2 = Math.atan2(next[1] - p[1], next[0] - p[0])
            let turn = Math.abs(a2 - a1) * 180 / Math.PI
            if (turn > 180) turn = 360 - turn
            const before = visible[(i - 1 + n) % n], after = visible[i]
            if ((before || after) && (turn > CORNER_ANGLE || before !== after)) {
                corners.push({ point: p, faces: facesAround(i) })
            }
        })
    })

    const order = faces.map((f, i) => i).sort((i, j) => faces[i].depth - faces[j].depth)
    const rank = new Array(faces.length)
    order.forEach((faceIdx, r) => { rank[faceIdx] = r })
    const sorted = order.map((i) => ({ ...faces[i], lines: [] }))
    const drawAbove = (touching, a, b) => {
        sorted[Math.max(...touching.map((f) => rank[f]))].lines.push([a, b])
    }
    faces.forEach((f) => drawAbove(f.backAbove, back(f.a), back(f.b)))
    corners.forEach(({ point, faces: touching }) => drawAbove(touching, point, back(point)))

    const front = contours.map((c) => 'M' + c.map(([x, y]) => `${(x * S).toFixed(1)} ${(y * S).toFixed(1)}`).join('L') + 'Z').join('')
    const xs = contours.flat().map(([x]) => x), ys = contours.flat().map(([, y]) => y)
    return {
        faces: sorted,
        front,
        bounds: [Math.min(...xs), Math.min(...ys), Math.max(...xs) + Math.max(ex, 0), Math.max(...ys) + ey],
    }
}

const fmt = ([x, y]) => `${(x * S).toFixed(1)},${(y * S).toFixed(1)}`

// A side face, stretched a hair past both ends so neighbouring faces overlap instead of leaving a seam
function facePoints(a, b) {
    const dx = b[0] - a[0], dy = b[1] - a[1]
    const len = Math.hypot(dx, dy) || 1
    const ox = (dx / len) * SEAM_OVERLAP, oy = (dy / len) * SEAM_OVERLAP
    const a2 = [a[0] - ox, a[1] - oy], b2 = [b[0] + ox, b[1] + oy]
    return `${fmt(a2)} ${fmt(b2)} ${fmt(back(b2))} ${fmt(back(a2))}`
}
const line = (a, b, key) => <line key={key} className="extrudedEdge" x1={a[0] * S} y1={a[1] * S} x2={b[0] * S} y2={b[1] * S} />

// Big 3D block letters with a red face, black sides and a white line on every edge. Each letter flickers in.
function ExtrudedText({ text, maxDelay = 0.3, duration }) {
    const { letters, box } = useMemo(() => {
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
        const pad = 0.02
        const minX = Math.min(...letters.map((l) => l.bounds[0])) - pad
        const minY = Math.min(...letters.map((l) => l.bounds[1])) - pad
        const maxX = Math.max(...letters.map((l) => l.bounds[2])) + pad
        const maxY = Math.max(...letters.map((l) => l.bounds[3])) + pad
        return { letters, box: [minX, minY, maxX - minX, maxY - minY] }
    }, [text, maxDelay])

    return (
        <svg
            className="extrudedText"
            viewBox={box.map((v) => (v * S).toFixed(1)).join(' ')}
            style={{ width: `${box[2]}em`, height: `${box[3]}em` }}
            role="img"
            aria-label={text}
        >
            {letters.map(({ faces, front, delay, pattern }, i) => (
                <g key={i} className={`flickerChar flickerPattern${pattern}`} style={{ animationDelay: `${delay.toFixed(2)}s`, animationDuration: duration && `${duration}s` }}>
                    {faces.map(({ a, b, lines }, j) => (
                        <g key={j}>
                            <polygon className="extrudedSideFace" points={facePoints(a, b)} />
                            {lines.map(([p, q], k) => line(p, q, k))}
                        </g>
                    ))}
                    <path className="extrudedFace" d={front} />
                </g>
            ))}
        </svg>
    )
}

export default ExtrudedText
