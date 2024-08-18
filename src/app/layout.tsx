import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'
import Provider from '../Providers/provider'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: ['/favicon.webp'],
  title: 'Abdullah Khalil',
  description:
    'Abdullah Khalil - A passionate Computer Science graduate with expertise in web development, AI, and mobile applications. Skilled in MERN stack, Next.js, GSAP, and more. Explore my portfolio to see projects in AI-driven facial recognition, hotel booking management systems, and more innovative solutions.',
}

interface RootInterface {
  children: React.ReactNode
}
function RootLayout({ children }: Readonly<RootInterface>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

export default RootLayout
