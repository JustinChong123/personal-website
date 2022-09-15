import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './FitKitch.css'
import fitwitMockup from '../fitwit-mockup.png'
import fitkitch1 from './fitkitch-1.png'
import fitkitch2 from './fitkitch-2.png'
import fitkitch3 from './fitkitch-3.png'
import fitkitch4 from './fitkitch-4.png'
import fitkitch5 from './fitkitch-5.png'
import fitkitch6 from './fitkitch-6.png'
import fitkitch7 from './fitkitch-7.png'
import fitkitch8 from './fitkitch-8.png'
import fitkitch9 from './fitkitch-9.png'
import fitkitch10 from './fitkitch-10.png'
import fitkitch11 from './fitkitch-11.png'
import fitkitch12 from './fitkitch-12.png'
import fitkitch13 from './fitkitch-13.png'
import fitkitch14 from './fitkitch-14.png'
import fitkitch15 from './fitkitch-15.png'
import fitkitch16 from './fitkitch-16.png'
import fitkitch17 from './fitkitch-17.png'
import fitkitch18 from './fitkitch-18.png'
import fitkitch19 from './fitkitch-19.png'
import fitkitch20 from './fitkitch-20.png'
import fitkitch21 from './fitkitch-21.png'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'

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
                <img id="fitkitch1" src={fitkitch1} width="1300" height="800"/>
                <img id="fitkitch2" src={fitkitch2} width="1100" height="800"/>
                <img id="fitkitch3" src={fitkitch3} width="1100" height="600"/>
                <img id="fitkitch4" src={fitkitch4} width="1200" height="450"/>
                <img id="fitkitch5" src={fitkitch5} width="1200" height="600"/>
                <img id="fitkitch6" src={fitkitch6} width="1200" height="400"/>
                <img id="fitkitch7" src={fitkitch7} width="1200" height="500"/>
                <img id="fitkitch8" src={fitkitch8} width="1100" height="700"/>
                <img id="fitkitch9" src={fitkitch9} width="1100" height="500"/>
                <img id="fitkitch10" src={fitkitch10} width="1300" height="450"/>
                <img id="fitkitch11" src={fitkitch11} width="1300" height="700"/>
                <img id="fitkitch12" src={fitkitch12} width="1300" height="280"/>
                <img id="fitkitch13" src={fitkitch13} width="1300" height="650"/>
                <img id="fitkitch14" src={fitkitch14} width="1200" height="650"/>
                <img id="fitkitch15" src={fitkitch15} width="1100" height="750"/>
                <img id="fitkitch16" src={fitkitch16} width="1100" height="1020"/>
                <img id="fitkitch17" src={fitkitch17} width="1300" height="490"/>
                <img id="fitkitch18" src={fitkitch18} width="1200" height="700"/>
                <img id="fitkitch19" src={fitkitch19} width="1200" height="800"/>
                <img id="fitkitch20" src={fitkitch20} width="1150" height="600"/>
                <img id="fitkitch21" src={fitkitch21} width="1300" height="800"/>
            </div>
            <Footer />
        </div>
    )
}

export default FitKitch