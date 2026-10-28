import React from 'react'
import './ExternalIcon.css'

// Arrow-out-of-box icon for links that leave the site; sized to and colored like the text around it
function ExternalIcon() {
    return (
        <svg className="externalIcon" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M5 2H2v8h8V7M7 2h3v3M10 2 5.5 6.5" />
        </svg>
    )
}

export default ExternalIcon
