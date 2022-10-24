import React from 'react'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './AboutMe.css'
import profilePic from './profile-pic.png'
import aboutMeGraphics from './about-me-graphics.png'
import skiing from './skiing.png'
import dancing from './dancing.png'
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
                <h4 id="skiingText">Feeling alive and free. Slarving and carving in the snow, doing a switch 180 off a jump, sliding on a rail (and usually eating it). I feel on top of the world, like nothing can stop me. It’s the essence of pure thrill. I take risks, try new things, and get up everytime I fall, on the slopes and in my design thinking.</h4>
                <img className="hobbies" id="dancing" src={dancing} alt="Dancing" width="1100" height="676.9"/>
                <h4 id="dancingText">The effortless smile after finishing a set. Throwing my hands and arms into the air. This South Asian style of dance brings my energy to new heights, perfect for those 3 seasons when it’s not snowing.  Effortless and delightful motion and movement is an energy I bring to the dance floor and to the user experience.</h4>
                <img className="hobbies" id="foodie" src={foodie} alt="Foodie" width="1100" height="740"/>
                <h4 id="foodieText">LA is a food mecca. From Mexican to Nigerian to Korean, we have it all, and I eat it all, sharing phenomenal food on my food blog. Food is more than sustenance. It is humble histories, childhood, and national pride. Every bite of food is joyful and fresh, a refreshing and savory experience that I embody in my designs.</h4>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMe