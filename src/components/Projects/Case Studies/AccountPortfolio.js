import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './PerformanceAdvisor.css'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'

import portfolioCoverBottom from './Account Portfolio Images/portfolio-cover-bottom.svg'
import portfolioStats from './Account Portfolio Images/portfolio-stats.svg'
import portfolioContext from './Account Portfolio Images/portfolio-context.png'
import portfolioOverview from './Account Portfolio Images/portfolio-overview.svg'
import portfolioBackground from './Account Portfolio Images/portfolio-background.png'
import portfolioFeatures from './Account Portfolio Images/portfolio-features.png'
import portfolioResearchHeading from './Account Portfolio Images/portfolio-research-heading.png'
import portfolioCompetitiveAnalysis from './Account Portfolio Images/portfolio-competitive-analysis.png'
import portfolioInterviews from './Account Portfolio Images/portfolio-interviews.png'
import portfolioMapping from './Account Portfolio Images/portfolio-mapping.png'
import portfolioPersonas from './Account Portfolio Images/portfolio-personas.png'
import portfolioPOV from './Account Portfolio Images/portfolio-pov.png'
import portfolioHMW from './Account Portfolio Images/portfolio-hmw.png'
import portfolioDesignHeading from './Account Portfolio Images/portfolio-design-heading.png'
import portfolioObjectives from './Account Portfolio Images/portfolio-objectives.png'
import portfolioStudio from './Account Portfolio Images/portfolio-studio.png'
import portfolioWireframes from './Account Portfolio Images/portfolio-wireframes.png'
import portfolioConceptTesting from './Account Portfolio Images/portfolio-concept-testing.png'
import portfolioMockups from './Account Portfolio Images/portfolio-mockups.png'
import portfolioUserTesting from './Account Portfolio Images/portfolio-user-testing.png'
import portfolioOutcomes from './Account Portfolio Images/portfolio-outcomes.png'
import portfolioNextSteps from './Account Portfolio Images/portfolio-next-steps.png'
import portfolioTakeaways from './Account Portfolio Images/portfolio-takeaways.png'






function AccountPortfolio() {
    return (
        <div className="container">
            <div className="cover">
                <ScrollIndicator />
                <Navbar onCase={true} />
                <img id='paCoverBottom' src={portfolioCoverBottom} alt='' width="100%"/>
            </div>
            
            <div className="budgetBalloonContent">

                <img id='paOverview' src={portfolioOverview} alt='' width="100%"/>
                <img id='paStats' src={portfolioStats} alt='' width="100%"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>CONTEXT</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">You might be wondering... what is MongoDB?</h1>
                        <p className="caseText">MongoDB is the world’s <span className="fitkitchBoldText">most popular non-relational cloud database</span> where developers can flexibly manage their data to build applications faster. It’s used by everyone from junior developers to mid-sized startups to  <span className="fitkitchBoldText">massive enterprises like Adobe and JP Morgan Chase.</span></p>
                        <img src={portfolioContext} width="800" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>SOLUTION</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">A single pane of glass for customer activites and trends</h1>
                        <p className="caseText">Account Portfolio enables <span className="fitkitchBoldText">Customer Success Managers (CSMs)</span> at MongoDB to view their entire account portfolio in a quick glance. This 10,000-ft view highlights customer usage patterns, database health, and spend anomalies to empower CSMs to quickly triage and tackle problems before they materialize.</p>
                        <p className="caseText">We envision this single pane of glass to be the <span className="fitkitchBoldText">new starting point</span> for a CSM’s daily workflow. By aggregating dynamic changes in key customer signals over time, CSMs spend less time collecting and analyzing data as we accelerate them to quickly engage customers to <span className="fitkitchBoldText">mitigate risk and chase revenue expansion opportunities.</span></p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <img src={portfolioBackground} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROBLEM</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">CSMs lack an overview of their account portfolio</h1>
                        <p className="caseText">CSMs juggle anywhere between 1 to 2,500 accounts per quarter. Across tools in their end-to-end workflow, there is <span className="fitkitchBoldText">no way for a CSM to view all of their accounts</span> and associated key metrics in one place. CSMs are burdened with context switching between tools and accounts, contributing to a high incidence of <span className="fitkitchBoldText">missed opportunities for customer engagement,</span> which is eroding customer trust in MongoDB and driving revenue contraction and churn.</p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>SOLUTION OVERVIEW</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Main features of Account Portfolio</h1>
                        <img src={portfolioFeatures} width="1000" alt=''/>
                    </div>
                </div>

                <img src={portfolioResearchHeading} className="caseStudyHeading" width='100%' alt=''/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>Competitive Analysis</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Market leaders show account trends over time, not static snapshots</h1>
                        <p className="caseText">I conducted industry research on <span className="fitkitchBoldText">CRM software, which centralize customer information</span> and manage how GTM teams like Customer Success interact with customers. Specifically, I researched <span className="fitkitchBoldText">how these platforms organize multi-account views</span> and identify opportunities to strengthen customer relationships.</p>
                        <img src={portfolioCompetitiveAnalysis} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>User Interviews</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">In a couple seconds, CSMs need to know what actions to take first</h1>
                        <p className="caseText">I conducted user interviews with <span className="fitkitchBoldText">11 CSMs in 4 different departments in a diverse seniority range.</span> Despite their different workflows and portfolio types, I discovered key common needs that would benefit all CSMs.</p>
                        <img src={portfolioInterviews} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>Data Mapping</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Mapping out the data CSMs use to make account decisions</h1>
                        <p className="caseText">Through a stack ranking exercise with users, we <span className="fitkitchBoldText">identified the most important data points</span> that CSMs rely on to put together an accurate picture of the status of an account. Since this data lives in multiple tools, I collaborated with the engineering team and data owners to deprioritize data sources that are difficult to query and integrate.</p>
                        <img src={portfolioMapping} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>User Personas</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Prioritizing users that operate at the account level</h1>
                        <p className="caseText">There are <span className="fitkitchBoldText">4 different types of CSMs</span> that differ in how many accounts they handle, how big those customers are, and how they engage with them. We <span className="fitkitchBoldText">prioritized Dedicated CSMs</span> as they represent the majority of CSMs, struggle to juggle multiple accounts, and their KPIs are directly tied to account performance.</p>
                        <img src={portfolioPersonas} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>Point-of-View Statement</h2>
                    </div>
                    <div className="caseMain">
                        <img src={portfolioPOV} width="800" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>How Might We Statements</h2>
                    </div>
                    <div className="caseMain">
                        <img src={portfolioHMW} width="800" alt=''/>
                    </div>
                </div>

                <img src={portfolioDesignHeading} className="caseStudyHeading" width='100%' alt=''/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>Design Objectives</h2>
                    </div>
                    <div className="caseMain">
                        <img src={portfolioObjectives} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>IDEATE</h3>
                        <h2>Design Studio</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Brainstorming and prioritizing ideas with key stakeholders</h1>
                        <p className="caseText">Since this was a 0 to 1 feature, the solution space was relatively nebulous and ambiguous. To ensure I would <span className="fitkitchBoldText">incorporate my immediate stakeholders’ ideas and opinions early</span> in the design process, I facilitated a design studio. With my PM, design lead, and engineering lead, we explored a diverse set of ideas through rapid sketching (Crazy 8s) and <span className="fitkitchBoldText">identified common threads and directions</span> as the foundation of my design explorations to come.</p>
                        <img src={portfolioStudio} width="1000" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROTOTYPE</h3>
                        <h2>Low-Fidelity Wireframes</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Transforming raw data into actionable priorities for CSMs</h1>
                        <p className="caseText">Jumping off these common design directions my stakeholders agreed were important, I iterated on wireframes to explore different concepts. I constantly <span className="fitkitchBoldText">incorporated feedback from my immediate stakeholders</span> and design team. Here are three key decisions I made:</p>
                        <img src={portfolioWireframes} width="1000" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>TEST</h3>
                        <h2>Concept Testing</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">For a 10,000 ft view, complex data viz doesn’t quickly capture insights</h1>
                        <p className="caseText">I tested my low-fidelity concepts with a <span className="fitkitchBoldText">focus group of 8 CSMs for early-stage feedback,</span> focusing on flow and functionality rather than UI aesthetics. I also <span className="fitkitchBoldText">ran a preference test</span> between 3 different options to show changes in account revenue over time, which is critical for understanding health and forecasting churn.</p>
                        <img src={portfolioConceptTesting} width="1000" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROTOTYPE</h3>
                        <h2>High-Fidelity Mockups</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">More customization and personalization for diverse information needs</h1>
                        <p className="caseText">Iterating into high-fidelity mockups, we explored how the interface could be <span className="fitkitchBoldText">flexible for different kinds of CSMs and even senior CS leadership</span> who need to capture insights at different levels. Here are three key decisions I made:</p>
                        <img src={portfolioMockups} width="1000" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>TEST</h3>
                        <h2>User Testing</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Improving how data is organized and actioned on</h1>
                        <p className="caseText">We conducted <span className="fitkitchBoldText">usability testing with 12 users</span> (8 CSMs and 4 CSM Managers) across our 4 personas: Dedicated, Strategic, Onboarding, and Scaled. As expected, <span className="fitkitchBoldText">Dedicated and Scaled CSMs benefit the most from this tool</span> since they operate on the account-level and handle multiple accounts. Users said the portfolio is a valuable 10,000 ft view, the customer data chosen points them in the right direction, and favoriting accounts is great for large enterprises or newly onboarded customers. Here are the <span className="fitkitchBoldText">main improvements</span> we made based on user feedback.</p>
                        <img src={portfolioUserTesting} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>TEST</h3>
                        <h2>Outcomes</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Post-launch shows strong adoption, but discoverability needs work</h1>
                        <p className="caseText">After building and launching this tool to CSMs, we analyzed product analytics in Amplitude, and we learned that Account Portfolio <span className="fitkitchBoldText">retained a consistent, loyal user base</span> This product even <span className="fitkitchBoldText">drove net-new users</span> to Customer Hub, our centralized platform for all customer data. We came a few percentage points shy of our target adoption metric, which we attributed to <span className="fitkitchBoldText">frictions in discoverability</span> and plan to address.</p>
                        <img src={portfolioOutcomes} width="900" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>REFLECT</h3>
                        <h2>Next Steps</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Increasing discoverability & interviewing secondary users</h1>
                        <p className="caseText">This was an MVP we launched to the entire CSM organization. For future versions, we identified key areas to increase discoverability within the <span className="fitkitchBoldText">highly nested information architecture</span> and better target secondary users whose KPIs are <span className="fitkitchBoldText">not directly tied to revenue at the account level.</span></p>
                        <img src={portfolioNextSteps} width="1000" alt=''/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>REFLECT</h3>
                        <h2>Takeaways</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Transforming data visualizations into compelling narratives</h1>
                        <p className="caseText">When designing data-heavy interfaces, I learned that the <span className="fitkitchBoldText">data is not the end product.</span> The <span className="fitkitchBoldText">end product is a valuable and actionable insight</span> that the user realizes by connecting the dots. This eureka moment changed how I think about design, and it was thrilling to launch this product and and hear so much positive feedback from users. I’m excited to make improvements to eventually make this tool the <span className="fitkitchBoldText">“cockpit” that drives how CSMs engage with customers.</span></p>
                        <img src={portfolioTakeaways} style={{ marginBottom: "10vh" }} width="1000" alt=''/>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default AccountPortfolio