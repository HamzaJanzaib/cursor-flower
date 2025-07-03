"use client"
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from "motion/react"

const StickyCursor = () => {
    const [isSmall, setIsSmall] = useState(false)
    const normalSize = 80
    const smallSize = 10

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothOptions = {
        stiffness: 300, mass: 0.5, damping: 20
    }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        if (clientX < 80 || clientY < 80) {
            setIsSmall(true)
        } else {
            setIsSmall(false)
        }
        const size = isSmall ? smallSize : normalSize
        mouse.x.set(clientX - size / 2)
        mouse.y.set(clientY - size / 2)
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    })

    const size = isSmall ? smallSize : normalSize
    const opacity = isSmall ? 0.2 : 1

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                width: size,
                height: size,
                opacity: opacity,
                transition: "width 0.3s, height 0.3s, opacity 0.3s"

            }}
            className="blur rounded-full bg-black fixed pointer-events-none"
        />
    )
}

export default StickyCursor