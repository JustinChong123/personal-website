import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import chronicleMockup from './chronicle-cover-mockup.png'
import './Chronicle.css'
import SectionDivider from './Section Divider/SectionDivider.js'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import chronicleBestMockups from './Chronicle Images/chronicle-best-mockups.png'
import chronicleProblemStatistics from './Chronicle Images/chronicle-problem-statistics.png'
import chronicleChallenge from './Chronicle Images/chronicle-challenge.png'
import chronicleOverview from './Chronicle Images/chronicle-overview.png'
import chronicleDesignThinking from './Chronicle Images/chronicle-design-thinking.png'
import chronicleUserResearchHeading from './Chronicle Images/chronicle-user-research-heading.png'
import chronicleGenerationalResearchImg from './Chronicle Images/chronicle-generational-research-img.png'
import chronicleIceberg from './Chronicle Images/chronicle-iceberg.png'
import chroniclePrinciples from './Chronicle Images/chronicle-principles.png'
import chronicleInterviews from './Chronicle Images/chronicle-interviews.png'
import chronicleHMW from './Chronicle Images/chronicle-hmw.png'
import chroniclePainPoints from './Chronicle Images/chronicle-pain-points.png'
import chroniclePlant from './Chronicle Images/chronicle-plant.png'
import chronicleUXUIDesignHeading from './Chronicle Images/chronicle-ux-ui-design-heading.png'
import chronicleDesignObjectives from './Chronicle Images/chronicle-design-objectives.png'
import chronicleSketches from './Chronicle Images/chronicle-sketches.png'
import chronicleDecision1 from './Chronicle Images/chronicle-decision-1.png'
import chronicleDecision4 from './Chronicle Images/chronicle-decision-4.png'
import chronicleUsability from './Chronicle Images/chronicle-usability.png'
import chronicleVisuals from './Chronicle Images/chronicle-visuals.png'
import chronicleAccessibility from './Chronicle Images/chronicle-accessibility.png'
import chronicleTakeaways from './Chronicle Images/chronicle-takeaways.png'
import chronicleStats from './Chronicle Images/chronicle-stats.png'

function Chronicle() {
    return (
        <div className="chronicleCaseStudy">
            <div className="chronicleCover">
                <ScrollIndicator />
                <Navbar />
                <h1>Chronicle</h1>
                <h3>UI/UX Designer</h3>
                <h2>Bridging the intergenerational gap in families through collaborative storytelling</h2>
                <img id="chronicleCaseStudyMockup" src={chronicleMockup} alt="Chronicle Tablet Mockup" width="750" height="auto" />
            </div>
            <div className="chronicleContent">
                <div className="chronicleIntro">
                    <h1 className="caseSectionHeader" id="chronicleIntroQuestion">How does Chronicle foster understanding between generations?</h1>
                    <p className="caseText" id="chronicleIntroText">Chronicle is a tablet app that allows grandparents and grandchildren, especially those that live far distances from each other, to connect by <span className="chronicleBoldText">collaboratively narrating and drawing stories</span> from their own lives.</p>
                    <p className="caseText" id="chronicleIntroText">Our app <span className="chronicleBoldText">revolves around the family</span> because connecting different generations doesn't start with strangers. It starts with people you know and care about.</p>
                    <img id="chronicleStats" src={chronicleStats} width="250" height="600" />
                    <img id="chronicleBestMockups" src={chronicleBestMockups} width="850" height="400" />
                </div>

                <div id="chronicleBlueBackground"className="caseSection">
                    <div className="caseSideHeader">
                        <h3>BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <p id="backgroundText" className="caseText">For our UI/UX Design class capstone project, our challenge was to <span className="chronicleBoldText">design an experience to bridge generations together.</span> We wanted to look at how we could bring different generations <span className="chronicleBoldText">within families</span> closer together, since there is more potential for meaningful and lasting connection. Right from the start, my partner and I knew we wanted to embed <span className="chronicleBoldText">accessibility and inclusivity</span> as a core experience to users of all ages.</p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROBLEM</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">How severe is the generational gap?</h1>
                        <p className="caseText">Generations within families feel more and more disconnected as disparities in technological literacy and lifestyle drive the divide between their ways of life.</p>
                        <img src={chronicleProblemStatistics} width="600" height="180"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>OVERVIEW</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">How does Chronicle work?</h1>
                        <img src={chronicleOverview} width="950" height="990"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROCESS</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">What our <span id="designThinkingGradient">design thinking</span> looked like from start to end</h1>
                        <img src={chronicleDesignThinking} width="950" height="290"/>
                    </div>
                </div>

                <img className="caseStudyHeading" alt="Chronicle User Research Heading" src={chronicleUserResearchHeading} width="1440" height="380"/>
                
                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>Generational Research</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Digital tech is increasing <span id="generationalDivideGradient">generational divide</span></h1>
                        <p className="caseText">To leverage technology to promote understanding and respect between generations, we studied <span className="chronicleBoldText">how each generation uses technology differently</span> and interacts with other generations. Here are 3 takeaways:</p>
                        <img src={chronicleGenerationalResearchImg} width="900" height="183"/>
                    </div>
                </div>
                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>Identifying Target Users</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Focusing on <span id="boomersGradient">Baby Boomers</span> and <span id="genzGradient">Generation Z</span></h1>
                        <p className="caseText">Looking at four generations, we focused on Boomers and Gen Z because the stark contrast between  how they grew up, lifestyle, and tech literacy provided the <span className="chronicleBoldText">greatest opportunity to effect change.</span></p>
                        <img src={chronicleChallenge} width="960" height="167"/>
                    </div>
                </div>
                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>Initial Solution & Journey Mapping</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Our solution (the first of many)</h1>
                        <p className="caseText">After stakeholder mapping and brainstorming HMW questions, our initial solution was an app that <span className="chronicleBoldText">connects young people seeking stories and older people willing to share personal insights.</span></p>
                        <p className="caseText">We did journey mapping to understand our users' mindsets, and here are three key objectives we wanted our initial app to embody. Although we iterated our app concept later on, many of these still acted as <span className="chronicleBoldText">guiding principles for our new solution.</span></p>
                        <img src={chroniclePrinciples} width="900" height="167"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>Ethical Considerations</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">What <span id="ethicsGradient">hidden ramifications</span> can our app have?</h1>
                        <p className="caseText">To see the big picture, we used an Iceberg Canvas to ideate and map any <span className="chronicleBoldText">hidden societal and environmental consequences</span> we should constantly keep in mind while designing the app.</p>
                        <img src={chronicleIceberg} width="900" height="470"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>RESEARCH</h3>
                        <h2>User Interviews & Empathy Maps</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Talking to users motivated us to <span id="chronicleInterviewGradient">shift our product vision</span></h1>
                        <p className="caseText">After interviewing both old and young people and drawing empathy maps, we discovered that younger and older generations had <span className="chronicleBoldText">little interest in connecting with strangers</span> to share stories.</p>
                        <img src={chronicleInterviews} width="950" height="350"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>HMW Statement</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">Our user interviews motivated us to <span className="chronicleBoldText">narrow the scope of our solution.</span> Bridging generations was not going to start with strangers over the Internet. It had to start somewhere more familiar and meaningful to people: <span className="chronicleBoldText">the family.</span></p>
                        <img src={chronicleHMW} width="800" height="180"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>DEFINE</h3>
                        <h2>User Needs</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">The <span id="chronicleDisconnectGradient">disconnect</span> between grandparents and grandchildren</h1>
                        <p className="caseText">To understand the pain points of our users and potential opportunities to address them, we made <span className="chronicleBoldText">user personas</span> to understand the motivations, needs, and expectations of grandparents and grandchildren. We identified <span className="chronicleBoldText">3 shared pain points</span> that led us to Chronicle.</p>
                        <img src={chroniclePainPoints} width="940" height="330"/>
                    </div>
                </div>

                <div id="chronicleSolution">
                    <h3 id="chronicleSolution1">SOLUTION</h3>
                    <h1 id="chronicleSolution2">Chronicle</h1>
                    <h2 id="chronicleSolution3">A tablet app that enables families to preserve precious memories through interactive storytelling and illustration</h2>
                    <img id="chroniclePlant" src={chroniclePlant} width="380" height="380" />
                </div>

                <img className="caseStudyHeading" alt="Chronicle UX/UI Design Heading" src={chronicleUXUIDesignHeading} width="1440" height="380"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>IDEATE</h3>
                        <h2>Design Objectives</h2>
                    </div>
                    <div className="caseMain">
                        <img src={chronicleDesignObjectives} width="950" height="190"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>IDEATE</h3>
                        <h2>Flow Sketches</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">We decided to design a <span className="chronicleBoldText">tablet app</span> because it's a familiar and fun device for kids, and it has <span className="chronicleBoldText">larger screen size and touch targets</span> for enhanced readability and tactility for grandparents.</p>
                        <img src={chronicleSketches} width="950" height="320"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROTOTYPE & TEST</h3>
                        <h2>Lo-Fi Wireframes</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader"><span id="chronicleDecisionsGradient">Pivotal design decisions</span> while iterating wireframes</h1>
                        <p className="caseText">Our <span className="chronicleBoldText" id="chronicleUnderlineText">core concept</span> is that a grandparent and grandchild connect virtually on this app. <span className="chronicleBoldText">Page by page,</span> one person (the “storyteller”) narrates a story from their personal life, and after, the other person (the “artist”) draws an illustration to go along with it. When they finish the story, it's added to their bookshelves on the landing page as a <span className="chronicleBoldText">preserved story to look back on.</span></p>
                        <p className="caseText">As we iterated our grayscales, we made key decisions to better meet our design objectives.</p>
                        <img src={chronicleDecision1} width="980" height="1700"/>
                    </div>
                </div>
                
                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROTOTYPE & TEST</h3>
                        <h2>User Feedback & Hi-Fidelity Prototype</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Pushing our prototype with <span id="chronicleUserTestingGradient">continuous user testing</span></h1>
                        <p className="caseText">As we began to hammer out the UX and focus on a creating <span className="chronicleBoldText">playful, kid-friendly UI,</span> we brought our prototype to our design mentor and other classmates to receive feedback as we iterated. Here are <span className="chronicleBoldText">3 key changes</span> we made to bring our prototype to the next level.</p>
                        <img src={chronicleDecision4} width="980" height="1600"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROTOTYPE & TEST</h3>
                        <h2>Usability Testing</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">We launched <span className="chronicleBoldText">6 usability tests</span> on UserTesting.com with grandparents. Because UserTesting.com doesn’t allow minors to test and due to time constraints, we could not recruit grandchildren for usability testing.</p>
                        <p className="caseText">All users found the app <span className="chronicleBoldText">easy to use, intuitive, and accessible.</span> Here are 3 key insights in functionality and UI that led us to our final solution.</p>
                        <img src={chronicleUsability} width="980" height="770"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>PROTOTYPE & TEST</h3>
                        <h2>Visual Design System</h2>
                    </div>
                    <div className="caseMain">
                        <img src={chronicleVisuals} width="980" height="620"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>REFLECT</h3>
                        <h2>Accessibility</h2>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader"><span id="chronicleAccessibilityGradient">Accessibility as a perpetual goal,</span> not an endpoint</h1>
                        <p className="caseText">We always thought about accessible design during this process, especially with very young and old users. We recognize that accessibility is <span className="chronicleBoldText">not a finite checkpoint,</span> but a goal to continually iterate and aspire to.</p>
                        <img src={chronicleAccessibility} width="950" height="300"/>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3>REFLECT</h3>
                        <h2>Takeaways & Next Steps</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">This project was <span className="chronicleBoldText">extremely rewarding</span> as we carried out an <span className="chronicleBoldText">end-to-end design process in 2 weeks</span> during the final exams period. We designed Chronicle to mend the generational gap within families that's been growing as technology plants more misunderstanding and conflict between people. Here are <span className="chronicleBoldText">3 key takeaways</span> we learned from this process.</p>
                        <img id="chronicleTakeaways" src={chronicleTakeaways} width="950" height="320"/>
                        <p className="caseText">We were ecstatic to hear that users from usability testing were <span className="chronicleBoldText">eager to use this app with their grandchildren</span> if it was released on the market. In the future, we plan to implement the reading library, expand the graphics tool even further, and conduct comprehensive usability testing with grandchildren that we were unable to do because of time constraints and UserTesting.com's 18+ user policy.</p>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Chronicle