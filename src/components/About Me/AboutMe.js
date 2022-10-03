import React from 'react'
import Navbar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import './AboutMe.css'
import profilePic from './profile-pic.png'
import skiing from './skiing.png'
import dancing from './dancing.png'
import foodie from './foodie.png'
// import aboutMeSkiing from './about-me-skiing.png'
// import snowMountain from './snow-mountain.png'

function AboutMe () {
    return (
        <div className="aboutMeLarge">
            <div className="aboutMe">
                <Navbar />
                <div className="aboutMeIntro">
                    <img id="profilePic" src={profilePic} alt="Profile Pic" width="300" height="399" />
                    <h4 id="aboutMeText">Hi, my name is Justin Chong, and I'm a <span className="boldBlueText">product designer</span> and <span className="boldPinkText">software engineer</span> from Los Angeles, CA. I'm currently a junior at Dartmouth College majoring in Computer Science with a Minor in Human-Centered Design. Outside of the classroom, I am a UI/UX Designer and Product Manager at the <a id="daliLabLink" href="http://dali.dartmouth.edu/" target="_blank" rel="noopener noreferrer">DALI Lab</a>.</h4>
                    <h4 id="aboutMeText1">I am interested in designing experiences that don't treat <span className="boldYellowText">accessibility</span> as an add-on feature, but as a <span className="boldYellowText">core philosophy.</span> Technology is increasing the gap between people and exacerbating existing inequalities, so I think designing with accessibility and inclusivity at the forefront is essential.</h4>
                </div>
                <img className="hobbies" id="skiing" src={skiing} alt="Skiing" width="1100" height="676.9"/>
                <h4>Feeling alive and free. Slarving and carving in the snow, doing a switch 180 off a jump, sliding on a rail (and usually eating it). I feel on top of the world, like nothing can stop me. It’s the essence of pure thrill. I take risks, try new things, and get up everytime I fall, on the slopes and in my design thinking.</h4>
                <img className="hobbies" id="dancing" src={dancing} alt="Dancing" width="1100" height="676.9"/>
                <h4>The effortless smile after finishing a set. Throwing my hands and arms into the air. This South Asian style of dance brings my energy to new heights, perfect for those 3 seasons when it’s not snowing.  Effortless and delightful motion and movement is an energy I bring to the dance floor and to the user experience.</h4>
                <img className="hobbies" id="foodie" src={foodie} alt="Foodie" width="1100" height="740"/>
                <h4 id="foodieText">LA is a food mecca. From Mexican to Nigerian to Korean, we have it all, and I eat it all, sharing phenomenal food on my food blog. Food is more than sustenance. It is humble histories, childhood, and national pride. Every bite of food is joyful and fresh, a refreshing and savory experience that I embody in my designs.</h4>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMe