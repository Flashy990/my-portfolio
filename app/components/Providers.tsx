'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </ThemeProvider>
  )
}

