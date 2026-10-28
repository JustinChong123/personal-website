import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './CaseBody.css'

/*
 * Main content of a case study with an "On this page" scroll spy on the right.
 *
 * sections: [{ id: 'research', label: 'Research' }] — each id must match the id of the
 * element where that section starts inside children.
 * accent: color of the active section bar (defaults to the CSS value).
 */
function CaseBody({ sections, accent, children }) {
    const [activeId, setActiveId] = useState(sections[0]?.id)
    const [indicator, setIndicator] = useState({ top: 0, height: 0 })
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

    // Slide the indicator bar to the active item
    useLayoutEffect(() => {
        const item = itemRefs.current[activeId]
        if (item) setIndicator({ top: item.offsetTop, height: item.offsetHeight })
    }, [activeId])

    // A very quick custom scroll: the browser's built-in smooth scroll is too slow over long pages
    const scrollToSection = (event, id) => {
        event.preventDefault()
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
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default CaseBody
