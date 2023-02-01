import React from 'react'
import Navbar from '../../NavBar/Navbar.js'
import Footer from '../../Footer/Footer.js'
import ScrollIndicator from '../../Scroll Indicator/ScrollIndicator.js'
import './OhBuoy.css'

function OhBuoy() {
    return (
        <div className="ohBuoyCaseStudy">
            <div className="ohBuoyCover">
                <ScrollIndicator />
                <Navbar />
                <h1>Oh Buoy</h1>
                <h3>Physical Product Designer</h3>
                <h2>Preventing child drowning with a self-inflating harness</h2>
            </div>

            <div className="ohBuoyContent">

            </div>
        </div>
    )
}

export default OhBuoy