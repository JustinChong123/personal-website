import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './PerformanceAdvisor.css'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'

import testCoverBottom from './AI Sales Intelligence Images/test-cover-bottom.svg'
import AISalesCoverBottom from './AI Sales Intelligence Images/ai-sales-cover-bottom.svg'
import paCoverBottom from './Performance Advisor Images/pa-cover-bottom.svg'
import AISalesStats from './AI Sales Intelligence Images/ai-sales-stats.svg'
import AISalesOverview from './AI Sales Intelligence Images/ai-sales-overview.svg'
import AISalesContext from './AI Sales Intelligence Images/ai-sales-context.png'
import aiSalesSolution from './AI Sales Intelligence Images/ai-sales-solution.png'
import AISalesFeatures from './AI Sales Intelligence Images/ai-sales-features.png'
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
import paProcess from './Performance Advisor Images/pa-process.png'
import paResults from './Performance Advisor Images/pa-results.svg'
import paTakeaways from './Performance Advisor Images/pa-takeaways.png'

function AISalesIntelligence() {
    return (
        <div className="container">
            <div className="cover">
                <ScrollIndicator />
                <Navbar onCase={true} />
                <img id='paCoverBottom' src={AISalesCoverBottom} alt='' width="100%"/>
            </div>
            
            <div className="budgetBalloonContent">

                <img id='paOverview' src={AISalesOverview} alt='' width="100%"/>
                <img id='paStats' src={AISalesStats} alt='' width="100%"/>

                {/* <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">SOLUTION</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Enabling developers to holistically diagnose performance issues</h1>
                        <p className="caseText">Performance Advisor is a <span className="fitkitchBoldText">cloud analytics tool</span> that enables developers to diagnose slow queries and improve performance on their MongoDB database clusters. I <span className="fitkitchBoldText">re-designed Performance Advisor to be “cluster-centric,”</span> enabling novice users and enterprise customers <span className="fitkitchBoldText">to gain high-level, aggregated insights about their performance</span> across different deployment models.</p>
                    </div>
                </div> */}

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">CONTEXT</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">You might be wondering... what is MongoDB?</h1>
                        <p className="caseText">MongoDB is the world’s <span className="fitkitchBoldText">most popular non-relational cloud database</span> where developers can flexibly manage their data to build applications faster. It’s used by everyone from junior developers to mid-sized startups to  <span className="fitkitchBoldText">massive enterprises like Adobe and JP Morgan Chase.</span></p>
                        <img src={AISalesContext} width="700" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">SOLUTION</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">AI-powered customer intelligence for business leaders at MongoDB</h1>
                        <p className="caseText">Born out of a need to accelerate data-driven decision-making for key business leaders at MongoDB, we launched a conversational AI chatbot that <span className="fitkitchBoldText">aggregates customer insights and trends from a previously untapped body</span> of historical sales call transcripts. Leaders spanning multiple business units like Sales, Marketing, and Product can ask any question they want to quickly understand customer sentiment, product feedback, and success of sales messaging and marketing campaigns. </p>
                        <p className="caseText">By getting these high-level insights about MongoDB’s customers into the hands of our business leadership, they can quickly make <span className="fitkitchBoldText">data-backed decisions</span> to optimize product and Go-to-Market (GTM) strategy, ultimately <span className="fitkitchBoldText">acquiring more customers and driving revenue.</span></p>
                        <img src={aiSalesSolution} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">SOLUTION OVERVIEW</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Main features of this AI sales intelligence chatbot</h1>
                        <img src={AISalesFeatures} width="1000" alt=''/>
                    </div>
                </div>

                <img src={AISalesResearchHeading} className="caseStudyHeading" width='100%' alt=''/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">RESEARCH</h3>
                        <h2>Current Product State</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Our goal: take a no-frills proof of concept to the next level</h1>
                        <p className="caseText">The currently existing tool consists of pre-made analyses with their own pre-built prompts that our LLM uses to <span className="fitkitchBoldText">generate a dataset of results to answer the core question of the analysis.</span> For example, if the analysis is “Identify top 10 complaints from existing customers in the last 30 days”, the tool outputs a table with complaints and a list of customers who mentioned that complaint in sales calls.</p>
                        <img src={AISalesCurrentProduct} width="950" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">RESEARCH</h3>
                        <h2>Competitive Analysis</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Understanding how B2B data analytics tools integrate AI</h1>
                        <p className="caseText">I conducted industry research on AI-powered data analytics tools meant for enterprises and <span className="fitkitchBoldText">categorized the vendors into 3 core functionalities</span> we want to blend into our tool. <span className="fitkitchBoldText">Business intelligence (BI) tools</span> transform raw data into meaningful insights for corporations, <span className="fitkitchBoldText">self-service data analytics</span> use AI to lower the technical barrier for data exploration, and <span className="fitkitchBoldText">CRM platforms</span> specialize in aggregating customer data and interactions.</p>
                        <img src={AISalesCompetitiveAnalysis} width="950" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">RESEARCH</h3>
                        <h2>User Interviews & Needs</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Users want to abstract away the technical grunt work</h1>
                        <p className="caseText">I conducted user interviews with 9 business leaders at MongoDB <span className="fitkitchBoldText">ranging from Directors to Senior Vice Presidents.</span> While the type of questions they want to answer differ, I discovered key common needs among all of them that we needed to address to <span className="fitkitchBoldText">make this tool scalable and powerful.</span></p>
                        <img src={AISalesNeeds} width="950" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">RESEARCH</h3>
                        <h2>User Personas</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Leaders care about customer sentiment, personas, and outcomes</h1>
                        <p className="caseText">We interviewed 9 leaders across 4 business units who would benefit the most from getting their finger closer to the pulse of what’s happening with customers. By investigating the types of questions leaders want to drill into, we better understood our <span className="fitkitchBoldText">users’ mental model and what their objectives are coming into this tool.</span></p>
                        <img src={AISalesPersonas} width="950" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">DEFINE</h3>
                        <h2>Point-of-View Statement</h2>
                    </div>
                    <div className="caseMain">
                    <img src={AISalesPOV} width="800" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">DEFINE</h3>
                        <h2>How Might We Statements</h2>
                    </div>
                    <div className="caseMain">
                    <img src={AISalesHMW} width="800" alt=''/>
                    </div>
                </div>

                <img src={AISalesDesignHeading} className="caseStudyHeading" width='100%' alt=''/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">DEFINE</h3>
                        <h2>Design Objectives</h2>
                    </div>
                    <div className="caseMain">
                    <img src={AISalesObjectives} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">IDEATE</h3>
                        <h2>Flow Sketches</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">A tool to test & perfect a prompt that outputs a dataset of results</h1>
                        <p className="caseText">Using rough paper sketches, I thought about how users could create their own analyses to remove their reliance on our team painstakingly building them. I <span className="fitkitchBoldText">envisioned a sandbox (testing environment)</span> where users could write a prompt, preview a dataset generated on a small subset of call transcripts, iterate on the prompt, and finally create the analysis.</p>
                        <img src={AISalesSketches} width="950" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">PROTOTYPE</h3>
                        <h2>Low-Fidelity Sketches</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Making prompt building as easy, fast, and non-technical as possible</h1>
                        <p className="caseText">Through multiple iterations with constant feedback from my stakeholders, I expanded different ideas to make prompt building more accessible to leaders with <span className="fitkitchBoldText">limited time and varying technical backgrounds.</span> Here are a couple features we explored:</p>
                        <img src={AISalesWireframes} width="1000" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">IDEATE</h3>
                        <h2>Concept Testing</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Major concept shift to prioritize result usability over prompt building</h1>
                        <p className="caseText">We tested these concepts with a couple business leaders. They liked writing their own prompts, but they thought that effort was anti-climactic since the result was essentially a massive Excel sheet they had to dig through for insights. After discussing with my PM and engineers, we decided to <span className="fitkitchBoldText">de-prioritize prompt building capabilities</span> for a future version and <span className="fitkitchBoldText">focus on immediately surfacing more meaningful answers.</span></p>
                        <img src={AISalesConceptTesting} width="1000" alt=''/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AISalesIntelligence