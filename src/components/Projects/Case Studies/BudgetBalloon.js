import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './BudgetBalloon.css'
import budgetBalloonMockup from '../budget-balloon-mockup.png'
import budgetBalloon1 from './budget-balloon-1.png'
import budgetBalloon2 from './budget-balloon-2.png'
import budgetBalloon3 from './budget-balloon-3.png'
import budgetBalloon4 from './budget-balloon-4.png'
import budgetBalloon5 from './budget-balloon-5.png'
import budgetBalloon6 from './budget-balloon-6.png'
import budgetBalloon7 from './budget-balloon-7.png'
import budgetBalloon8 from './budget-balloon-8.png'
import budgetBalloon9 from './budget-balloon-9.png'
import budgetBalloon10 from './budget-balloon-10.png'
import budgetBalloon11 from './budget-balloon-11.png'
import budgetBalloon12 from './budget-balloon-12.png'
import budgetBalloon13 from './budget-balloon-13.png'
import budgetBalloon14 from './budget-balloon-14.png'
import budgetBalloon15 from './budget-balloon-15.png'
import budgetBalloon16 from './budget-balloon-16.png'
import budgetBalloon17 from './budget-balloon-17.png'
import budgetBalloon18 from './budget-balloon-18.png'
import budgetBalloon19 from './budget-balloon-19.png'

function BudgetBalloon() {
    return (
        <div className="budgetBalloonCaseStudy">
            <div className="budgetBalloonCover">
                <Navbar />
                <h1>Budget Balloon</h1>
                <h3>UX Designer</h3>
                <h2>Motivating teens to build healthy spending habits</h2>
                <img id="budgetBalloonCaseStudyMockup" src={budgetBalloonMockup} alt="Budget Balloon Mockup" width="380" height="470" />
            </div>
            <div className="budgetBalloonContent">
                <img id="budgetBalloon1" src={budgetBalloon1} width="1150" height="650" />
                <img id="budgetBalloon2" src={budgetBalloon2} width="1000" height="400" />
                <img id="budgetBalloon3" src={budgetBalloon3} width="1000" height="450" />
                <img id="budgetBalloon4" src={budgetBalloon4} width="1200" height="400" />
                <img id="budgetBalloon5" src={budgetBalloon5} width="960" height="600" />
                <img id="budgetBalloon6" src={budgetBalloon6} width="810" height="500" />
                <img id="budgetBalloon7" src={budgetBalloon7} width="860" height="550" />
                <img id="budgetBalloon8" src={budgetBalloon8} width="870" height="460" />
                <img id="budgetBalloon9" src={budgetBalloon9} width="910" height="550" />
                <img id="budgetBalloon10" src={budgetBalloon10} width="1000" height="280" />
                <img id="budgetBalloon11" src={budgetBalloon11} width="1100" height="550" />
                <img id="budgetBalloon12" src={budgetBalloon12} width="1020" height="280" />
                <img id="budgetBalloon13" src={budgetBalloon13} width="1250" height="400" />
                <img id="budgetBalloon14" src={budgetBalloon14} width="1000" height="500" />
                <img id="budgetBalloon15" src={budgetBalloon15} width="980" height="200" />
                <img id="budgetBalloon16" src={budgetBalloon16} width="1120" height="450" />
                <img id="budgetBalloon17" src={budgetBalloon17} width="1120" height="450" />
                <img id="budgetBalloon18" src={budgetBalloon18} width="1150" height="450" />
                <img id="budgetBalloon19" src={budgetBalloon19} width="1100" height="600" />
            </div>
            <Footer />
        </div>
    )
}

export default BudgetBalloon