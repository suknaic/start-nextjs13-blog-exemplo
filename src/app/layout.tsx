import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <Navbar />
        <div
        id='page-top-spacer'
          className="
            h-12
            bg-gradient-to-t
            from-transparent
            to-neutral-800"
          >
          </div>
          {children}
          <div id="page-bottom-spacer" className="h-16"></div>
      </body>
    </html>
  )
}
