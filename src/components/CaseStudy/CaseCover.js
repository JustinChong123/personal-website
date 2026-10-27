import React from 'react'
import ScrollIndicator from '../Scroll Indicator/ScrollIndicator.js'
import Navbar from '../NavBar/Navbar.js'
import FlickerText from '../FlickerText/FlickerText.js'
import './CaseCover.css'

const DESIGN_WIDTH = 1434

/*
 * Case study cover: gradient background with the navbar, mockups, and a black title bar whose text
 * flickers in on load.
 *
 * mockups: [{ src, alt, x, y, width }] — position and width in px within the cover design, which is
 *   1434px wide and mockupsHeight px tall (the area above the black bar). Mockups may hang below it.
 * background: CSS background for the gradient area.
 * accent: color of the arrow and role. dividerColor: color of the divider lines (defaults to accent).
 * progressColor: color of the scroll progress bar.
 * taglineWidth: max width of the tagline (in % of the page width), to control where it wraps.
 */
function CaseCover({ title, tagline, company, role, mockups, mockupsHeight, background, accent, dividerColor = accent, progressColor, taglineWidth = 24 }) {
    return (
        <div className="caseCover" style={{ background, '--caseCoverAccent': accent, '--caseCoverDivider': dividerColor }}>
            <ScrollIndicator color={progressColor} />
            <Navbar onCase={true} />
            <div className="caseCoverBottom">
                <div className="caseCoverMockups" style={{ aspectRatio: `${DESIGN_WIDTH} / ${mockupsHeight}` }}>
                    {mockups.map(({ src, alt = '', x, y, width }) => (
                        <img
                            key={src}
                            src={src}
                            alt={alt}
                            style={{
                                left: `${(x / DESIGN_WIDTH) * 100}%`,
                                top: `${(y / mockupsHeight) * 100}%`,
                                width: `${(width / DESIGN_WIDTH) * 100}%`,
                            }}
                        />
                    ))}
                </div>
                <div className="caseCoverBand">
                    <h1 className="caseCoverTitle">
                        <FlickerText text={title} />
                        <svg className="caseCoverArrow flickerChar flickerPattern2" style={{ animationDelay: '0.25s' }} viewBox="0 0 30 30" aria-hidden="true">
                            <path d="M2 2 L28 28 M28 4 V28 H4" />
                        </svg>
                    </h1>
                    <p className="caseCoverTagline" style={{ maxWidth: `${taglineWidth}cqw` }}><FlickerText text={tagline} /></p>
                    <div className="caseCoverRole">
                        <p><FlickerText text={company} /></p>
                        <p className="caseCoverRoleTitle"><FlickerText text={`[ ${role} ]`} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseCover
