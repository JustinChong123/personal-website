import React from 'react'
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom'
import sweResume from './Justin_Chong_SWE_Resume.docx.pdf'
import pmResume from './Justin_Chong_PM_Resume.pdf'
import designResume from './Justin Chong Resume.pdf'
import logoPic from './logo.png'

function Navbar() {
    return (
        <nav className="Navbar">
            <div className='logo'>
                <Link to="/"><img className="logoPic" src={logoPic} alt="Logo Picture" width="40" height="40" /></Link>
                <Link to="/">Justin Chong</Link>
            </div>
            <ul className='navButtons'>
                <li>
                    <Link id="about-me-button" to="/aboutMe">About Me</Link>
                </li>
                <li>
                    <button id="email-me-button" onClick={() => window.location = 'mailto:justin.r.chong.24@dartmouth.edu'}>Email Me</button>
                </li>
                <li>
                    <DropdownButton id="resume-download-button" title="Resume">
                        <Dropdown.Item id='dropdownItemDesign' href={designResume} target='_blank' rel='noopener noreferrer'>Design</Dropdown.Item>
                        <Dropdown.Item id='dropdownItemPM' href={pmResume} target='_blank' rel='noopener noreferrer'>PM</Dropdown.Item>
                        {/* <Dropdown.Item id='dropdownItemSWE' href={sweResume} target='_blank' rel='noopener noreferrer'>SWE</Dropdown.Item> */}
                    </DropdownButton>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar