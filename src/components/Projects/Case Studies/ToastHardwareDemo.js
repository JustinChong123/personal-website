import React, { useEffect, useRef, useState } from 'react'
import './ToastHardwareDemo.css'
import highFiMockups from './Toast Images/toast-high-fi-mockups.svg'
import demoVideo from './Toast Images/toast-hardware-demo.mp4'
import demoPoster from './Toast Images/toast-hardware-demo-poster.webp'
import scanner from './Toast Images/toast-scanner.webp'

// Seconds into the video when each scanned item appears in the list
const ITEM_TIMES = [0.83, 2.1, 3.33, 4.57]
// Fire the scan a moment before the item shows up, like a real scan-then-add
const SCAN_LEAD = 0.15
const SCAN_TIMES = ITEM_TIMES.map((t) => t - SCAN_LEAD)

// Barcode bar widths (in design units), alternating bar / gap
const BARS = [3, 2, 1, 2, 4, 1, 2, 3, 1, 1, 3, 2, 1, 4, 2, 1, 1, 2, 3, 1, 2, 2, 1, 3, 1, 1, 4, 2, 1, 2, 3]

function Barcode() {
    let x = 868
    const bars = []
    BARS.forEach((w, i) => {
        if (i % 2 === 0) bars.push(<rect key={i} x={x} y={108} width={w} height={46} fill="#1D1D1F" />)
        x += w
    })
    return (
        // Drawn at its original size, then scaled up to match the larger phones in the base image
        <g className="toastBarcode" transform="translate(-139.4 8.1) scale(1.18)">
            <rect x={852} y={94} width={98} height={82} rx={8} fill="white" />
            {bars}
            <text x={901} y={168} textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill="#1D1D1F">0 41500 00270 6</text>
        </g>
    )
}

/*
 * High-fidelity mockups with the "Hardware interaction" panel brought to life: a looping screen
 * recording next to a handheld scanner whose beam fires across a barcode each time an item is added.
 * Everything is laid out in the base SVG's 1287-wide coordinate space so it scales with the image.
 */
function ToastHardwareDemo() {
    const videoRef = useRef(null)
    const [scanCount, setScanCount] = useState(0)

    // Play only while on screen (and never for reduced-motion visitors)
    useEffect(() => {
        const video = videoRef.current
        if (!video) return undefined
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion) return undefined
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) video.play().catch(() => {})
            else video.pause()
        }, { threshold: 0.2 })
        observer.observe(video)
        return () => observer.disconnect()
    }, [])

    // Watch the playhead and fire the scanner as it passes each scan time (including across the loop)
    useEffect(() => {
        const video = videoRef.current
        if (!video) return undefined
        let frame
        let last = video.currentTime
        const tick = () => {
            const now = video.currentTime
            if (now !== last) {
                const wrapped = now < last
                const crossed = SCAN_TIMES.some((t) => (wrapped ? t > last || t <= now : t > last && t <= now))
                if (crossed) setScanCount((n) => n + 1)
                last = now
            }
            frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <div className="toastHardware">
            <img
                className="toastHardwareBase"
                loading="lazy"
                src={highFiMockups}
                alt="High-fidelity mockups: hardware interaction, manual item lookup, and reusing lists across tasks."
            />
            <video
                ref={videoRef}
                className="toastHardwareVideo"
                src={demoVideo}
                poster={demoPoster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Screen recording: items are added to the Adjust quantities list as they're scanned"
            />
            <svg className="toastHardwareOverlay" viewBox="0 0 1287 1395" aria-hidden="true">
                <defs>
                    <linearGradient id="toastBeamFade" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0" stopColor="#FF3B30" stopOpacity="0.55" />
                        <stop offset="1" stopColor="#FF3B30" stopOpacity="0.08" />
                    </linearGradient>
                </defs>
                <Barcode />
                {/* Remounting the beam on every scan restarts its CSS animation */}
                {scanCount > 0 && (
                    <g key={scanCount} className="toastScan">
                        <polygon className="toastBeam" points="1074,162 1074,172 982,192 982,142" fill="url(#toastBeamFade)" />
                        <rect className="toastScanLine" x={873} y={159} width={102} height={3.5} rx={1.75} fill="#FF3B30" />
                    </g>
                )}
            </svg>
            <img
                key={`scanner-${scanCount}`}
                className={`toastHardwareScanner${scanCount > 0 ? ' toastScannerKick' : ''}`}
                loading="lazy"
                src={scanner}
                alt="Handheld barcode scanner attached to an Android device"
            />
        </div>
    )
}

export default ToastHardwareDemo
