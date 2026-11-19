import React from 'react'
import Footer from '../../Footer/Footer.js'
import './PerformanceAdvisor.css'

import toastContextStats from './Toast Images/toast-context-stats.svg'
import toastSolutionFeatures from './Toast Images/toast-solution-features.svg'
import toastCompetitiveAnalysis from './Toast Images/toast-competitive-analysis.svg'
import toastKeyNeeds from './Toast Images/toast-key-needs.svg'
import toastPersonas from './Toast Images/toast-personas.svg'
import toastPOV from './Toast Images/toast-pov.svg'
import toastHMW from './Toast Images/toast-hmw.svg'
import toastResearchHeading from './Toast Images/toast-research-heading.svg'
import toastDesignHeading from './Toast Images/toast-design-heading.svg'
import toastObjectives from './Toast Images/toast-objectives.svg'
import toastSketches from './Toast Images/toast-sketches.svg'
import toastMidFiPrototypes from './Toast Images/toast-mid-fi-prototypes.svg'
import CaseCover from '../../CaseStudy/CaseCover.js'
import CaseOverview from '../../CaseStudy/CaseOverview.js'
import CaseBody from '../../CaseStudy/CaseBody.js'
import useScrollToTopOnLoad from '../../CaseStudy/useScrollToTopOnLoad.js'

import AISalesUserTesting from './AI Sales Intelligence Images/ai-sales-user-testing.png'
import AISalesNextSteps from './AI Sales Intelligence Images/ai-sales-next-steps.png'
import AISalesOutcomes from './AI Sales Intelligence Images/ai-sales-outcomes.svg'
import AISalesTakeaways from './AI Sales Intelligence Images/ai-sales-takeaways.png'

// Structure copied from the AI Sales Intelligence case study; body content below is still the MongoDB placeholder
function Toast() {
    useScrollToTopOnLoad()

    return (
        <div className="container">
            <CaseCover
                title="Bulk Actions for Inventory"
                titleWidth={28}
                tagline="Streamlining how merchants update their inventory on-the-go"
                company="Toast"
                role="Product Designer"
                background="linear-gradient(to bottom right, #FFB1B1, #FF89C0)"
                accent="#FF7777"
                progressColor="#E96060"
                mockupsHeight={399}
                mockups={[]}
            />

            <div className="budgetBalloonContent">

                <CaseOverview
                    category="Inventory Management"
                    highlightColor="#FF7777"
                    detailTitleColor="#FF8080"
                    headline="I designed a way for retail businesses to scan multiple items in their inventory and complete critical everyday tasks from receiving new shipments to updating stock counts."
                    description="Managing inventory is a physical, often chaotic task happening directly in the aisles of the store. My team is focused on making it easier to manage inventory from a phone, without ever having to open a laptop. We design for businesses of all types, from mom-and-pop convenience stores to grocery chains."
                    details={[
                        { title: 'Context', items: ['Product Designer @ Toast'], note: 'Mobile Inventory in Retail' },
                        { title: 'Team', items: ['1 Product Manager', '1 Engineering Lead', '3 iOS Engineers', '3 Android Engineers'] },
                        { title: 'Deliverables', items: ['Interactive Prototype', 'Design Annotations'] },
                        { title: 'Skills', items: ['AI Product Design', 'UX Research', 'Wireframes', 'Prototyping', 'Usability Testing', 'Design Systems'] },
                        { title: 'Timeline', items: ['12 weeks'] },
                    ]}
                />

                <CaseBody
                    accent="#E96060"
                    sections={[
                        { id: 'project-summary', label: 'Project Summary' },
                        { id: 'research', label: 'Research' },
                        { id: 'define', label: 'Define' },
                        { id: 'ideate', label: 'Ideate' },
                        { id: 'prototype', label: 'Prototype' },
                        { id: 'test', label: 'Test' },
                        { id: 'reflect', label: 'Reflect' },
                    ]}
                >
                    {/* <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">PROJECT SUMMARY</h3>
                            <h2>Solution</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Enabling developers to holistically diagnose performance issues</h1>
                            <p className="caseText">Performance Advisor is a <span className="fitkitchBoldText">cloud analytics tool</span> that enables developers to diagnose slow queries and improve performance on their MongoDB database clusters. I <span className="fitkitchBoldText">re-designed Performance Advisor to be “cluster-centric,”</span> enabling novice users and enterprise customers <span className="fitkitchBoldText">to gain high-level, aggregated insights about their performance</span> across different deployment models.</p>
                        </div>
                    </div> */}

                    <div className="caseSection" id="project-summary">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">CONTEXT</h3>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">What is Toast (besides bread)?</h1>
                            <p className="caseText">Toast builds software that helps restaurants run their business, from taking orders to managing payroll. You’ve likely used it when paying at a restaurant or a local coffee shop.</p>
                            <p className="caseText">Toast is now <span className="fitkitchBoldText">expanding into new verticals,</span> including convenience stores, bottle shops, and grocery stores. My team is building an <span className="fitkitchBoldText">inventory solution for retail businesses</span> to track, manage, and optimize the products they sell.</p>
                            <img loading="lazy" src={toastContextStats} width="800" alt='20% of U.S. restaurants use Toast. 189k businesses across the globe use Toast. $240B of transactions processed every year.'/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">PROBLEM</h3>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Managing inventory one item at a time is slow</h1>
                            <p className="caseText">Our mobile app only lets users update inventory one item at a time. If a customer breaks five bottles of wine, an employee has to log each one separately, which is extremely <span className="fitkitchBoldText">time-consuming and error-prone.</span> Typically, they skip the task entirely, which leads to <span className="fitkitchBoldText">inaccurate inventory and reporting.</span></p>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">SOLUTION</h3>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Update inventory as fast as ringing up a sale</h1>
                            <p className="caseText">We built a single scanning flow that powers critical bulk inventory tasks. Users build a list once and apply it across tasks, turning dozens of individual updates into <span className="fitkitchBoldText">one continuous workflow.</span></p>
                            <img loading="lazy" src={toastSolutionFeatures} width="1000" alt='01: Scan and build your list. 02: Complete critical tasks, like adjusting quantities, low stock alerts, and printing labels.' style={{ marginTop: "30px" }}/>
                        </div>
                    </div>

                    <img loading="lazy" id="research" src={toastResearchHeading} className="caseStudyHeading" width='100%' alt='User Research: we conducted research to understand users’ current workflows and pain points, segmented by persona.'/>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">RESEARCH</h3>
                            <h2>Competitive Analysis</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">How do other apps make bulk actions intuitive and powerful?</h1>
                            <p className="caseText">I researched how other products handle bulk actions, looking at <span className="fitkitchBoldText">direct competitors</span> in inventory management and <span className="fitkitchBoldText">tools outside the industry,</span> like Gmail and CVS Health. The goal was to understand what makes working with many items at once feel natural.</p>
                            <img loading="lazy" src={toastCompetitiveAnalysis} width="1000" alt='Three takeaways: an obvious entry point, handling mixed actions, and flexible selection.'/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">RESEARCH</h3>
                            <h2>User Interviews</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Users prioritize customizability and speed</h1>
                            <p className="caseText">I <span className="fitkitchBoldText">interviewed 7 owners, managers, and employees</span> across a range of businesses, from an Italian specialty deli to a cigarette shop.</p>
                            <img loading="lazy" src={toastKeyNeeds} width="1000" alt='Key needs: a barcode-first approach, agentic freedom, and speed and convenience.'/>
                        </div>
                    </div>

                    <div className="caseSection" id="define">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>User Personas</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Two personas need different levels of access</h1>
                            <p className="caseText">We identified two main types of users in retail and grocery stores. Their responsibilities differ, which shape the <span className="fitkitchBoldText">actions and features they need to access.</span></p>
                            <img loading="lazy" src={toastPersonas} width="1000" alt='Personas: frontline staff, who only need access to their assigned tasks, and managers and owners, who need full access.'/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>Point of View Statements</h2>
                        </div>
                        <div className="caseMain">
                            <img loading="lazy" src={toastPOV} width="920" alt='Store staff need to update many items at once in order to keep inventory accurate without taking time away from customers.'/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>How Might We (HMW) Statements</h2>
                        </div>
                        <div className="caseMain">
                            <img loading="lazy" src={toastHMW} width="1000" alt='HMW enable store staff to move through their inventory work as fast as they move through the store? HMW empower store staff to turn a walk down the aisle into getting all their inventory work done?'/>
                        </div>
                    </div>

                    <img loading="lazy" id="ideate" src={toastDesignHeading} className="caseStudyHeading" width='100%' alt='UX/UI Design: using AI prototyping tools like Claude Design and Magic Patterns, I quickly explored concepts and honed in on a robust direction.'/>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>Design Objectives</h2>
                        </div>
                        <div className="caseMain">
                            <img loading="lazy" src={toastObjectives} width="830" alt='Design objectives: speedy, flexible, and identity-aware.'/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">IDEATE</h3>
                            <h2>User Flows and Paper Sketches</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Separating bulk actions from single-scan</h1>
                            <p className="caseText">I used flow diagrams and paper sketches to explore how users might select multiple items and act on them all at once. After feedback from stakeholders and engineering, we deprioritized other directions and pursued a bulk actions mode the user <span className="fitkitchBoldText">intentionally enables</span> from the default single scan.</p>
                            <img loading="lazy" src={toastSketches} width="1000" alt='Paper sketches: separating single-scan from multi-scan (chosen), picking from the catalog, and queueing from single scan.'/>
                        </div>
                    </div>

                    <div className="caseSection" id="prototype">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">PROTOTYPE</h3>
                            <h2>Mid-Fidelity Prototyping with AI</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Designing for the most common user tasks</h1>
                            <p className="caseText">Using research insights, I identified the most common tasks in a store’s daily operations and prototyped those flows in Magic Patterns, an AI design tool. <span className="fitkitchBoldText">Building interactivity early was key,</span> since the speed of scanning and building a list is hard to convey in static screens.</p>
                            <img loading="lazy" src={toastMidFiPrototypes} width="1000" alt='Mid-fidelity prototypes: adjust quantities, enable low stock alerts, and print barcode labels.' style={{ marginTop: "20px" }}/>
                        </div>
                    </div>

                    <div className="caseSection" id="test">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">TEST</h3>
                            <h2>User Testing</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Testing a live, coded prototype revealed gaps in LLM transparency</h1>
                            <p className="caseText">A Figma prototype of a chatbot poorly simulates the real experience of receiving tailored answers to your inputs. Knowing this in advance, I <span className="fitkitchBoldText">worked Agile with our engineers to begin coding a scrappy prototype</span> after we converged on the core idea during low-fidelity designs. We tested our coded prototype with our original group of 9 business leaders, and we collected insightful feedback. Our engineering team had limited bandwidth so we couldn’t implement large-scale changes, but we are <span className="fitkitchBoldText">prioritizing these features in our future roadmap.</span></p>
                            <img loading="lazy" src={AISalesUserTesting} width="1000" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">TEST</h3>
                            <h2>Outcomes</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Equipping diverse business leaders with customer foresight</h1>
                            <p className="caseText">Qualitative and quantitative data about customers is powerful for many different business leaders at MongoDB, from <span className="fitkitchBoldText">driving the north-star vision</span> of our product portfolio or <span className="fitkitchBoldText">quickly adapting to the evolving needs</span> of our largest customers as AI radically disrupts the database industry.</p>
                            <img loading="lazy" src={AISalesOutcomes} width="1000" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection" id="reflect">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">REFLECT</h3>
                            <h2>Next Steps</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Strategically expanding to other leaders for buy-in</h1>
                            <p className="caseText">Once we enable users to ad-hoc build their analysis from scratch, this will <span className="fitkitchBoldText">unlock scalability and accessibility.</span> After we gather enough <span className="fitkitchBoldText">buy-in across senior leadership,</span> we will launch this product to all MongoDB leaders (Directors and above).</p>
                            <img loading="lazy" src={AISalesNextSteps} width="900" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">REFLECT</h3>
                            <h2>Takeaways</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Designing AI experiences is challenging, but rewarding</h1>
                            <p className="caseText">I faced <span className="fitkitchBoldText">two main challenges</span> in this project that helped me immensely grow as a product designer. First, designing  conversational AI taught me how to <span className="fitkitchBoldText">anticipate the needs of users with an unpredictable LLM.</span> Second, I learned how to <span className="fitkitchBoldText">navigate a complex political web of users</span> since they were all highly opinionated business leaders with different agendas.</p>
                            <img loading="lazy" style={{ marginBottom: "10vh" }}  src={AISalesTakeaways} width="1000" alt=''/>
                        </div>
                    </div>
                </CaseBody>
            </div>
            <Footer />
        </div>
    )
}

export default Toast