import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './BudgetBalloon.css'
import budgetBalloonMockup from './Budget Balloon Images/budget-balloon-mockup.png'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import budgetBalloonStats from './Budget Balloon Images/budget-balloon-stats.png'
import budgetBalloonBestMockups from './Budget Balloon Images/budget-balloon-best-mockups.png'
import budgetBalloonProblem from './Budget Balloon Images/budget-balloon-problem.png'
import budgetBalloonOverview from './Budget Balloon Images/budget-balloon-overview.png'
import budgetBalloonDesignThinking from './Budget Balloon Images/budget-balloon-design-thinking.png'
import budgetBalloonUserResearch from './Budget Balloon Images/budget-balloon-user-research.png'
import budgetBalloonInterview1 from './Budget Balloon Images/budget-balloon-interview1.png'
import budgetBalloonMatrices from './Budget Balloon Images/budget-balloon-matrices.png'
import budgetBalloonPersonas from './Budget Balloon Images/budget-balloon-personas.png'
import budgetBalloonJourney from './Budget Balloon Images/budget-balloon-journey.png'
import budgetBalloonHMW from './Budget Balloon Images/budget-balloon-hmw.png'
import budgetBalloonSolutions from './Budget Balloon Images/budget-balloon-solutions.png'
import budgetBalloonBalloon from './Budget Balloon Images/budget-balloon-balloon.png'
import budgetBalloonUXDesignHeading from './Budget Balloon Images/budget-balloon-ux-design-heading.png'
import budgetBalloonObjectives from './Budget Balloon Images/budget-balloon-objectives.png'
import budgetBalloonSketches from './Budget Balloon Images/budget-balloon-sketches.png'
import budgetBalloonWireframes from './Budget Balloon Images/budget-balloon-wireframes.png'
import budgetBalloonTakeaways from './Budget Balloon Images/budget-balloon-takeaways.png'


function BudgetBalloon() {
    return (
        <div className="budgetBalloonCaseStudy">
            <div className="budgetBalloonCover">
                <ScrollIndicator />
                <Navbar />
                <h1>Budget Balloon</h1>
                <h3>UX Designer</h3>
                <h2>Motivating teens to build healthy spending habits</h2>
                <img id="budgetBalloonCaseStudyMockup" src={budgetBalloonMockup} alt="Budget Balloon Mockup" width="560" height="auto" />
            </div>
            <div className="budgetBalloonContent">
                
                <div className="budgetBalloonIntro">
                    <h1 className="caseSectionHeader" id="budgetBalloonIntroQuestion">Making financial education and literacy fun for teens</h1>
                    <p className="caseText" id="budgetBalloonIntroText">Budget Balloon is a mobile app that <span className="fitkitchBoldText">teaches teens how to save money</span> and curb unhealthy spending habits by promoting friendly competition to save up for bigger goals. We used <span className="fitkitchBoldText">hot air balloon racing</span> to visualize saving up for a personal goal, adding a fun, kid-friendly, and gamified experience for teens.</p>
                    <img id="budgetBalloonStats" src={budgetBalloonStats} width="250" height="580" />
                    <img id="budgetBalloonBestMockups" src={budgetBalloonBestMockups} width="900" height="406" />
                </div>

                <div id="budgetBalloonPinkBackground"className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader"className="caseText">For our UI/UX Design class project, our UX design challenge was to <span className="fitkitchBoldText">design a solution to help kids save money.</span> We aimed to curb teens' compulsive spending habits and transform the mundane experience of budgeting and saving into a <span className="fitkitchBoldText">fun, rewarding one with a competitive spirit.</span></p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">PROBLEM</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Why is it important to teach kids good spending habits?</h1>
                        <p className="caseText">Kids today have more money to spend, but <span className="fitkitchBoldText">struggle to build healthy spending patterns</span> and budgeting skills. These bad financial habits can <span className="fitkitchBoldText">snowball into adulthood</span> and leave them straddled with debt.</p>
                        <img src={budgetBalloonProblem} width="610" height="180" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">OVERVIEW</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">How does Budget Balloon work?</h1>
                        <img src={budgetBalloonOverview} width="950" height="1040" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">PROCESS</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">What our <span id="designThinkingGradient">design thinking</span> looked like from start to end</h1>
                        <img src={budgetBalloonDesignThinking} width="850" height="300" />
                    </div>
                </div>

                <img className="caseStudyHeading" src={budgetBalloonUserResearch} width="1440" height="380"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">RESEARCH</h3>
                        <h2>User Interviews & Empathy Maps</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Learning more about teens' spending habits</h1>
                        <p className="caseText">We interviewed 10+ teens and their parents to get a holistic view of <span className="fitkitchBoldText">teens' spending habits and major stakeholders</span> for a financial app for teens, whose independence and ability to use the app is influenced by their parents. We used <span className="fitkitchBoldText">empathy maps to identify pain points</span> for teens and parents when budgeting.</p>
                        <img src={budgetBalloonInterview1} width="950" height="960" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">RESEARCH</h3>
                        <h2>2x2 User Matrices</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Understanding teens with <span id="designThinkingGradient">diverse families and behaviors</span></h1>
                        <p className="caseText">To understand how teens have <span className="fitkitchBoldText">different financial needs and behaviors,</span> we mapped various personality traits on a grid, including parental independence, hobbies, scale of wants, and spender-saver behaviors. Here is a particularly insightful one and <span className="fitkitchBoldText">3 main takeaways</span> that informed the direction of our app.</p>
                        <img src={budgetBalloonMatrices} width="950" height="490" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">RESEARCH</h3>
                        <h2>User Personas</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Narrowing our target user: <span id="chronicleUserTestingGradient">big spenders with big wants</span></h1>
                        <p className="caseText">With a large spectrum of teens with different spending behaviors and wants, we drew user personas to concretize a few archetypal users. From these, we decided to target <span className="fitkitchBoldText">teens who have big goals to save for, but waste their money on small things.</span></p>
                        <img src={budgetBalloonPersonas} width="950" height="650" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">RESEARCH</h3>
                        <h2>Journey Mapping</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">The endless cycle of saving, then losing money</h1>
                        <p className="caseText">We created a journey map to better empathize with teens, who have a goal to save up for, but always end up wasting the money on small things.</p>
                        <img src={budgetBalloonJourney} width="950" height="500" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">DEFINE</h3>
                        <h2>HMW Statement</h2>
                    </div>
                    <div className="caseMain">
                        <p className="caseText" id="noSectionHeader">After researching and empathizing with teens, we formulated our HMW statement to guide brainstorming solutions.</p>
                        <img src={budgetBalloonHMW} width="850" height="auto" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">DEFINE</h3>
                        <h2>2x2 Solutions Matrix</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Finding a <span id="budgetBalloonSolutionsGradient">fun, ethical solution</span></h1>
                        <p className="caseText">We used a 2x2 solutions matrix to filter out the most <span className="fitkitchBoldText">feasible and original ideas.</span> We decided to <span className="fitkitchBoldText">reject negative reinforcement</span> as motivation because while effective in the short-term, it is harmful in the long run.</p>
                        <img src={budgetBalloonSolutions} width="600" height="480" />
                    </div>
                </div>

                <div id="budgetBalloonSolution">
                    <h3 id="budgetBalloonSolution1">SOLUTION</h3>
                    <h1 id="budgetBalloonSolution2">Budget Balloon</h1>
                    <h2 id="budgetBalloonSolution3">A mobile app that encourages teens to save up for their goals through a community-oriented, gamified experience of a hot air balloon race</h2>
                    <img id="budgetBalloonBalloon" src={budgetBalloonBalloon} width="300" height="350" />
                </div>

                <img className="caseStudyHeading" src={budgetBalloonUXDesignHeading} width="1440" height="380"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">IDEATE</h3>
                        <h2>Design Objectives</h2>
                    </div>
                    <div className="caseMain">
                        <img src={budgetBalloonObjectives} width="950" height="190" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">IDEATE</h3>
                        <h2>Flow Sketches</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Enhancing sociality and accountability</h1>
                        <p className="caseText">We did <span className="fitkitchBoldText">two rounds of flow sketches:</span> the 1st to determine general layout, navigation, and information architecture, and the 2nd to drill in the finer details. Here are <span className="fitkitchBoldText">three key decisions</span> we made to enhance our basic feature functionality.</p>
                        <img src={budgetBalloonSketches} width="950" height="1040" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">PROTOTYPE & TEST</h3>
                        <h2>Mid-Fidelity Wireframes</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Teaching nuanced budgeting skills</h1>
                        <p className="caseText">We rapidly translated our flow sketches to wireframes, iterating to the highest detail without adding color. Here are <span className="fitkitchBoldText">3 feature enhancements</span> we iterated to <span className="fitkitchBoldText">teach teens about budgeting in reality,</span> which involves collaboration, timelines, and consequences.</p>
                        <img src={budgetBalloonWireframes} width="950" height="1040" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">REFLECT</h3>
                        <h2>Takeaways & Next Steps</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">Designing this app was very rewarding, especially because I was working with 3 other designers with different ideas that we merged into a <span className="fitkitchBoldText">cohesive creative direction.</span> Budget Balloon empowers teenagers in their social circles to learn better spending habits, curb compulsive spending, and save up for larger goals. Here are <span className="fitkitchBoldText">3 key takeaways</span> we learned from this process.</p>
                        <img id="chronicleTakeaways" src={budgetBalloonTakeaways} width="950" height="320" />
                        <p className="caseText">In the future, we plan to jump into the UI and play with colors, typography, patterns, and stylings to make the app more vibrant and engaging.</p>
                    </div>
                </div>

                

            </div>
            <Footer />
        </div>
    )
}

export default BudgetBalloon