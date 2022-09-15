import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './iPath.css'
import ipathMockup from './ipath-cover-mockup.png'
import ipath1 from './ipath-1.png'
import ipath2 from './ipath-2.png'
import ipath3 from './ipath-3.png'
import ipath4 from './ipath-4.png'
import ipath5 from './ipath-5.png'
import ipath6 from './ipath-6.png'
import ipath7 from './ipath-7.png'
import ipath8 from './ipath-8.png'
import ipath9 from './ipath-9.png'
import ipath10 from './ipath-10.png'
import ipath11 from './ipath-11.png'
import ipath12 from './ipath-12.png'
import ipath13 from './ipath-13.png'
import ipath14 from './ipath-14.png'
import ipath15 from './ipath-15.png'
import ipath16 from './ipath-16.png'
import ipath17 from './ipath-17.png'
import ipath18 from './ipath-18.png'
import ipath19 from './ipath-19.png'
import ipath20 from './ipath-20.png'
import ipath21 from './ipath-21.png'
import ipath22 from './ipath-22.png'
import ipath23 from './ipath-23.png'
import ipath24 from './ipath-24.png'
import ipath25 from './ipath-25.png'
import ipath26 from './ipath-26.png'
import ipath27 from './ipath-27.png'
import ipath28 from './ipath-28.png'
import ipath29 from './ipath-29.png'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'

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
                <img id="ipath1" src={ipath1} width="1050" height="650" />
                <img id="ipath2" src={ipath2} width="920" height="350" />
                <img id="ipath3" src={ipath3} width="900" height="400" />
                <img id="ipath4" src={ipath4} width="1250" height="225" />
                <img id="ipath5" src={ipath5} width="980" height="400" />
                <img id="ipath6" src={ipath6} width="990" height="350" />
                <img id="ipath7" src={ipath7} width="1030" height="215" />
                <img id="ipath8" src={ipath8} width="1115" height="420" />
                <img id="ipath9" src={ipath9} width="1250" height="400" />
                <img id="ipath10" src={ipath10} width="1000" height="260" />
                <img id="ipath11" src={ipath11} width="870" height="500" />
                <img id="ipath12" src={ipath12} width="1020" height="400" />
                <img id="ipath13" src={ipath13} width="1000" height="550" />
                <img id="ipath14" src={ipath14} width="980" height="250" />
                <img id="ipath15" src={ipath15} width="950" height="440" />
                <img id="ipath16" src={ipath16} width="900" height="500" />
                <img id="ipath17" src={ipath17} width="980" height="230" />
                <img id="ipath18" src={ipath18} width="1000" height="500" />
                <img id="ipath19" src={ipath19} width="1130" height="460" />
                <img id="ipath20" src={ipath20} width="1270" height="480" />
                <img id="ipath21" src={ipath21} width="1320" height="480" />
                <img id="ipath22" src={ipath22} width="830" height="630" />
                <img id="ipath23" src={ipath23} width="980" height="270" />
                <img id="ipath24" src={ipath24} width="1150" height="350" />
                <img id="ipath25" src={ipath25} width="990" height="200" />
                <img id="ipath26" src={ipath26} width="990" height="200" />
                <img id="ipath27" src={ipath27} width="960" height="250" />
                <img id="ipath28" src={ipath28} width="960" height="220" />
                <img id="ipath29" src={ipath29} width="1150" height="500" />
            </div>  
            <Footer />
        </div>
    )
}

export default IPath