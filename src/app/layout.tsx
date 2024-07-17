
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, Inter, Manrope, Montserrat, Nunito, Nunito_Sans, Plus_Jakarta_Sans, Ubuntu} from 'next/font/google'
import {Poppins} from 'next/font/google'
import {Sofia_Sans} from 'next/font/google'
import {Exo} from 'next/font/google'
import Header from '../app/Components/Header'
import Footer from '../app/Components/Footer'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })
const exo = Exo({
  weight: ['100','200','300','400','500','600','700','800'], // Specify the font weights you want to use
  subsets: ['latin'], // Specify the subsets you need
  display: "swap",
});
const poppins = Poppins({ subsets: ['latin'], weight:['100','200','300','400','500','600','700','800'] })
const montessart = Montserrat({ subsets: ['latin'], weight:['100','200','300','400','500','600','700','800'] })
const jakarta = Manrope({ subsets: ['latin'], weight:['200','300','400','500','600','700','800'] })


export const metadata: Metadata = {
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
      
      <body className={exo.className}>
        <Header/>
        {children}
        <ToastContainer />
        <Footer/>
      </body>
    </html>
  )
}
