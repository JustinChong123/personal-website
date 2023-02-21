import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import './OhBuoy.css'
import ohBuoyStats from './Oh Buoy Images/oh-buoy-stats.png'
import ohBuoyProblem from './Oh Buoy Images/oh-buoy-problem.png'
import ohBuoyOverview from './Oh Buoy Images/oh-buoy-overview.png'
import ohBuoyDesignThinking from './Oh Buoy Images/oh-buoy-design-thinking.png'
import ohBuoyUserResearch from './Oh Buoy Images/oh-buoy-user-research.png'
import ohBuoyProblemStatement from './Oh Buoy Images/oh-buoy-problem-statement.png'
import ohBuoyStakeholders from './Oh Buoy Images/oh-buoy-stakeholders.png'
import ohBuoyCompetitiveAnalysis from './Oh Buoy Images/oh-buoy-competitive-analysis.png'
import ohBuoyInterviews from './Oh Buoy Images/oh-buoy-interviews.png'
import ohBuoyPurchaserSurvey from './Oh Buoy Images/oh-buoy-purchaser-survey.png'
import ohBuoyPrototyping from './Oh Buoy Images/oh-buoy-prototyping.png'
import ohBuoySpecifications from './Oh Buoy Images/oh-buoy-specifications.png'
import ohBuoyDesignObjectives from './Oh Buoy Images/oh-buoy-design-objectives.png'
import ohBuoyAlternativesMatrix from './Oh Buoy Images/oh-buoy-alternatives-matrix.png'


function OhBuoy() {
    return (
        <div className="ohBuoyCaseStudy">
            <div className="ohBuoyCover">
                <ScrollIndicator />
                <Navbar />
                <h1>Oh Buoy!</h1>
                <h3>Physical Product Designer</h3>
                <h2>Preventing child drowning with a self-inflating harness</h2>
            </div>

            <div className="ohBuoyContent">

                <div className="ohBuoyIntro">
                    <h1 className="caseSectionHeader" id="ohBuoyIntroQuestion">Preventing accidental child drowning</h1>
                    <p className="caseText" id="ohBuoyIntroText">Oh Buoy! is a <span className="fitkitchBoldText">self-inflating harness</span> that inflates upon submersion in water to prevent children aged 2-4 from <span className="fitkitchBoldText">accidentally drowning in pools.</span></p>
                    <p className="caseText" id="ohBuoyIntroText"><span className="fitkitchBoldText">Drowning is the #1 leading cause</span> of accidental death for 2-4 year old children and can cause permanent physical and psychological damage. We wanted to create an <span className="fitkitchBoldText">everyday wearable product</span> to ensure children's safety if they fall into a pool.</p>
                    <img id="ohBuoyStats" src={ohBuoyStats} width="250" height="580" />
                    {/* <img id="budgetBalloonBestMockups" src={budgetBalloonBestMockups} width="900" height="406" /> */}
                </div>

                <div id="ohBuoyOrangeBackground"className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader"className="caseText">In my <span className="fitkitchBoldText">Intro to Engineering class</span> at Dartmouth, our 10-week long project was to design, build, and test a physical product to <span className="fitkitchBoldText">solve an unmet need</span> in the theme of physical fitness. Our team of 5 followed an <span className="fitkitchBoldText">iterative design process</span> to conduct problem discovery, user research, and multiple rounds of physical modeling, prototyping, and user testing to build our child-friendly, self-inflatable harness.</p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">PROBLEM</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Why is aquatic safety for young children important?</h1>
                        <p className="caseText">A <span className="fitkitchBoldText">staggering 900 children die every year</span> from accidental drowning, mostly in household pools. Children who survive drowning suffer from potentially lifelong physical, neurological, and psychological damage.</p>
                        <img src={ohBuoyProblem} width="800" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">OVERVIEW</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">How does Oh Buoy! work?</h1>
                        <img id="ohBuoyOverview" src={ohBuoyOverview} width="950"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">PROCESS</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">What our <span id="designThinkingGradient">design thinking</span> looked like from start to end</h1>
                        <img src={ohBuoyDesignThinking} width="1000"/>
                    </div>
                </div>

                <img className="caseStudyHeading" src={ohBuoyUserResearch} width="1440"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">RESEARCH</h3>
                        <h2>Problem Discovery</h2>
                    </div>
                    <div className="caseMain">
                        <img src={ohBuoyProblemStatement} width="900"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">RESEARCH</h3>
                        <h2>Stakeholder Analysis</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Identifying our users, purchasers, and relevant stakeholders</h1>
                        <p className="caseText">We conducted a stakeholder analysis to inform our design process to not only make it user-friendly, but make it <span className="fitkitchBoldText">appealing for parents to buy</span> and potentially partnering with other stakeholders who influence our <span className="fitkitchBoldText">product design and business plan.</span></p>
                        <img src={ohBuoyStakeholders} width="800"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">RESEARCH</h3>
                        <h2>Competitive Analysis</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Current state-of-the-art solutions are inaccessible and ineffective</h1>
                        <p className="caseText">In charge of competitive analysis, I researched current state-of-the-art solutions and patents to <span className="fitkitchBoldText">discover how to differentiate our product and address shortcomings</span> in current solutions to prevent child drowning. We identified three main categories in the aquatic safety market and solidified how our product fills an unmet niche.</p>
                        <img src={ohBuoyCompetitiveAnalysis} width="900"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">RESEARCH</h3>
                        <h2>User Interviews</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Talking to users and purchasers about wearability</h1>
                        <p className="caseText">We all conducted user interviews with various parents of 2-4 year old children. Here are our three main takeaways.</p>
                        <img src={ohBuoyInterviews} width="900"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">RESEARCH</h3>
                        <h2>Purchaser Survey</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Launching a survey to collect purchaser input</h1>
                        <p className="caseText">While 2-4 year old children are our users, our purchasers are their parents, so it was important for us to receive feedback and input from them to inform our design decisions. We launched a survey on <span className="fitkitchBoldText">parent-related forums</span> on Facebook and Reddit to collect information, and we received <span className="fitkitchBoldText">34 responses.</span></p>
                        <img src={ohBuoyPurchaserSurvey} width="950"/>
                    </div>
                </div>

                <img className="caseStudyHeading" src={ohBuoyPrototyping} width="1440"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">DEFINE</h3>
                        <h2>Specifications</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Establishing specifications for our product to achieve</h1>
                        <p className="caseText">Before we jump into ideation, we established <span className="fitkitchBoldText">11 specifications</span> to guide our design and prototyping process. We also defined a <span className="fitkitchBoldText">quantification</span> for each specification, and a <span className="fitkitchBoldText">test</span> to determine if our product meets each specification.</p>
                        <img src={ohBuoySpecifications} width="950"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">DEFINE</h3>
                        <h2>Design Objectives</h2>
                    </div>
                    <div className="caseMain">
                        <p className="caseText" id="noSectionHeader">From our 11 specifications, these are three most important design objectives to strongly guide our design and engineering direction.</p>
                        <img src={ohBuoyDesignObjectives} width="900"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">IDEATE</h3>
                        <h2>Alternatives Matrix</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Brainstorming and ranking possible solutions</h1>
                        <p className="caseText">After establishing our design objectives, we jumped into diverging and ideating as many creative, wild solutions as possible. To <span className="fitkitchBoldText">quantitatively assess the potential of our ideas,</span> we used an alternatives matrix to score each idea against our 11 specifications, which had different weights according to their importance. </p>
                        <img src={ohBuoyAlternativesMatrix} width="950"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="orangeCaseSideHeader">IDEATE</h3>
                        <h2>Sketching</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Sketching different variations of a necklace prototype</h1>
                        {/* <p className="caseText">After establishing our design objectives, we jumped into diverging and ideating as many creative, wild solutions as possible. To <span className="fitkitchBoldText">quantitatively assess the potential of our ideas,</span> we used an alternatives matrix to score each idea against our 11 specifications, which had different weights according to their importance. </p>
                        <img src={ohBuoyAlternativesMatrix} width="950"/> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OhBuoy