import React, { useEffect, useState } from 'react'
import './ScrambleText.css'

const TICK = 50 // ms between random-letter changes

// Random stand-ins are picked from letters of a similar width, so they don't crowd their neighbours
const WIDTH_GROUPS = ['fijlrt', 'abcdeghknopqsuvxyz', 'mw', 'IJ', 'ABCDEFGHKLNOPQRSTUVXYZ', 'MW']
const groupOf = (char) => WIDTH_GROUPS.find((group) => group.includes(char))

const randomLike = (char) => {
    const group = groupOf(char)
    if (!group) return char // keep spaces, hyphens and punctuation as they are
    return group[Math.floor(Math.random() * group.length)]
}

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*
 * "Decode" text: it starts as random letters that keep changing, then the real letters lock in
 * from left to right, starting after delay. Each letter keeps the width of its final letter, so the surrounding
 * text never shifts. Times are in seconds.
 */
function ScrambleText({ text, delay = 0, duration = 1, className = '' }) {
    const [shown, setShown] = useState(() => (prefersReducedMotion() ? text.split('') : text.split('').map(randomLike)))
    const [done, setDone] = useState(prefersReducedMotion)

    useEffect(() => {
        if (prefersReducedMotion()) return undefined
        const start = performance.now() + delay * 1000
        const perChar = (duration * 1000) / text.length
        const timer = setInterval(() => {
            const elapsed = performance.now() - start
            const locked = elapsed < 0 ? 0 : Math.floor(elapsed / perChar)
            setShown(text.split('').map((char, i) => (i < locked ? char : randomLike(char))))
            if (locked >= text.length) {
                clearInterval(timer)
                setDone(true)
            }
        }, TICK)
        return () => clearInterval(timer)
    }, [text, delay, duration])

    // where each word starts in text (spaces included), to look its letters up in shown[]
    const words = text.split(' ')
    const starts = words.map((_, w) => words.slice(0, w).reduce((sum, word) => sum + word.length + 1, 0))

    return (
        <span className={`scrambleText ${done ? 'scrambleDone' : ''} ${className}`} aria-label={text}>
            {words.map((word, w) => (
                <React.Fragment key={w}>
                    {w > 0 && ' '}
                    <span className="scrambleWord" aria-hidden="true">
                        {word.split('').map((char, c) => (
                            <span key={c} className="scrambleChar">
                                <span className="scrambleFinal">{char}</span>
                                <span className="scrambleShown">{shown[starts[w] + c]}</span>
                            </span>
                        ))}
                    </span>
                </React.Fragment>
            ))}
        </span>
    )
}

export default ScrambleText
