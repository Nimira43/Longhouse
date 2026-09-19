import { Poppins } from 'next/font/google'
import '../assets/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthProvider from '../components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalProvider } from '../context/GlobalContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Longhouse',
  description: 'Property website using Next JS and MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang='en'>
          <body className={poppins.className}>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  )
}
