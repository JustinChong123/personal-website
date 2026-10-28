import React, { useLayoutEffect, useMemo, useRef } from 'react'
import './FlickerText.css'

const FLICKER_PATTERNS = 3

// Each letter flickers on after a random delay, so the text "boots up" one character at a time.
// The text stays hidden until play is true (e.g. once it scrolls into view).
// gradient: for gradient-filled text (set --flickerGradient on a parent). Each letter gets its own
// slice of the gradient, because a single background-clip: text gradient can't show through
// letters that are fading in.
function FlickerText({ text, maxDelay = 0.3, play = true, gradient = false }) {
    const wrapperRef = useRef(null)

    const words = useMemo(() => text.split(' ').map((word) =>
        word.split('').map((char) => ({
            char,
            delay: Math.random() * maxDelay,
            pattern: Math.floor(Math.random() * FLICKER_PATTERNS) + 1,
        }))
    ), [text, maxDelay])

    useLayoutEffect(() => {
        if (!gradient) return
        const position = () => {
            const wrapper = wrapperRef.current
            if (!wrapper) return
            const box = wrapper.getBoundingClientRect()
            wrapper.querySelectorAll('.flickerChar').forEach((char) => {
                const rect = char.getBoundingClientRect()
                char.style.backgroundSize = `${box.width}px ${box.height}px`
                char.style.backgroundPosition = `${box.left - rect.left}px ${box.top - rect.top}px`
            })
        }
        position()
        document.fonts?.ready.then(position)
        window.addEventListener('resize', position)
        return () => window.removeEventListener('resize', position)
    }, [gradient, words])

    return (
        <span ref={wrapperRef} className={play ? 'flickerText' : 'flickerText flickerTextWaiting'} aria-label={text}>
            {words.map((letters, w) => (
                <React.Fragment key={w}>
                    {w > 0 && ' '}
                    <span className="flickerWord" aria-hidden="true">
                        {letters.map(({ char, delay, pattern }, i) => (
                            <span
                                key={i}
                                className={`flickerChar flickerPattern${pattern}${gradient ? ' flickerCharGradient' : ''}`}
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
