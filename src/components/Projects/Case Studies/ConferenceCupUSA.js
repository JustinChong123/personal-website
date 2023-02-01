import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import './ConferenceCupUSA.css'

function ConferenceCupUSA() {
    return (
        <div className="conferenceCupUSACaseStudy">
            <div className="conferenceCupUSACover">
                <ScrollIndicator />
                <Navbar />
                <h1>ConferenceCup USA</h1>
                <h3>UI/UX Designer</h3>
                <h2>Promoting transparency and equity in college athletics</h2>
            </div>

            <div className="conferenceCupUSAContent">

            </div>
        </div>
    )
}

export default ConferenceCupUSA