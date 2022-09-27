import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './FitKitch.css'
import fitwitMockup from '../fitwit-mockup.png'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import fitkitchDesignThinking from './Fitkitch Images/fitkitch-design-thinking.png'
import fitkitchUserResearchHeading from './Fitkitch Images/fitkitch-user-research-heading.png'
import fitkitchOld from './Fitkitch Images/fitkitch-old.png'
import fitkitchHMW1 from './Fitkitch Images/fitkitch-hmw1.png'
import fitkitchCompetitive from './Fitkitch Images/fitkitch-competitive.png'
import fitkitchInterviews from './Fitkitch Images/fitkitch-interviews.png'
import fitkitchNewSolutions from './Fitkitch Images/fitkitch-new-solutions.png'
import fitkitchFlowSketches from './Fitkitch Images/fitkitch-flow-sketches.png'
import fitkitchPainPoints from './Fitkitch Images/fitkitch-pain-points.png'
import fitkitchUIUXDesignHeading from './Fitkitch Images/fitkitch-uiux-design-heading.png'
import fitkitchObjectives from './Fitkitch Images/fitkitch-objectives.png'
import fitkitchSketches from './Fitkitch Images/fitkitch-sketches.png'
import fitkitchWireframes from './Fitkitch Images/fitkitch-wireframes.png'
import fitkitchHifi from './Fitkitch Images/fitkitch-hifi.png'
import fitkitchUsability from './Fitkitch Images/fitkitch-usability.png'
import fitkitchDesignSystem from './Fitkitch Images/fitkitch-design-system.png'
import fitkitchLogo from './Fitkitch Images/fitkitch-logo.png'
import fitkitchAccessibility from './Fitkitch Images/fitkitch-accessibility.png'
import fitkitchTakeaways from './Fitkitch Images/fitkitch-takeaways.png'
import fitkitchStats from './Fitkitch Images/fitkitch-stats.png'

function FitKitch() {
    return (
        <div className="fitkitchCaseStudy">
            <div className="fitkitchCover">
                <ScrollIndicator />
                <Navbar />
                <h1>FitKitch</h1>
                <h3>UI/UX Designer</h3>
                <h2>Promoting daily fitness through community action</h2>
                <img id="fitwitCaseStudyMockup" src={fitwitMockup} alt="FitWit iPhone 13 Mockup" width="350" height="437.5" />
            </div>
            <div className="fitkitchContent">
                <div className="fitkitchIntro">
                    <h1 className="caseSectionHeader" id="fitkitchIntroQuestion">How does FitKitch marry exercise and community building?</h1>
                    <p className="caseText" id="fitkitchIntroText">FitKitch is a <span className="fitkitchBoldText">community-oriented wellness app</span> designed to motivate young people to stay physically active. We were <span className="fitkitchBoldText">inspired by cooking,</span> an action that brings people together to work towards a shared goal – a cooked dish.</p>
                    <p className="caseText" id="fitkitchIntroText">FitKitch <span className="fitkitchBoldText">leverages community obligation</span> and action to motivate individuals to exercise. The daily participation of each user is integral in the group's success, but we make sure to avoid developing <span className="fitkitchBoldText">unhealthy, toxic mindsets</span> towards fitness and wellness.</p>
                    <img id="fitkitchStats" src={fitkitchStats} width="250" height="650" />
                </div>

                <div id="fitkitchRedBackground"className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader"className="caseText">A <span className="fitkitchBoldText">Dartmouth professor</span> approached us to <span className="fitkitchBoldText">commercialize a research app</span> previously built by the DALI Lab. This app used memory games after users exercised to collect data on how exercise affects cognitive and mental health. Our objective was to build a new app to motivate people to exercise <span className="fitkitchBoldText">using the benefits of cognitive health,</span> but our user research caused us to pivot to our current app idea. I worked with my co-designer, PM, and 3 developers to design, develop, and deploy the app for a <span className="fitkitchBoldText">beta launch in 10 weeks.</span></p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">PROCESS</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Our <span id="fitkitchDesignThinkingGradient">design thinking</span> from start to end</h1>
                        <img src={fitkitchDesignThinking} width="950" height="280" />
                    </div>
                </div>

                <img alt="FitKitch User Research Heading" src={fitkitchUserResearchHeading} width="1440" height="380"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">RESEARCH</h3>
                        <h2>Initial HMW Statement</h2>
                    </div>
                    <div className="caseMain">
                        <img src={fitkitchHMW1} width="800" height="200" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">RESEARCH</h3>
                        <h2>Reviewing Previous Materials</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Learning and critiquing the <span id="designThinkingGradient" >old research app, "FitWit"</span></h1>
                        <p className="caseText">Our client wanted us to commercialize their research tool “FitWit” (Fitness + Wit), which enabled users to play memory games after exercising to collect data on how exercise positively affects cognitive health. We <span className="fitkitchBoldText">reviewed the previous designers' work</span> from UX research to user flows to the deployed app.</p>
                        <img src={fitkitchOld} width="950" height="310" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">RESEARCH</h3>
                        <h2>Competitive Analysis</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">What other apps did well and upholding <span id="chronicleInterviewGradient">ethical integrity</span></h1>
                        <p className="caseText">Keeping in mind the focus on cognitive health, we analyzed dozens of the most popular apps in <span className="fitkitchBoldText">fitness, nutrition, and cognitive health.</span> We wanted to <span className="fitkitchBoldText">foster positive, healthy mindsets</span> about exercise and avoid dangerous features like calorie and physique tracking that reinforce eating disorders and body dysmorphia.</p>
                        <img src={fitkitchCompetitive} width="950" height="410" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">RESEARCH</h3>
                        <h2>User Interviews & UX Survey</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Do users actually care about <span id="ethicsGradient">cognitive health?</span>... They don't.</h1>
                        <p className="caseText">We planned to <span className="fitkitchBoldText">overhaul the old UI,</span> but we needed to decide whether to 1) modify or scrap the memory games and 2) if cognitive health was an incentive to exercise. We <span className="fitkitchBoldText">interviewed 10+ younger and older users,</span> and launched a <span className="fitkitchBoldText">UX survey with 270+ responses</span> asking users to rank the importance of cognitive, mental, social, physical, and emotional benefits of exercise.</p>
                        <img src={fitkitchInterviews} width="910" height="640" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">DEFINE</h3>
                        <h2>New HMW Statement & Solution</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Talking to our clients about <span id="boomersGradient">redefining product vision</span></h1>
                        <p className="caseText">It was clear that centering cognitive benefits to encourage exercise <span className="fitkitchBoldText">was not what our users needed.</span> We defined our <span className="fitkitchBoldText">new HMW statement:</span> how might we change perceptions of exercise as productive and necessary rather than extra? We brainstormed and presented 3 alternative solutions to our client, and they <span className="fitkitchBoldText">chose solution #1.</span></p>
                        <img src={fitkitchNewSolutions} width="925" height="330" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">IDEATE</h3>
                        <h2>Flow Sketches</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Back to the drawing board after <span id="designThinkingGradient">discovering design flaws</span></h1>
                        <img src={fitkitchFlowSketches} width="930" height="230" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">DEFINE</h3>
                        <h2>User Needs</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">The disconnect between the <span id="fitkitchUserNeedsGradient">desire and action to exercise</span></h1>
                        <p className="caseText">After deciding to move away from mood tracking, we reviewed our user research and focused on why <span className="fitkitchBoldText">young people with busy lives</span> struggle to exercise consistently. Centering our solution around these <span className="fitkitchBoldText">3 pain points</span> revitalized our brainstorming sessions and brought us to our current app: FitKitch.</p>
                        <img src={fitkitchPainPoints} width="925" height="390" />
                    </div>
                </div>

                <div id="fitkitchSolution">
                    <h3 id="fitkitchSolution1">SOLUTION</h3>
                    <h1 id="fitkitchSolution2">FitKitch</h1>
                    <h2 id="fitkitchSolution3">A mobile app that motivates young people to exercise through community obligation with personalized daily activity goals</h2>
                </div>

                <img alt="FitKitch UI/UX Design Heading" src={fitkitchUIUXDesignHeading} width="1440" height="380"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">IDEATE</h3>
                        <h2>Design Objectives</h2>
                    </div>
                    <div className="caseMain">
                        <img src={fitkitchObjectives} width="950" height="190" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">IDEATE</h3>
                        <h2>Flow Sketches</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader"><span id="fitkitchSketchesGradient">Connecting exercise to cooking:</span> the core concept of the app</h1>
                        <p className="caseText">We wanted to do something that hadn't been done before, something <span className="fitkitchBoldText">fresh and exciting.</span> The inspiration behind the app is cooking, an activity that brings people together to achieve a collective goal: a well-cooked, seasoned dish. In FitKitch, <span className="fitkitchBoldText">users create/join social groups called Kitchens,</span> which can be any group of people (coworkers, family, roommates, friend groups, etc). </p>
                        <img src={fitkitchSketches} width="950" height="390" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">PROTOTYPE & TEST</h3>
                        <h2>Lo-fi Wireframes</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Let's personalize and accomodate for users</h1>
                        <p className="caseText">We received <span className="fitkitchBoldText">feedback on our flow sketches</span> at the DALI Lab's first design critique of the term. This is an opportunity for designers to show their designs to the whole lab and get fresh perspectives on their work from other designers, design mentors, product managers, and top management. Here are <span className="fitkitchBoldText">3 key decisions</span> we made as we began to wireframe.</p>
                        <img src={fitkitchWireframes} width="950" height="1040" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">PROTOTYPE & TEST</h3>
                        <h2>Hi-Fidelity Prototype</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Helping our users feel assured and confident</h1>
                        <p className="caseText">As we iterated our grayscales into high-fidelity mockups, we received user feedback throughout the process, and saw it through fresh eyes in a <span className="fitkitchBoldText">2nd DALI design critique.</span> We made key UI decisions for a more <span className="fitkitchBoldText">pleasant, playful experience,</span> but also added an onboarding process to smoothly introduce how the app works to first-time users.</p>
                        <img src={fitkitchHifi} width="950" height="1040" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">PROTOTYPE & TEST</h3>
                        <h2>Usability Testing</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Getting start-to-finish app feedback</h1>
                        <p className="caseText">We conducted <span className="fitkitchBoldText">in-person usability tests with 8 college students,</span> which represent our target users of young people whose busy lives prevent them from exercising. College students also belong to a higher-than-average number of social circles, which the app revolves around.</p>
                        <p className="caseText">Users found the concept <span className="fitkitchBoldText">novel and refreshing,</span> and the UI <span className="fitkitchBoldText">clean and appealing.</span> We received constructive feedback on improving the UX and adding more features. Since the developers had too much on their plates and our client <span className="fitkitchBoldText">prioritized releasing a functional app,</span> we didn't have the chance to iterate on these usability insights, but we documented the data and findings in our handoff document for future designers to iterate.</p>
                        <img src={fitkitchUsability} width="950" height="327" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">PROTOTYPE & TEST</h3>
                        <h2>Visual Design System</h2>
                    </div>
                    <div className="caseMain">
                        <img src={fitkitchDesignSystem} width="950" height="600" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">PROTOTYPE & TEST</h3>
                        <h2>Logo & Branding</h2>
                    </div>
                    <div className="caseMain">
                        <img src={fitkitchLogo} width="800" height="240" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">REFLECT</h3>
                        <h2>Accessibility</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Making wellness empowering and equitable</h1>
                        <p className="caseText">When designing an app for health, wellness, and fitness, we recognize that everyone has different needs and abilities. We seek to be as inclusive as possible to users regardless of their background.</p>
                        <img src={fitkitchAccessibility} width="950" height="300" />
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="redCaseSideHeader">REFLECT</h3>
                        <h2>Next Steps & Takeaways</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">This project was challenging, but rewarding as we designed this app end-to-end and worked with developers and our PM to <span className="fitkitchBoldText">develop and deploy it in 10 weeks.</span> We designed FitKitch to use community to motivate young people to exercise in a <span className="fitkitchBoldText">healthy, productive way.</span> Here are 3 key takeaways we learned from this process.</p>
                        <img id="chronicleTakeaways" src={fitkitchTakeaways} width="950" height="450" />
                        <p className="caseText">FitKitch is <span className="fitkitchBoldText">deployed on TestFlight,</span> and our clients are conducting extensive user testing with the app, In the future, we plan to <span className="fitkitchBoldText">implement feedback from usability testing,</span> and expand our database of activities to make it even more accessible for all users.</p>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default FitKitch