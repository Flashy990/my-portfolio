'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Hobbies', href: '/hobbies' },
  { name: 'Music', href: '/music' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Aryan Kakadia</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
