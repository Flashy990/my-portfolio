import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import BackgroundParticles from './components/BackgroundParticles'
import CustomCursor from './components/CustomCursor'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aryan Kakadia - Software Engineer',
  description: 'Personal portfolio of Aryan Kakadia, a passionate software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900`}>
        <Providers>
          <div className="relative min-h-screen">
            <BackgroundParticles />
            <CustomCursor />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

