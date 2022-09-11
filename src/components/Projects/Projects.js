import React from 'react'
import {Link} from 'react-router-dom'
import './Projects.css'
import fitwitMockup from './fitwit-mockup.png'
import chronicleMockup from './chronicle-mockup.png'
import budgetBalloonMockup from './budget-balloon-mockup.png'
import ipathMockup from './ipath-mockup.png'
import envisionEarthMockup from './envision-earth-mockup.png'
import personalWebsiteMockup from './personal-website-mockup.png'
import dartmouthPathfinderMockup from './dartmouth-pathfinder-mockup.png'

function Projects() {
    return (
        <div class="projects">
            <Link to="/fitkitch-case-study">
                <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="fitkitch">
                    <h3>FitKitch</h3>
                    <h2>Promoting daily fitness through community action</h2>
                    <h4>UI/UX Designer</h4>
                    <img id="fitwitMockup" src={fitwitMockup} alt="FitWit iPhone 13 Mockup" width="150" height="187.5" />
                </div>
            </Link>
            <Link to="/chronicle-case-study">
                <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="chronicle">
                    <h3>Chronicle</h3>
                    <h2>Bridging generations through collaborative storytelling</h2>
                    <h4>UI/UX Designer</h4>
                    <img id="chronicleMockup" src={chronicleMockup} alt="Chronicle Tablet Mockup" width="230" height="250" />
                </div>
            </Link>
            <Link to='/budget-balloon-case-study'>
                <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="budgetBalloon">
                    <h3>Budget Balloon</h3>
                    <h2>Motivating teens to build healthy spending habits</h2>
                    <h4>UX Designer</h4>
                    <img id="budgetBalloonMockup" src={budgetBalloonMockup} alt="Budget Balloon iPhone Mockup" width="150" height="187" />
                </div>
            </Link>
            <Link to='/ipath-case-study'>
                <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="ipath">
                    <h3>iPath</h3>
                    <h2>Connecting rural cancer patients to depression treatments</h2>
                    <h4>Product Manager</h4>
                    <img id="ipathMockup" src={ipathMockup} alt="iPath iPhone Mockup" width="120" height="187" />
                </div>
            </Link>
            <Link to='/envision-earth-case-study'>
                <div onClick={() => {window.scrollTo({top: 0, left: 0});}} class="envisionEarth">
                    <h3>Envision Earth</h3>
                    <h2>Promoting holistic land management for ranchers</h2>
                    <h4>Product Manager</h4>
                    <img id="envisionEarthMockup" src={envisionEarthMockup} alt="Envision Earth iPhone and Desktop Mockup" width="220" height="187" />
                </div>
            </Link>
            <div class="dartmouthPathfinder">
                <h3>Dartmouth Pathfinder</h3>
                <h2>Finding fastest path between locations at Dartmouth</h2>
                <h4>Software Engineer</h4>
                <img id="dartmouthPathfinderMockup" src={dartmouthPathfinderMockup} alt="Dartmouth Pathfinder Laptop Mockup" width="260" height="155" />
            </div>
            <div class="personalWebsite">
                <h3>Personal Website</h3>
                <h2>Developed personal website using React.js</h2>
                <h4>Software Engineer</h4>
                <img id="personalWebsiteMockup" src={personalWebsiteMockup} alt="Personal Website Laptop Mockup" width="260" height="155" />
            </div>
        </div>
    )
}

export default Projects