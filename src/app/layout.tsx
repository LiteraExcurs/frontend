import { Header } from '@/components/header/index'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Литературная Москва',
  description: 'Литературная Москва',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} body`}>
      <Header />
        <main className='main'>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
