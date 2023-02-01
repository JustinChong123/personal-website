import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import upScrollArrow from './up-scroll-arrow.png'

function Footer () {
    return (
        <div className="Footer">
            <div className="items-1">
                <h3>Justin Chong</h3>
                <div className="subitems-1">
                    <Link to='/'><h4 onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Home</h4></Link>
                    <Link to='/aboutMe'><h4 onClick={() => {window.scrollTo({top: 0, left: 0});}}>About Me</h4></Link>
                </div>
            </div>
            <div className="items-2">
                <h3>Let's stay in touch!</h3>
                <div className="subitems-2">
                    <h4 id="footer-resume" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Resume</h4>
                    <h4>
                        <a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </h4>
                    <h4 id="footer-email-me" onClick={() => window.location = 'mailto:justin.r.chong.24@dartmouth.edu'}>Email Me</h4>
                </div>
            </div>
            <img id="upScrollArrow" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} src={upScrollArrow} width="51" height="51" />
        </div>
    )
}

export default Footer