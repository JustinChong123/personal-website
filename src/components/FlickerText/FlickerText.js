import React, { useMemo } from 'react'
import './FlickerText.css'

const FLICKER_PATTERNS = 3

// Each letter flickers on after a random delay, so the text "boots up" one character at a time
function FlickerText({ text, maxDelay = 0.9 }) {
    const words = useMemo(() => text.split(' ').map((word) =>
        word.split('').map((char) => ({
            char,
            delay: Math.random() * maxDelay,
            pattern: Math.floor(Math.random() * FLICKER_PATTERNS) + 1,
        }))
    ), [text, maxDelay])

    return (
        <span className="flickerText" aria-label={text}>
            {words.map((letters, w) => (
                <React.Fragment key={w}>
                    {w > 0 && ' '}
                    <span className="flickerWord" aria-hidden="true">
                        {letters.map(({ char, delay, pattern }, i) => (
                            <span
                                key={i}
                                className={`flickerChar flickerPattern${pattern}`}
                                style={{ animationDelay: `${delay.toFixed(2)}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </React.Fragment>
            ))}
        </span>
    )
}

export default FlickerText
