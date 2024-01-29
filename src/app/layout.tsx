import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from "./footer";
import Bg from "@/assets/bg.jpg";

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
        <div style={{ backgroundImage: `url('${Bg.src}')` }} className="w-full bg-darkmode-500 h-full z-10  bg bg-norepeat bg-fixed bg-cover bg-center ">
            <div className="w-full h-full backdrop-brightness-75">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
      </body>
    </html>
  )
}
