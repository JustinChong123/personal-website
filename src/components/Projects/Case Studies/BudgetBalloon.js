import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import './BudgetBalloon.css'
import budgetBalloonMockup from '../budget-balloon-mockup.png'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import budgetBalloonStats from './Budget Balloon Images/budget-balloon-stats.png'
import budgetBalloonProblem from './Budget Balloon Images/budget-balloon-problem.png'

function BudgetBalloon() {
    return (
        <div className="budgetBalloonCaseStudy">
            <div className="budgetBalloonCover">
                <ScrollIndicator />
                <Navbar />
                <h1>Budget Balloon</h1>
                <h3>UX Designer</h3>
                <h2>Motivating teens to build healthy spending habits</h2>
                <img id="budgetBalloonCaseStudyMockup" src={budgetBalloonMockup} alt="Budget Balloon Mockup" width="380" height="470" />
            </div>
            <div className="budgetBalloonContent">
                
                <div className="budgetBalloonIntro">
                    <h1 className="caseSectionHeader" id="budgetBalloonIntroQuestion">How does FitKitch marry exercise and community building?</h1>
                    <p className="caseText" id="budgetBalloonIntroText">Budget Balloon is a mobile app that <span className="fitkitchBoldText">teaches teens how to save money</span> and curb unhealthy spending habits by promoting friendly competition to save up for bigger goals. We used <span className="fitkitchBoldText">hot air balloon racing</span> to visualize saving up for a personal goal, adding a fun, kid-friendly, and gamified experience for teens.</p>
                    <img id="budgetBalloonStats" src={budgetBalloonStats} width="250" height="580" />
                </div>

                <div id="budgetBalloonPinkBackground"className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">BACKGROUND</h3>
                    </div>
                    <div className="caseMain">
                        <p id="noSectionHeader"className="caseText">For our UI/UX Design class project, our UX design challenge to <span className="fitkitchBoldText">design a solution to help kids save money.</span> We aimed to curb teens' compulsive spending habits and transform the mundate experience of budgeting and saving into a <span className="fitkitchBoldText">fun, rewarding one with a competitive spirit.</span></p>
                    </div>
                </div>

                <div className="caseSection">
                    <div className="caseSideHeader">
                        <h3 id="pinkCaseSideHeader">PROBLEM</h3>
                    </div>
                    <div className="caseMain">
                        <h1 className="caseSectionHeader">Why is it important to teach kids good spending habits?</h1>
                        <p className="caseText">Kids today have more money to spend, but struggle to build healthy spending patterns and budgeting skills. These bad financial habits can snowball into adulthood and leave them straddled with debt.</p>
                        <img src={budgetBalloonProblem} width="610" height="180" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default BudgetBalloon