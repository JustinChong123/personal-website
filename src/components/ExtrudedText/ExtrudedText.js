import React, { useMemo } from 'react'
import '../FlickerText/FlickerText.css'
import './ExtrudedText.css'

const DEPTH = 0.5 // em the letters extrude downwards
const STEP = 0.01 // em between the stacked copies that form the extrusion
const SLANT = 0.25 // sideways drift of the extrusion per unit of depth (positive = to the right)
const FLICKER_PATTERNS = 3

// Stacked text-shadows that draw the solid extruded side of a letter. Every letter extrudes in
// the same direction, so they all appear lit from one point.
function extrusionShadow(dx) {
    const shadows = []
    for (let y = STEP; y <= DEPTH + 1e-9; y += STEP) {
        shadows.push(`${(dx * y).toFixed(3)}em ${y.toFixed(2)}em 0 #000`)
    }
    return shadows.join(', ')
}

// Big 3D block letters with a red face, white outlines and a black extrusion. Each letter flickers in.
function ExtrudedText({ text, maxDelay = 0.3 }) {
    const shadow = useMemo(() => extrusionShadow(SLANT), [])
    const letters = useMemo(() => text.split('').map((char) => ({
        char,
        delay: Math.random() * maxDelay,
        pattern: Math.floor(Math.random() * FLICKER_PATTERNS) + 1,
    })), [text, maxDelay])

    return (
        <p className="extrudedText" aria-label={text}>
            {letters.map(({ char, delay, pattern }, i) => (
                char === ' '
                    ? <span key={i} className="extrudedSpace" aria-hidden="true" />
                    : (
                        <span
                            key={i}
                            className={`extrudedLetter flickerChar flickerPattern${pattern}`}
                            style={{ animationDelay: `${delay.toFixed(2)}s` }}
                            aria-hidden="true"
                        >
                            <span className="extrudedSide" style={{ textShadow: shadow }}>{char}</span>
                            <span className="extrudedFace">{char}</span>
                        </span>
                    )
            ))}
        </p>
    )
}

export default ExtrudedText
