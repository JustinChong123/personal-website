import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../FlickerText/FlickerText.css'
import './CaseBody.css'

/*
 * Main content of a case study with an "On this page" scroll spy on the right.
 *
 * sections: [{ id: 'research', label: 'Research' }] — each id must match the id of the
 * element where that section starts inside children.
 * accent: color of the active section bar (defaults to the CSS value).
 */
const FLICKER_PATTERNS = 3

// Each letter flickers between its unselected look and its selected look before settling on selected
function SelectFlicker({ text }) {
    const [letters] = useState(() => text.split('').map((char) => ({
        char,
        delay: (Math.random() * 0.3).toFixed(2),
        pattern: Math.floor(Math.random() * FLICKER_PATTERNS) + 1,
    })))
    return (
        <span aria-label={text}>
            {letters.map(({ char, delay, pattern }, i) => (
                <span key={i} className="spyFlickerChar" aria-hidden="true">
                    <span className={`spyFlickerOn flickerChar flickerPattern${pattern}`} style={{ animationDelay: `${delay}s` }}>{char}</span>
                    <span className={`spyFlickerOff flickerChar flickerPattern${pattern}`} style={{ animationDelay: `${delay}s` }}>{char}</span>
                </span>
            ))}
        </span>
    )
}

function CaseBody({ sections, accent, children }) {
    const [activeId, setActiveId] = useState(sections[0]?.id)
    const [indicator, setIndicator] = useState({ top: 0, height: 0 })
    const [flicker, setFlicker] = useState({ id: null, count: 0 }) // the clicked item's label replays the flicker
    const itemRefs = useRef({})
    const sectionIds = sections.map(({ id }) => id).join(',')

    // The active section is the last one whose start has scrolled past 35% of the screen height
    useEffect(() => {
        const ids = sectionIds.split(',')
        let frame = null

        const update = () => {
            frame = null
            const line = window.innerHeight * 0.35
            let current = ids[0]
            ids.forEach((id) => {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= line) current = id
            })
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
            setActiveId(atBottom ? ids[ids.length - 1] : current)
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (frame) cancelAnimationFrame(frame)
        }
    }, [sectionIds])

    // Decode every image in the background once the page has loaded, so jumping between sections
    // lands on images that are ready to paint instead of decoding (and flashing) mid-jump
    useEffect(() => {
        let cancelled = false
        const warm = async () => {
            for (const img of document.querySelectorAll('.caseBodyMain img')) {
                if (cancelled) return
                await img.decode().catch(() => {})
            }
        }
        const start = () => (window.requestIdleCallback || setTimeout)(warm)
        if (document.readyState === 'complete') start()
        else window.addEventListener('load', start, { once: true })
        return () => {
            cancelled = true
            window.removeEventListener('load', start)
        }
    }, [])

    // Slide the indicator bar to the active item
    useLayoutEffect(() => {
        const item = itemRefs.current[activeId]
        if (item) setIndicator({ top: item.offsetTop, height: item.offsetHeight })
    }, [activeId])

    // A very quick custom scroll: the browser's built-in smooth scroll is too slow over long pages
    const scrollToSection = (event, id) => {
        event.preventDefault()
        setFlicker(({ count }) => ({ id, count: count + 1 }))
        const el = document.getElementById(id)
        if (!el) return
        const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
        const start = window.scrollY
        const distance = el.getBoundingClientRect().top - margin
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const duration = reduceMotion ? 0 : 120
        const startTime = performance.now()

        const step = (now) => {
            const progress = duration ? Math.min((now - startTime) / duration, 1) : 1
            const eased = 1 - Math.pow(1 - progress, 3)
            window.scrollTo(0, start + distance * eased)
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }

    return (
        <div className="caseBody" style={accent ? { '--caseAccent': accent } : undefined}>
            <div className="caseBodyMain">{children}</div>

            <nav className="caseSpy" aria-label="On this page">
                <p className="caseSpyTitle">On this page</p>
                <ul className="caseSpyList">
                    <span className="caseSpyIndicator" style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }} />
                    {sections.map(({ id, label }) => (
                        <li key={id} ref={(el) => { itemRefs.current[id] = el }}>
                            <a
                                href={`#${id}`}
                                className={id === activeId ? 'caseSpyLink caseSpyLinkActive' : 'caseSpyLink'}
                                aria-current={id === activeId ? 'location' : undefined}
                                onClick={(event) => scrollToSection(event, id)}
                            >
                                {flicker.id === id ? <SelectFlicker key={flicker.count} text={label} /> : label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default CaseBody
