import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'react-toastify/ReactToastify.min.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MultiShop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
