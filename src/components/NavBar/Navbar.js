import React, { useState } from 'react'
import './Navbar.css'
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom'
import designResume from './Justin Chong Resume.pdf'
import logoWhite from './logo.png'
import logoWhiteHover from './logo-hover.png'
import logoBlack from './logo-black.png'
import logoBlackHover from './logo-black-hover.png'

function Navbar({ onCase = false }) {

    const [logoHover, setLogoHover] = useState(false);

    return (
        <nav className="Navbar">
            <div className='logo'>
                {onCase ? (
                    <Link to="/">
                        <img className="logoPic" onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)} src={logoHover ? logoBlackHover : logoBlack} alt='' width="40" height="40" />
                    </Link>
                ) : (
                    <Link to="/"><img className="logoPic" onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)} src={logoHover ? logoWhiteHover : logoWhite} alt='' width="40" height="40" /></Link>
                )}
                
                {onCase ? (
                    null
                ) : (
                    <Link to="/" id='homeStyle'>Justin Chong</Link>
                )}
                
            </div>
            <ul className='navButtons'>
                <li>
                    {onCase ? (
                        <Link className='navButton' id="about-me-button-case" to="/aboutMe">About Me</Link>
                    ) : (
                        <Link className='navButton' id="about-me-button" to="/aboutMe">About Me</Link>
                    )}
                    
                </li>
                <li>
                    {onCase ? (
                        <button className='navButton' id="email-me-button-case" onClick={() => window.location = 'mailto:justin.r.chong.24@dartmouth.edu'}>Email Me</button>
                    ) : (
                        <button className='navButton' id="email-me-button" onClick={() => window.location = 'mailto:justin.r.chong.24@dartmouth.edu'}>Email Me</button>
                    )}
                    
                </li>
                <li>
                    {onCase ? (
                        <DropdownButton className='navButton'id="resume-download-button-case" title="Resume" href={designResume} target='_blank' rel='noopener noreferrer'>
                        </DropdownButton>
                    ) : (
                        <DropdownButton className='navButton'id="resume-download-button" title="Resume" href={designResume} target='_blank' rel='noopener noreferrer'>
                        </DropdownButton>
                    )}
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar