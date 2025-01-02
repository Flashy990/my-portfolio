'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const checkPointer = () => {
      const target = document.elementFromPoint(position.x, position.y)
      setIsPointer(target && window.getComputedStyle(target).cursor === 'pointer')
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', checkPointer)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', checkPointer)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [position.x, position.y])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="rounded-full bg-white w-3 h-3" />
      </div>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="rounded-full border-2 border-white w-7 h-7 opacity-25" />
      </div>
    </>
  )
}

