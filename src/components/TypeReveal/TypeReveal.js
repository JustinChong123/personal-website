import React from 'react'
import './TypeReveal.css'

// Types text out one letter at a time, in place: the letters already take up their space, so the
// surrounding sentence never reflows while it types. delay and interval are in seconds.
function TypeReveal({ text, delay = 0, interval = 0.045, className = '' }) {
    return (
        <span className={`typeReveal ${className}`} aria-label={text}>
            {text.split('').map((char, i) => (
                <span key={i} aria-hidden="true" style={{ animationDelay: `${(delay + i * interval).toFixed(3)}s` }}>{char}</span>
            ))}
        </span>
    )
}

export const typingDuration = (text, interval = 0.045) => text.length * interval

export default TypeReveal
