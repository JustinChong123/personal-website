import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logoWhite from './logo.png'
import logoWhiteHover from './logo-hover.png'
import logoBlack from './logo-black.png'
import logoBlackHover from './logo-black-hover.png'

// Arrow-out-of-box icon for buttons that leave the site
const externalIcon = (
    <svg className="navExternalIcon" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M5 2H2v8h8V7M7 2h3v3M10 2 5.5 6.5" />
    </svg>
)

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
                        <button className='navButton' id="email-me-button-case" onClick={() => window.location = 'mailto:justinchong753@gmail.com'}>Email{externalIcon}</button>
                    ) : (
                        <button className='navButton' id="email-me-button" onClick={() => window.location = 'mailto:justinchong753@gmail.com'}>Email{externalIcon}</button>
                    )}
                    
                </li>
                <li>
                    <a className='navButton' id={onCase ? 'linkedin-button-case' : 'linkedin-button'} href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">LinkedIn{externalIcon}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar