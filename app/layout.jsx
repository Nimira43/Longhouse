import { Poppins } from 'next/font/google'
import './assets/styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Longhouse',
  description: 'Property website using Next JS and MongoDB via Docker',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
