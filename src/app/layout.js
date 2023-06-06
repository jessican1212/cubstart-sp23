import './globals.css'
import {Figtree} from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Cubstart Fall 2023',
  description: 'Cubstart Fall 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
