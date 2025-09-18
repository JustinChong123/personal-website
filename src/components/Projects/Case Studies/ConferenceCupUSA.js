import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import './ConferenceCupUSA.css'
import conferenceCupUSAMockup from './ConferenceCup USA Images/conference-cup-usa-mockup.png'
import conferenceCupCoverBottom from './ConferenceCup USA Images/conference-cup-cover-bottom.svg'
import conferenceCupOverview from './ConferenceCup USA Images/conference-cup-overview.svg'
import conferenceCupStats from './ConferenceCup USA Images/conference-cup-stats.svg'
import conferenceCupUSAStats from './ConferenceCup USA Images/conference-cup-usa-stats.png'
import conferenceCupUSABestMockups from './ConferenceCup USA Images/conference-cup-usa-best-mockups.png'
import conferenceCupUSAOverview from './ConferenceCup USA Images/conference-cup-usa-overview.png'
import conferenceCupUSADesignThinking from './ConferenceCup USA Images/conference-cup-usa-design-thinking.png'
import conferenceCupUSAUserResearch from './ConferenceCup USA Images/conference-cup-usa-user-research.svg'
import conferenceCupUSACompetitiveAnalysis from './ConferenceCup USA Images/conference-cup-usa-competitive-analysis.png'
import conferenceCupUSAUserInterviews from './ConferenceCup USA Images/conference-cup-usa-user-interviews.png'
import conferenceCupUSAUserGroups from './ConferenceCup USA Images/conference-cup-usa-user-groups.png'
import conferenceCupUSAUserPersona from './ConferenceCup USA Images/conference-cup-usa-user-persona.png'
import conferenceCupUSAUserJourney from './ConferenceCup USA Images/conference-cup-usa-user-journey.png'
import conferenceCupUSAPovStatement from './ConferenceCup USA Images/conference-cup-usa-pov-statement.png'
import conferenceCupUSAHMW from './ConferenceCup USA Images/conference-cup-usa-hmw.png'
import conferenceCupUSAUXUIDesignHeading from './ConferenceCup USA Images/conference-cup-usa-design-heading.svg'
import conferenceCupUSADesignObjectives from './ConferenceCup USA Images/conference-cup-usa-design-objectives.png'
import conferenceCupUSAIdeation from './ConferenceCup USA Images/conference-cup-usa-ideation.png'
import conferenceCupUSAPrioritization from './ConferenceCup USA Images/conference-cup-usa-prioritization.png'
import conferenceCupUSAIA from './ConferenceCup USA Images/conference-cup-usa-IA.png'
import conferenceCupUSAWireframes from './ConferenceCup USA Images/conference-cup-usa-wireframes.png'
import conferenceCupUSAPrototypes from './ConferenceCup USA Images/conference-cup-usa-prototypes.png'
import conferenceCupUSAStyleGuide from './ConferenceCup USA Images/conference-cup-usa-style-guide.png'
import conferenceCupUSAFeedback from './ConferenceCup USA Images/conference-cup-usa-feedback.png'
import conferenceCupUSAAccessibility from './ConferenceCup USA Images/conference-cup-usa-accessibility.png'
import conferenceCupUSATakeaways from './ConferenceCup USA Images/conference-cup-usa-takeaways.png'




function ConferenceCupUSA() {
    return (
        <div className="container">
            <div className="cover">
                <ScrollIndicator />
                <Navbar onCase={true} />
                <img id='paCoverBottom' src={conferenceCupCoverBottom} alt='' width="100%"/>
                {/* <h1>ConferenceCup USA</h1>
                <h3>UI/UX Designer</h3>
                <h2>Holistically ranking college athletics programs to promote transparency and equity</h2>
                <img id="conferenceCupUSACaseStudyMockup" src={conferenceCupUSAMockup} width="630" height="auto" /> */}
            </div>

            <img id='paOverview' src={conferenceCupOverview} alt='' width="100%"/>
            <img id='paStats' src={conferenceCupStats} alt='' width="100%"/>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">SOLUTION</h3>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Promoting transparency and equity in college athletics</h1>
                    <p className="caseText">ConferenceCup USA is a website that ranks college athletics programs <span className="fitkitchBoldText">holistically,</span> which means that <span className="fitkitchBoldText">each varsity sport is equally considere</span> in creating a school's overall score.</p>
                    <p className="caseText">Currently, the college sports landscape is dominated by a few sports (e.g. football and basketball). We built ConferenceCup USA to highlight successful, yet <span className="fitkitchBoldText">underfunded and neglected sports</span> to eventually increase media attention and institutional funding to these sports.</p>
                    <img src={conferenceCupUSABestMockups} width="1000" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">BACKGROUND</h3>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Collaborating with retired athletes passionate about sports equality</h1>
                    <p className="caseText">DALI (Digital Applied Learning and Innovation) Lab is a <span className="fitkitchBoldText">startup incubator</span> that designs and develops innovative digital products for clients. Our clients were <span className="fitkitchBoldText">two retired Dartmouth alumni</span> who wanted us to build a website that ranks colleges by how all varsity sports are performing, not just high-profile sports.  I worked with 2 other product designers, 4 developers, and 1 PM to design, develop, and deploy the website for a <span className="fitkitchBoldText">beta launch in 10 weeks.</span></p>
                </div>
            </div>

            {/* <div id="conferenceCupUSAGreenBackground"className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">BACKGROUND</h3>
                </div>
                <div className="caseMain">
                    <p id="noSectionHeader"className="caseText">DALI (Digital Applied Learning and Innovation) Lab is a <span className="fitkitchBoldText">startup incubator</span> that designs and develops innovative digital products for clients. Our clients were <span className="fitkitchBoldText">two retired Dartmouth alumni</span> who wanted us to build a website that ranks colleges by how all varsity sports are performing, not just high-profile sports.  I worked with 2 other product designers, 4 developers, and 1 PM to design, develop, and deploy the website for a <span className="fitkitchBoldText">beta launch in 10 weeks.</span></p>
                </div>
            </div> */}

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">OVERVIEW</h3>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">How does ConferenceCup USA work?</h1>
                    <img src={conferenceCupUSAOverview} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">PROCESS</h3>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">What our <span id="designThinkingGradient">design thinking</span> looked like from start to end</h1>
                    <img src={conferenceCupUSADesignThinking} width="850" height="auto" />
                </div>
            </div>

            <img className="caseStudyHeading" src={conferenceCupUSAUserResearch} width="100%" height="auto"/>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">RESEARCH</h3>
                    <h2>Competitive Analysis</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">No other website holistically ranks college athletics programs</h1>
                    <p className="caseText">We conducted industry research on dozens of <span className="fitkitchBoldText">sports analytics platforms</span> like ESPN, NCAA, and FOX Sports. Currently, no other platform holistically ranks college athletics programs, only specific sports. These are the main characteristics of successful websites:</p>
                    <img src={conferenceCupUSACompetitiveAnalysis} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">RESEARCH</h3>
                    <h2>User Interviews & Empathy Maps</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Robust user recruitment in the face of stakeholder constraints</h1>
                    <p className="caseText">We conducted user interviews with students, college sports fans, and alumni to <span className="fitkitchBoldText">conduct concept testing</span> and discover <span className="fitkitchBoldText">how to keep users engaged</span> on a data-driven website. We planned to interview athletic directors, university admin, and sports coaches, but our clients were concerned that circulating the idea of a platform that calls attention to underperforming programs would result in <span className="fitkitchBoldText">early institutional pushback</span> to the website.</p>
                    <img src={conferenceCupUSAUserInterviews} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">RESEARCH</h3>
                    <h2>User Personas</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Defining our three user groups</h1>
                    <p className="caseText">After user interviews, empathy maps, and stakeholder analysis, we defined our <span className="fitkitchBoldText">three main user groups.</span></p>
                    <img src={conferenceCupUSAUserGroups} width="950" height="auto" />
                    <p className="caseText">We constructed <span className="fitkitchBoldText">user personas</span> for each user group to better understand their <span className="fitkitchBoldText">needs, frustrations, and pain points.</span> Here's our user persona for the <span className="fitkitchBoldText">“invested fan,”</span> which is the majority of our target users.</p>
                    <img src={conferenceCupUSAUserPersona} width="600" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">RESEARCH</h3>
                    <h2>User Journeys</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Finding opportunities to improve on our users' pain points</h1>
                    <p className="caseText">After establishing user personas, we created user journeys for each of our <span className="fitkitchBoldText">three user groups.</span> Here's an example of our user journey for the “invested fan.”</p>
                    <img src={conferenceCupUSAUserJourney} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">DEFINE</h3>
                    <h2>POV Statement</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Honing in on a problem statement</h1>
                    <p className="caseText">We created a <span className="fitkitchBoldText">POV (point-of-view) or problem statement</span> to synthesize our user's needs, frustrations, and goals.</p>
                    <img src={conferenceCupUSAPovStatement} width="800" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">DEFINE</h3>
                    <h2>HMW Statement</h2>
                </div>
                <div className="caseMain">
                    <p id="noSectionHeader" className="caseText">After breaking down the POV statement, we ideated 15+ HMWs before consolidating one that would allow us to ideate diverse, creative solutions.</p>
                    <img src={conferenceCupUSAHMW} width="800" height="auto" />
                </div>
            </div>

            <img className="caseStudyHeading" src={conferenceCupUSAUXUIDesignHeading} width="100%" height="auto"/>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">DEFINE</h3>
                    <h2>Design Objectives</h2>
                </div>
                <div className="caseMain">
                    <img src={conferenceCupUSADesignObjectives} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">IDEATE</h3>
                    <h2>Feature Ideation</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Brainstorming wild and divergent ideas</h1>
                    <p className="caseText">After establishing our design objectives, we ideated features through the <span className="fitkitchBoldText">Crazy 8s brainstorming</span> method and more <span className="fitkitchBoldText">robust sketching.</span></p>
                    <img src={conferenceCupUSAIdeation} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">IDEATE</h3>
                    <h2>Feature Prioritization</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Working with developers to prioritize high-impact features</h1>
                    <p className="caseText">After creating a <span className="fitkitchBoldText">feature bank</span>, we collaborated with our developers to <span className="fitkitchBoldText">prioritize low-effort, high-impact features.</span> We categorized features into <span className="fitkitchBoldText">three categories:</span> core functionality, medium-priority features, and a low-priority backlog.</p>
                    <img src={conferenceCupUSAPrioritization} width="500" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">IDEATE</h3>
                    <h2>Information Architecture</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Organizing features and information in a sitemap</h1>
                    <p className="caseText">We created an information architecture diagram to structure our information into tabs and create basic guidelines for <span className="fitkitchBoldText">labeling, navigation, and search systems.</span></p>
                    <img src={conferenceCupUSAIA} width="800" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">IDEATE</h3>
                    <h2>Low-Fidelity Wireframing</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Making data tracking delightful</h1>
                    <p className="caseText">After creating user flows and sketches, we began to wireframe. We constantly incorporated <span className="fitkitchBoldText">feedback from our users</span> as well as a <span className="fitkitchBoldText">design critique</span> at DALI. Here are three key decisions we made:</p>
                    <img src={conferenceCupUSAWireframes} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">IDEATE</h3>
                    <h2>High-Fidelity Prototyping</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Implementing client-facing features</h1>
                    <p className="caseText">Once we finished wireframing, we began to <span className="fitkitchBoldText">iterate on the UI</span> and prototype interactions and flow. Consulting heavily with our clients, we drove <span className="fitkitchBoldText">major client-side improvements</span> to meet their post-handoff goals , and iterated on ways to make <span className="fitkitchBoldText">extracting trends from data</span> as intuitive as possible for users.</p>
                    <img src={conferenceCupUSAPrototypes} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">IDEATE</h3>
                    <h2>Visual Design System</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Creating an striking dark theme</h1>
                    <p className="caseText">We decided to pursue a dark theme as it <span className="fitkitchBoldText">differentiates our website</span> from other more clinical sports analytics platforms. We followed Google Material Design's guidelines on creating <span className="fitkitchBoldText">scalable backgrounds and surfaces</span> for dark theme, and used variations of a <span className="fitkitchBoldText">purple primary color</span> to make certain elements pop. Our <span className="fitkitchBoldText">style guide</span> covers color schemes, typography, CTAs, interaction states, text inputs, and iconography.</p>
                    <img src={conferenceCupUSAStyleGuide} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">TEST</h3>
                    <h2>Usability Testing</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Iterating on user feedback</h1>
                    <p className="caseText">We conducted <span className="fitkitchBoldText">in-person usability tests with 15+ college students,</span> from those uninterested in sports to student-athletes to die-hard college sports fans.</p>
                    <p className="caseText">Users thought the concept was <span className="fitkitchBoldText">novel and cool,</span> the navigation was <span className="fitkitchBoldText">intuitive,</span> and the UI was <span className="fitkitchBoldText">modern, bold, and energetic.</span> We iterated on the UI based on user feedback, and documented UX improvements and new features that we plan to design next term. </p>
                    <img src={conferenceCupUSAFeedback} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">REFLECT</h3>
                    <h2>Accessibility</h2>
                </div>
                <div className="caseMain">
                    <h1 className="caseSectionHeader">Accessibility and inclusivity in the design process</h1>
                    <p className="caseText">We always thought about accessibility and inclusivity from <span className="fitkitchBoldText">day 1 of our design process.</span> Here are some considerations we made to ensure our website delivers the same <span className="fitkitchBoldText">delightful experience</span> to people <span className="fitkitchBoldText">outside the able-bodied majority.</span></p>
                    <img src={conferenceCupUSAAccessibility} width="950" height="auto" />
                </div>
            </div>

            <div className="caseSection">
                <div className="caseSideHeader">
                    <h3 id="greenCaseSideHeader">REFLECT</h3>
                    <h2>Next Steps and Takeaways</h2>
                </div>
                <div className="caseMain">
                    <p id="noSectionHeader" className="caseText">This project was challenging, but rewarding as we designed this website end-to-end and worked with developers and our PM to develop and <span className="fitkitchBoldText">deploy it in 10 weeks.</span> We designed ConferenceCup USA to <span className="fitkitchBoldText">put all varsity sports on the same level</span> and bring more attention to high-performing, but neglected and underfunded sports. Here are 3 key takeaways we learned from this process.</p>
                    <img src={conferenceCupUSATakeaways} style={{ marginBottom: "10vh" }} width="950" height="auto" />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default ConferenceCupUSA