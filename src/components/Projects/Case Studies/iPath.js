import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './iPath.css'
import ipathMockup from './ipath-cover-mockup.png'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import ipathStats from './iPath Images/ipath-stats.png'

function IPath() {
    return (
        <div className="ipathCaseStudy">
            <div className="ipathCover">
                <ScrollIndicator />
                <Navbar />
                <h1>iPath</h1>
                <h3>Product Manager</h3>
                <h2>Connecting rural cancer patients to depression treatments</h2>
                <img id="ipathCaseStudyMockup" src={ipathMockup} alt="iPath Clay Mockups" width="520" height="600" />
            </div>
            <div className="ipathContent">
                <div className="ipathIntro">
                    <h1 className="caseSectionHeader" id="ipathIntroQuestion">How does iPath increase equitable access to healthcare?</h1>
                    <p className="caseText" id="ipathIntroText">iPath is a mobile app that works offline to enable <span className="fitkitchBoldText">rural cancer patients to filter and search for local treatment providers for depression.</span> Its core features are a depression screening survey, interactive decision aid, and comparison of treatment options. </p>
                    <p className="caseText" id="ipathIntroText">In 10 weeks, we engaged in an end-to-end UX process and <span className="fitkitchBoldText">deployed a fully functional app</span> on TestFlight. The app is designed to work offline for rural patients who <span className="fitkitchBoldText">lack consistent Internet access</span> and uses Cloud Firebase and Google Identity Platform for HIPAA-compliant data protection and user authentication.</p>
                    <img id="ipathStats" src={ipathStats} width="230" height="610" />
                </div>

                <div id="ipathGreenBackground"className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="greenCaseSideHeader">BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader" className="caseText">A <span className="fitkitchBoldText">Dartmouth professor</span> approached us to <span className="fitkitchBoldText">commercialize a research app</span> previously built by the DALI Lab. This app used memory games after users exercised to collect data on how exercise affects cognitive and mental health. Our objective was to build a new app to motivate people to exercise <span className="fitkitchBoldText">using the benefits of cognitive health,</span> but our user research caused us to pivot to our current app idea. I worked with my co-designer, PM, and 3 developers to design, develop, and deploy the app for a <span className="fitkitchBoldText">beta launch in 10 weeks.</span></p>
                    </div>
                </div>
            </div>  
            <Footer />
        </div>
    )
}

export default IPath