import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from "./footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'Dashboard overseeing user tracked currencies and crypto news',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
