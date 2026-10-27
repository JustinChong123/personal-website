import React from 'react'
import './CaseOverview.css'

/*
 * Overview block at the top of a case study: a short intro on the left, the headline and
 * description on the right, and a row of project details underneath.
 *
 * details: [{ title: 'Team', items: ['1 Product Manager', ...], note: 'Optional sub-line' }]
 * Wrap part of the headline in <span className="caseOverviewHighlight"> to color it.
 * Colors can be changed per case study by setting --caseHighlight and --caseDetailTitle.
 */
function CaseOverview({ label = 'Overview', category, headline, description, details = [] }) {
    return (
        <section className="caseOverview">
            <div className="caseOverviewIntro">
                <div className="caseOverviewLabel">
                    <p className="caseOverviewLabelTitle">{label}</p>
                    <p className="caseOverviewCategory">{category}</p>
                </div>
                <div className="caseOverviewText">
                    <h2 className="caseOverviewHeadline">{headline}</h2>
                    <p className="caseOverviewDescription">{description}</p>
                </div>
            </div>

            <div className="caseOverviewDetails">
                {details.map(({ title, items = [], note }) => (
                    <div className="caseOverviewDetail" key={title}>
                        <h3 className="caseOverviewDetailTitle">{title}</h3>
                        <ul className="caseOverviewDetailItems">
                            {items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        {note && (
                            <p className="caseOverviewDetailNote">
                                <svg className="caseOverviewNoteArrow" viewBox="0 0 24 12" aria-hidden="true">
                                    <path d="M1 0 V8 H22 M18.5 4.5 L22 8 L18.5 11.5" />
                                </svg>
                                {note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CaseOverview
