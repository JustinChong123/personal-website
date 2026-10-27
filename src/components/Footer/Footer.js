import React, {useEffect, useRef, useState} from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import upScrollArrow from './up-scroll-arrow.svg'
import upScrollArrowHover from './up-scroll-arrow-hover.svg'
import FlickerText from '../FlickerText/FlickerText.js'

// flicker: letters flicker in (like the case study cover) the first time the footer scrolls into view
function Footer ({ flicker = false }) {

    const [arrowHover, setArrowHover] = useState(false);
    const [inView, setInView] = useState(false);
    const footerRef = useRef(null);

    // Only start once the user scrolls the footer into view. Scroll jumps in the first moment after
    // the page opens (e.g. the browser restoring the old position) are ignored.
    useEffect(() => {
        if (!flicker) return;
        const mountedAt = performance.now();

        const onScroll = () => {
            const footer = footerRef.current;
            if (!footer || performance.now() - mountedAt < 600) return;
            if (footer.getBoundingClientRect().top < window.innerHeight * 0.8) {
                setInView(true);
                window.removeEventListener('scroll', onScroll);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [flicker]);

    const text = (value) => flicker ? <FlickerText text={value} play={inView} /> : value;

    return (
        <div className="Footer" ref={footerRef}>
            <div className="items-1">
                <h3>{text('Justin Chong')}</h3>
                <div className="subitems-1">
                    <Link to='/'><h4 onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>{text('Home')}</h4></Link>
                    <Link to='/aboutMe'><h4 onClick={() => {window.scrollTo({top: 0, left: 0});}}>{text('About Me')}</h4></Link>
                </div>
            </div>

            <div className="items-2">
                <h3>{text("Let's stay in touch!")}</h3>
                <div className="subitems-2">
                    <h4>
                        <a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">{text('LinkedIn')}</a>
                    </h4>
                    <h4 id="footer-email-me" onClick={() => window.location = 'mailto:justin.r.chong.24@dartmouth.edu'}>{text('Email Me')}</h4>
                </div>
            </div>

            <img
                id="upScrollArrow"
                onMouseEnter={() => setArrowHover(true)}
                onMouseLeave={() => setArrowHover(false)}
                onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
                src={arrowHover ? upScrollArrowHover : upScrollArrow} 
                width="51"
                height="51"
                alt=''/>
        </div>
    )
}

export default Footer