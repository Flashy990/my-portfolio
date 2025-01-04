'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Intelligent Song Lyrics Analysis',
    description: 'A multiclass classification model to detect specific cetegories of explicit sentiments and content in songs.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/Flashy990/Intelligent-Explicit-Lyrics-Analysis',
  },
  {
    id: 2,
    title: 'Radiance',
    description: 'A full-stack application using docker, google cloud platform, and adding on to open source OHIF Viewer functionality to simplify radiologist workflow when using machine learning segmentation models to assist with their diagnosis.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/yourusername/stock-prediction-ml',
  },
  {
    id: 3,
    title: 'Kernel-level programming - Circle',
    description: 'Developing low-level kernel programming, OS task scheduling, and virtual memory management on a Raspberry Pi Zero emulator, utilizing bare-metal programming techniques and cross-compilation to gain hands-on experience with system architecture and performance optimization.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/Flashy990/circle',
  },
  {
    id: 4,
    title: 'Chat Room',
    description: 'Chat room application with a client-server architecture, using multi-threading and socket programming to enable real-time communication between multiple users.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/Flashy990/Chat-Room-Application',
  },
  {
    id: 5,
    title: 'MultiThreaded OULAD Database Analyzer',
    description: 'Processing the Open University Learning Analytics Dataset (OULAD) to track student interactions with course materials, implementing both sequential and concurrent (producer-consumer model) solutions to optimize performance and generate daily click summaries for each course.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/Flashy990/MultiThreaded-OULAD-Analyzer',
  },
  {
    id: 6,
    title: 'UNIX Shell Clone',
    description: 'A shell clone leveraging concepts such as system calls, forking, pipes, process control and user command parsing.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/Flashy990/UNIX-shell',
  },
  {
    id: 7,
    title: 'Custom Language Development OcamlMini',
    description: 'OcamlMini is a lightweight, custom programming language developed using OCaml. This project serves as an educational and practical exploration into language design, compiler construction, and operational semantics.',
    image: '/placeholder.svg?height=400&width=600',
    link: 'https://github.com/Flashy990/Custom-Language-Development-OcamlMini',
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

