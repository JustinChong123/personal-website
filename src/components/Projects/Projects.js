import React from 'react'
import {Link} from 'react-router-dom'
import './Projects.css'
import fitwitMockup from './fitwit-mockup.png'
import fitkitchBetterMockup from './fitkitch-better-mockup.png'
import chronicleMockup from './chronicle-mockup.png'
import mongodbMockup from './mongodb-mockup.png'
import budgetBalloonMockup from './budget-balloon-mockup.png'
import conferenceCupUSAMockup from './conference-cup-usa-mockup.png'
import ipathMockup from './ipath-mockup.png'
import envisionEarthMockup from './envision-earth-mockup.png'
import personalWebsiteMockup from './personal-website-mockup.png'
import dartmouthPathfinderMockup from './dartmouth-pathfinder-mockup.png'
import moreProjects from './more-projects.png'
import AISparkleIcon from './ai-sparkle-icon.png'

function Projects() {
    return (
        <div class="all-projects">
            <div class="main-projects">

                {/* <Link to="/mongodb-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="container3" id="projectContainer">
                        <div class="projectIdentifiers">
                            <h2>MongoDB</h2>
                            <h4>WEB</h4>
                        </div>
                        <h1 id="budgetBalloonDescriptionGradient">Diagnosing performance issues holisitically</h1>
                        <div class="projectTags">
                            <h3 class="projectTag">B2B</h3>
                            <h3 class="projectTag">Cloud</h3>
                            <h3 class="projectTag">SaaS</h3>
                        </div>
                        <img id="container3Mockup" src={mongodbMockup} alt="Budget Balloon Mobile Mockup" />
                    </div>
                </Link> */}

                <Link to="/ai-sales-intelligence-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="container3" id="projectContainer">
                        <div class="projectIdentifiers">
                            <h2>MongoDB</h2>
                            <h4>WEB</h4>
                        </div>
                        <h1 id="budgetBalloonDescriptionGradient">Powering decision making with AI customer insights</h1>
                        <div class="projectTags">
                            <h3 class="projectTag">
                                {/* <img id="aiSparkleIcon" src={AISparkleIcon} alt="AI Sparkle Icon" /> */}
                                AI
                            </h3>
                            <h3 class="projectTag">B2B</h3>
                            <h3 class="projectTag">Cloud</h3>
                        </div>
                        <img id="container3Mockup" src={mongodbMockup} alt="Budget Balloon Mobile Mockup" />
                    </div>
                </Link>

                <Link to="/account-portfolio-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="container1" id="projectContainer">
                        <div class="projectIdentifiers">
                            <h2>MongoDB</h2>
                            <h4>WEB</h4>
                        </div>
                        <h1 id="fitkitchDescriptionGradient">Driving customer engagements for growth and retention</h1>
                        <div class="projectTags">
                            <h3 class="projectTag">Data Viz</h3>
                            <h3 class="projectTag">B2B</h3>
                            <h3 class="projectTag">Cloud</h3>
                            <h3 class="projectTag">SaaS</h3>
                        </div>
                        <img id="container1Mockup" src={chronicleMockup} alt="Chronicle Tablet Mockup" />
                    </div>
                </Link>

                {/* <Link to="/chronicle-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="container1" id="projectContainer">
                        <div class="projectIdentifiers">
                            <h2>Chronicle</h2>
                            <h4>TABLET</h4>
                        </div>
                        <h1 id="fitkitchDescriptionGradient">Bridging generations through collaborative storytelling</h1>
                        <div class="projectTags">
                            <h3 class="projectTag">Education</h3>
                        </div>
                        <img id="container1Mockup" src={chronicleMockup} alt="Chronicle Tablet Mockup" />
                    </div>
                </Link> */}

                <Link to="/fitkitch-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="container2" id="projectContainer">
                        <div class="projectIdentifiers">
                            <h2>FitKitch</h2>
                            <h4>MOBILE</h4>
                        </div>
                        <h1 id="chronicleDescriptionGradient">Promoting daily fitness through community action</h1>
                        <div class="projectTags">
                            <h3 class="projectTag">B2C</h3>
                            <h3 class="projectTag">Health</h3>
                        </div>
                        <img id="container2Mockup" src={fitkitchBetterMockup} alt="FitKitch Mobile Mockup" />
                    </div>
                </Link>

            </div>
            
            <img id="moreProjects" src={moreProjects} alt="More Projects Tagline" />

        
            <div class="projects">
                <Link to="/conferencecup-usa-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="fitkitch">
                        <h3>ConferenceCup USA</h3>
                        <h2>Promoting transparency and equity in college athletics</h2>
                        <h4>UI/UX Design</h4>
                        <img id="conferenceCupUSAMockup" src={conferenceCupUSAMockup} />
                    </div>
                </Link>

                <Link to='/budget-balloon-case-study'>
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="chronicle">
                        <h3>Budget Balloon</h3>
                        <h2>Motivating teens to build healthy spending habits</h2>
                        <h4>UX Design</h4>
                        <img id="dartmouthPathfinderMockup" src={budgetBalloonMockup} alt="Dartmouth Pathfinder Laptop Mockup" />
                    </div>
                </Link>

                <Link to="/oh-buoy-case-study">
                    <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="budgetBalloon">
                        <h3>Oh Buoy!</h3>
                        <h2>Preventing child drowning with a wearable harness</h2>
                        <h4>Physical Product Design</h4>
                        <h6>coming soon...</h6>
                    </div>
                </Link>

                <div class="ipath">
                    <h3>iPath</h3>
                    <h2>Connecting rural cancer patients to depression treatments</h2>
                    <h4>Product Manager</h4>
                    <img id="ipathMockup" src={ipathMockup} alt="iPath iPhone Mockup" />
                </div>

                <div class="envisionEarth">
                    <h3>Envision Earth</h3>
                    <h2>Promoting holistic land management for ranchers</h2>
                    <h4>Product Manager</h4>
                    <img id="envisionEarthMockup" src={envisionEarthMockup} alt="Envision Earth iPhone and Desktop Mockup" />
                </div>

                <div class="dartmouthPathfinder">
                    <h3>Personal Website</h3>
                    <h2>Developed personal website using React.js</h2>
                    <h4>Software Engineer</h4>
                    <img id="personalWebsiteMockup" src={personalWebsiteMockup} alt="Personal Website Laptop Mockup" />
                </div>
                {/* <div class="personalWebsite">
                    <h3>Personal Website</h3>
                    <h2>Developed personal website using React.js</h2>
                    <h4>Software Engineer</h4>
                    <img id="personalWebsiteMockup" src={personalWebsiteMockup} alt="Personal Website Laptop Mockup" width="260" height="155" />
                </div> */}
            </div>
        </div>
    )
}

export default Projects