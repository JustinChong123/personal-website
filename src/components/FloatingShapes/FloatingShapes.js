import React from 'react'
import shapes from './shapes.js'
import './FloatingShapes.css'

const FIELD_WIDTH = 1700
const FIELD_HEIGHT = 950
const SPEED = 10 // px per second

// Drift direction: from the top right corner towards the bottom left corner
const length = Math.hypot(FIELD_WIDTH, FIELD_HEIGHT)
const DIR_X = -FIELD_WIDTH / length
const DIR_Y = FIELD_HEIGHT / length

// How far a shape at (x, y) can travel along (dx, dy) before it has fully left the field
function distanceToExit(x, y, width, height, dx, dy) {
    const limits = []
    if (dx < 0) limits.push((x + width) / -dx)
    if (dx > 0) limits.push((FIELD_WIDTH - x) / dx)
    if (dy < 0) limits.push((y + height) / -dy)
    if (dy > 0) limits.push((FIELD_HEIGHT - y) / dy)
    return Math.min(...limits)
}

// Each shape loops along its own line through its original spot: it enters at the top/right edge,
// drifts to the bottom/left edge, and starts over. A negative delay makes it begin at its original spot.
const paths = shapes.map(({ x, y, width, height }, i) => {
    const back = distanceToExit(x, y, width, height, -DIR_X, -DIR_Y)
    const forward = distanceToExit(x, y, width, height, DIR_X, DIR_Y)
    return {
        fromX: -DIR_X * back,
        fromY: -DIR_Y * back,
        toX: DIR_X * forward,
        toY: DIR_Y * forward,
        duration: (back + forward) / SPEED,
        delay: -back / SPEED,
        // a gentle bob on top of the drift, varied per shape
        bobDuration: 7 + (i * 37 % 7),
        bobDelay: -(i * 53 % 11),
    }
})

function FloatingShapes() {
    return (
        <div className="floatingShapes" aria-hidden="true">
            {shapes.map(({ src, x, y, width, height }, i) => {
                const path = paths[i]
                return (
                    <div
                        key={i}
                        className="floatingShape"
                        style={{
                            left: x,
                            top: y,
                            width,
                            height,
                            '--fromX': `${path.fromX}px`,
                            '--fromY': `${path.fromY}px`,
                            '--toX': `${path.toX}px`,
                            '--toY': `${path.toY}px`,
                            animationDuration: `${path.duration}s`,
                            animationDelay: `${path.delay}s`,
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            style={{ animationDuration: `${path.bobDuration}s`, animationDelay: `${path.bobDelay}s` }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default FloatingShapes
