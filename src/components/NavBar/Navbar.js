import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import ExternalIcon from '../ExternalIcon/ExternalIcon.js'
import logoWhite from './logo.png'
import logoWhiteHover from './logo-hover.png'
import logoBlack from './logo-black.png'
import logoBlackHover from './logo-black-hover.png'

// hoverColor: background of the buttons on hover (case studies pass their own color)
function Navbar({ onCase = false, hoverColor }) {

    const [logoHover, setLogoHover] = useState(false);

    return (
        <nav className="Navbar" style={hoverColor ? { '--navHover': hoverColor } : undefined}>
            <div className='logo'>
                {onCase ? (
                    <Link to="/">
                        <img className="logoPic" onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)} src={logoHover ? logoBlackHover : logoBlack} alt='' width="40" height="40" />
                    </Link>
                ) : (
                    <Link to="/"><img className="logoPic" onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)} src={logoHover ? logoWhiteHover : logoWhite} alt='' width="40" height="40" /></Link>
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
                        <button className='navButton' id="email-me-button-case" onClick={() => window.location = 'mailto:justinchong753@gmail.com'}>Email<ExternalIcon /></button>
                    ) : (
                        <button className='navButton' id="email-me-button" onClick={() => window.location = 'mailto:justinchong753@gmail.com'}>Email<ExternalIcon /></button>
                    )}
                    
                </li>
                <li>
                    <a className='navButton' id={onCase ? 'linkedin-button-case' : 'linkedin-button'} href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">LinkedIn<ExternalIcon /></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar