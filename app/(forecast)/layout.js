'use client'
import '../globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { UnitsContextProvider } from '@context/UnitsContext'
import { DataContextProvider } from '@context/DataContext'

const roboto = Roboto({ subsets: [ 'latin' ], weight: [ '300', '400', '500', '700' ] })

export const metadata = {
  title: 'IGWeather',
  description: 'Weather and forecast webb app',
}

export default function RootLayout({ children }) {
  return (
    <DataContextProvider>
      <UnitsContextProvider>
        <html lang="en" className='relative min-h-full'>
          <body className={roboto.className + " bg-blue-100 flex justify-center"}>
            <div className='w-full flex flex-col items-center bg-gradient-to-b from-gradient1  to-gradient2'>
              <Header />
              {children}
              <Footer />
            </div>
          </body>
        </html>
      </UnitsContextProvider>
    </DataContextProvider>
  )
}
