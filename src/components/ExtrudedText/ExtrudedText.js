import React, { useMemo } from 'react'
import '../FlickerText/FlickerText.css'
import './ExtrudedText.css'

const DEPTH = 0.42 // em the letters extrude downwards
const STEP = 0.01 // em between the stacked copies that form the extrusion
const SPREAD = 0.18 // how much the extrusion fans out sideways from the center (perspective)
const FLICKER_PATTERNS = 3

// Stacked text-shadows that draw the solid extruded side of one letter
function extrusionShadow(dx) {
    const shadows = []
    for (let y = STEP; y <= DEPTH + 1e-9; y += STEP) {
        shadows.push(`${(dx * y).toFixed(3)}em ${y.toFixed(2)}em 0 #000`)
    }
    return shadows.join(', ')
}

// Big 3D block letters with a red face, white outlines and a black extrusion. Each letter flickers in.
function ExtrudedText({ text, maxDelay = 0.3 }) {
    const letters = useMemo(() => {
        const center = (text.length - 1) / 2
        return text.split('').map((char, i) => ({
            char,
            shadow: extrusionShadow(((i - center) / center) * SPREAD),
            delay: Math.random() * maxDelay,
            pattern: Math.floor(Math.random() * FLICKER_PATTERNS) + 1,
        }))
    }, [text, maxDelay])

    return (
        <p className="extrudedText" aria-label={text}>
            {letters.map(({ char, shadow, delay, pattern }, i) => (
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
