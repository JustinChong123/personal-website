import React from 'react'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './AboutMe.css'
import profilePic from './profile-pic.png'
import aboutMeGraphics from './about-me-graphics.png'
import skiing from './skiing.png'
import hiking from './hiking.png'
import foodie from './foodie.png'

function AboutMe () {
    return (
        <div className="aboutMeLarge">
            <div className="aboutMe">
                <Navbar />
                <div className="aboutMeIntro">
                    <img id="profilePic" src={profilePic} alt="Profile Pic" width="1000" height="459" />
                    <img id="aboutMeGraphics" src={aboutMeGraphics} width="1800" height="1000" />
                </div>
                <img className="hobbies" id="skiing" src={skiing} alt="Skiing" width="1100" height="676.9"/>
                <h4 id="skiingText">To me, skiing is not just a sport, it’s art. The snow feels like a blank canvas that I’m painting into as my skis carve through the slopes. It’s the same kind of <span class='highlight'>creativity and innovation I bring to my craft</span> as a product designer. As a skier who leans more freestyle, I’m no stranger to taking risks and getting up after I fall. It’s exactly what drives me to <span class='highlight'>experiment, test bold ideas, and encourage divergent thinking</span> in my design process.</h4>
                <img className="hobbies" id="dancing" src={hiking} alt="Dancing" width="1100" height="676.9"/>
                <h4 id="dancingText">Hiking is a refuge and retreat for me. Even when I’m completely out of breath, I always feel at peace in the woods. It’s a place where I <span class='highlight'>stop questioning every step and thought</span> and follow my intuition. That’s exactly the kind of principles I embody in my work to design <span class='highlight'>intuitive, seamless experiences grounded in research and testing.</span></h4>
                <img className="hobbies" id="foodie" src={foodie} alt="Foodie" width="1100" height="740"/>
                <h4 id="foodieText">As someone from Los Angeles that now lives in NYC, I eat everything to share phenomenal food on my food blog. There’s an ultimate joy I feel discovering new places that introduce me to flavors I’ve never thought to combine. That <span class='highlight'>delight is something I think deeply about</span> as a product designer. It’s not just about exciting users, but truly empathizing and <span class='highlight'>meeting users where they are in their emotional journey.</span></h4>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMe