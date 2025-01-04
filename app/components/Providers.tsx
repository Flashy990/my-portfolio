'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <div key="content">{children}</div>
        </AnimatePresence>
      ) : (
        children
      )}
    </ThemeProvider>
  )
}

