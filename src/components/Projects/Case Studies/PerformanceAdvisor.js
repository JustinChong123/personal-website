import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './PerformanceAdvisor.css'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'

import paCoverBottom from './Performance Advisor Images/pa-cover-bottom.svg'
import paStats from './Performance Advisor Images/pa-stats.svg'
import paClusterInfoBanner from './Performance Advisor Images/pa-cluster-info-banner.svg'
import paProcess from './Performance Advisor Images/pa-process.png'
import paTakeaways from './Performance Advisor Images/pa-takeaways.png'

function PerformanceAdvisor() {
    return (
        <div className="container">
            <div className="cover">
                <ScrollIndicator />
                <Navbar onCase={true} />
                <img id='paCoverBottom' src={paCoverBottom} alt='' width="100%"/>
            </div>
            
            <div className="budgetBalloonContent">

                <img id='paStats' src={paStats} alt='' width="100%"/>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">SOLUTION</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Enabling developers to holistically diagnose performance issues</h1>
                        <p className="caseText">Performance Advisor is a <span className="fitkitchBoldText">cloud analytics tool</span> that enables developers to diagnose slow queries and improve performance on their MongoDB database clusters. I <span className="fitkitchBoldText">re-designed Performance Advisor to be “cluster-centric,”</span> enabling novice users and enterprise customers <span className="fitkitchBoldText">to gain high-level, aggregated insights about their performance</span> across different deployment models.</p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">An integrated performance insights tool</h1>
                        <p className="caseText">One of many data services that MongoDB offers, Performance Advisor is a <span className="fitkitchBoldText">critical point in the query diagnostics workflow</span> that analyzes slow queries and curates multiple types of performance recommendations. Developers and database administrators alike use it to <span className="fitkitchBoldText">optimize slow queries that hurt database performance and rack up unwanted costs.</span></p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">PROBLEM</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Lack of high-level integration</h1>
                        <img id="paClusterInfoBanner" src={paClusterInfoBanner} width="700" alt=''/>
                        <p className="caseText">Performance Advisor does not aggregate recommendations on the cluster-level, making it <span className="fitkitchBoldText">difficult for users to assess the overall health of their cluster,</span> especially for large, multi-shard deployments. Novice users struggle to prioritize critical recommendations, and enterprise customers need a way to isolate performance issues between operational vs. transactional workloads. </p>
                    </div>
                </div>

                <div className='background'>
                    <h5>How might we enable developers operating in different deployment environments<br />to holistically diagnose performance issues?</h5>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">PROCESS</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Iterative and cross-functional at its core</h1>
                        <p className="caseText">I <span className="fitkitchBoldText">conducted user interviews with internal users and enterprise customers</span> such as technical services engineers, consulting engineers, and solutions architects to understand Performance Advisor's user personas. I collaborated with  internal stakeholders including product managers, engineering leads, PMMs, and other designers to <span className="fitkitchBoldText">align on product vision and ensure a smooth engineering handoff.</span></p>
                    </div>
                </div>

                <div id='process-container'>
                    <img id='paProcessMockup' src={paProcess} alt='hello' width="1000" height="400"/>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">REFLECT</h3>
                        <h2>Takeaways</h2>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">This project was <span className="fitkitchBoldText">challenging and fast-paced,</span> but I collaborated tightly with my stakeholders and users to deliver designs that addressed the core issues with Performance Advisor. My designs are <span className="fitkitchBoldText">currently being implemented by the Cloud Core engineering team,</span> and we're planning on tracking conversion rates and other KPIs to assess customer adoption and feature discoverability. Here are 3 key takeaways I learned from this project. </p>
                        <img id="paTakeaways" src={paTakeaways} width="950" alt=''/>
                    </div>
                </div>

                <div className='background'>
                    <h5>Curious about the solution? Contact me!</h5>
                    <h6>Due to my confidentiality agreement, I am unable to share the details of my project here,<br />but if you're interested in learning more about my work, please contact me!</h6>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PerformanceAdvisor