'use client'

import { useEffect, useState, useCallback } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const updateCursor = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
    const target = document.elementFromPoint(e.clientX, e.clientY)
    setIsPointer(target ? window.getComputedStyle(target).cursor === 'pointer' : false)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true)
      const handleMouseLeave = () => setIsVisible(false)
      const handleMouseEnter = () => setIsVisible(true)

      window.addEventListener('mousemove', updateCursor)
      document.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('mouseenter', handleMouseEnter)

      return () => {
        window.removeEventListener('mousemove', updateCursor)
        document.removeEventListener('mouseleave', handleMouseLeave)
        document.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [updateCursor])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out mix-blend-difference will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
      }}
    >
      <div className="rounded-full bg-white w-3 h-3" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white w-7 h-7 opacity-25" />
    </div>
  )
}

// 'use client'

// import { useEffect, useState } from 'react'

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [isPointer, setIsPointer] = useState(false)

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY })
//     }

//     const checkPointer = () => {
//       const target = document.elementFromPoint(position.x, position.y)
//       setIsPointer(target ? window.getComputedStyle(target).cursor === 'pointer' : false)
//     }

//     document.addEventListener('mousemove', moveCursor)
//     document.addEventListener('mouseenter', moveCursor)
//     document.addEventListener('mouseover', checkPointer)

//     return () => {
//       document.removeEventListener('mousemove', moveCursor)
//       document.removeEventListener('mouseenter', moveCursor)
//       document.removeEventListener('mouseover', checkPointer)
//     }
//   }, [position.x, position.y])

//   return (
//     <div
//       className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out mix-blend-difference"
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
//       }}
//     >
//       <div className="rounded-full bg-white w-3 h-3" />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white w-7 h-7 opacity-25" />
//     </div>
//   )
// }