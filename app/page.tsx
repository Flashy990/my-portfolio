'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
        Ever since I can remember, I have been obsessed with how things work—especially when it comes to computers. It started with tinkering around, breaking (and eventually fixing) old hardware, and spiraled into a full-blown love for building PCs and diving deep into C++.
        When I am not elbow-deep in a computer case or geeking out over GPUs, I am probably coding, learning new technologies, tinkering with microcontrollers, gaming, or jamming to my favorite playlists.
        For me, it is not just about tech—it is about the thrill of creating, solving problems, and having fun along the way.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
        >
          Learn More About Me
          <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  )
}

