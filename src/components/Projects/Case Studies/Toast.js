import React from 'react'
import Footer from '../../Footer/Footer.js'
import './PerformanceAdvisor.css'

import toastContextStats from './Toast Images/toast-context-stats.svg'
import toastSolutionFeatures from './Toast Images/toast-solution-features.svg'
import CaseCover from '../../CaseStudy/CaseCover.js'
import CaseOverview from '../../CaseStudy/CaseOverview.js'
import CaseBody from '../../CaseStudy/CaseBody.js'
import useScrollToTopOnLoad from '../../CaseStudy/useScrollToTopOnLoad.js'

import AISalesResearchHeading from './AI Sales Intelligence Images/ai-sales-research-heading.png'
import AISalesCurrentProduct from './AI Sales Intelligence Images/ai-sales-current-product.png'
import AISalesCompetitiveAnalysis from './AI Sales Intelligence Images/ai-sales-competitive-analysis.png'
import AISalesNeeds from './AI Sales Intelligence Images/ai-sales-needs.png'
import AISalesPersonas from './AI Sales Intelligence Images/ai-sales-personas.png'
import AISalesPOV from './AI Sales Intelligence Images/ai-sales-pov.png'
import AISalesHMW from './AI Sales Intelligence Images/ai-sales-hmw.png'
import AISalesDesignHeading from './AI Sales Intelligence Images/ai-sales-design-heading.png'
import AISalesObjectives from './AI Sales Intelligence Images/ai-sales-objectives.png'
import AISalesSketches from './AI Sales Intelligence Images/ai-sales-sketches.png'
import AISalesWireframes from './AI Sales Intelligence Images/ai-sales-wireframes.png'
import AISalesConceptTesting from './AI Sales Intelligence Images/ai-sales-concept-testing.png'
import AISalesNewWireframes from './AI Sales Intelligence Images/ai-sales-new-wireframes.png'
import AISalesMockups from './AI Sales Intelligence Images/ai-sales-mockups.png'
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

                    <img loading="lazy" id="research" src={AISalesResearchHeading} className="caseStudyHeading" width='100%' alt=''/>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">RESEARCH</h3>
                            <h2>Current Product State</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Our goal: take a no-frills proof of concept to the next level</h1>
                            <p className="caseText">The currently existing tool consists of pre-made analyses with their own pre-built prompts that our LLM uses to <span className="fitkitchBoldText">generate a dataset of results to answer the core question of the analysis.</span> For example, if the analysis is “Identify top 10 complaints from existing customers in the last 30 days”, the tool outputs a table with complaints and a list of customers who mentioned that complaint in sales calls.</p>
                            <img loading="lazy" src={AISalesCurrentProduct} width="950" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">RESEARCH</h3>
                            <h2>Competitive Analysis</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Understanding how B2B data analytics tools integrate AI</h1>
                            <p className="caseText">I conducted industry research on AI-powered data analytics tools meant for enterprises and <span className="fitkitchBoldText">categorized the vendors into 3 core functionalities</span> we want to blend into our tool. <span className="fitkitchBoldText">Business intelligence (BI) tools</span> transform raw data into meaningful insights for corporations, <span className="fitkitchBoldText">self-service data analytics</span> use AI to lower the technical barrier for data exploration, and <span className="fitkitchBoldText">CRM platforms</span> specialize in aggregating customer data and interactions.</p>
                            <img loading="lazy" src={AISalesCompetitiveAnalysis} width="900" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">RESEARCH</h3>
                            <h2>User Interviews & Needs</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Users want to abstract away the technical grunt work</h1>
                            <p className="caseText">I conducted user interviews with 9 business leaders at MongoDB <span className="fitkitchBoldText">ranging from Directors to Senior Vice Presidents.</span> While the type of questions they want to answer differ, I discovered key common needs among all of them that we needed to address to <span className="fitkitchBoldText">make this tool scalable and powerful.</span></p>
                            <img loading="lazy" src={AISalesNeeds} width="950" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">RESEARCH</h3>
                            <h2>User Personas</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Leaders care about customer sentiment, personas, and outcomes</h1>
                            <p className="caseText">We interviewed 9 leaders across 4 business units who would benefit the most from getting their finger closer to the pulse of what’s happening with customers. By investigating the types of questions leaders want to drill into, we better understood our <span className="fitkitchBoldText">users’ mental model and what their objectives are coming into this tool.</span></p>
                            <img loading="lazy" src={AISalesPersonas} width="950" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection" id="define">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>Point-of-View Statement</h2>
                        </div>
                        <div className="caseMain">
                        <img loading="lazy" src={AISalesPOV} width="800" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>How Might We Statements</h2>
                        </div>
                        <div className="caseMain">
                        <img loading="lazy" src={AISalesHMW} width="800" alt=''/>
                        </div>
                    </div>

                    <img loading="lazy" id="ideate" src={AISalesDesignHeading} className="caseStudyHeading" width='100%' alt=''/>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">DEFINE</h3>
                            <h2>Design Objectives</h2>
                        </div>
                        <div className="caseMain">
                        <img loading="lazy" src={AISalesObjectives} width="900" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">IDEATE</h3>
                            <h2>Flow Sketches</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">A tool to test & perfect a prompt that outputs a dataset of results</h1>
                            <p className="caseText">Using rough paper sketches, I thought about how users could create their own analyses to remove their reliance on our team painstakingly building them. I <span className="fitkitchBoldText">envisioned a sandbox (testing environment)</span> where users could write a prompt, preview a dataset generated on a small subset of call transcripts, iterate on the prompt, and finally create the analysis.</p>
                            <img loading="lazy" src={AISalesSketches} width="950" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection" id="prototype">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">PROTOTYPE</h3>
                            <h2>Low-Fidelity Sketches</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Making prompt building as easy, fast, and non-technical as possible</h1>
                            <p className="caseText">Through multiple iterations with constant feedback from my stakeholders, I expanded different ideas to make prompt building more accessible to leaders with <span className="fitkitchBoldText">limited time and varying technical backgrounds.</span> Here are a couple features we explored:</p>
                            <img loading="lazy" src={AISalesWireframes} width="1000" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">IDEATE</h3>
                            <h2>Concept Testing</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Major concept shift to prioritize result usability over prompt building</h1>
                            <p className="caseText">We tested these concepts with a couple business leaders. They liked writing their own prompts, but they thought that effort was anti-climactic since the result was essentially a massive Excel sheet they had to dig through for insights. After discussing with my PM and engineers, we decided to <span className="fitkitchBoldText">de-prioritize prompt building capabilities</span> for a future version and <span className="fitkitchBoldText">focus on immediately surfacing more meaningful answers.</span></p>
                            <img loading="lazy" src={AISalesConceptTesting} width="1000" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">PROTOTYPE</h3>
                            <h2>Sketches & Low-Fidelity Wireframes</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Chat with your data in natural language for insights in mere seconds</h1>
                            <p className="caseText">Going back to the drawing board, I brainstormed how to <span className="fitkitchBoldText">package insights from complex data</span> in an understandable, actionable way. We iterated on an tool that <span className="fitkitchBoldText">analyzes the AI-generated dataset, uncovers patterns,</span> and surfaces valuable insights in natural language. Users can ask questions in a conversational environment to progressively dig deeper, find examples from the data, and discover related insights.</p>
                            <img loading="lazy" src={AISalesNewWireframes} width="1000" alt=''/>
                        </div>
                    </div>

                    <div className="caseSection">
                        <div className="caseSideHeader">
                            <h3 id="redCaseSideHeader">PROTOTYPE</h3>
                            <h2>High-Fidelity Mockups</h2>
                        </div>
                        <div className="caseMain">
                            <h1 className="caseSectionHeader">Polishing features to flatten technical barriers to data exploration</h1>
                            <p className="caseText">Moving to high-fidelity designs with this core workflow of “chatting with your data”, we iterated on additional features that would <span className="fitkitchBoldText">accelerate the process of capturing meaningful insights.</span> Here are some key decisions we made:</p>
                            <img loading="lazy" src={AISalesMockups} width="1000" alt=''/>
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