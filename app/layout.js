import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spadeshub | Optimized digital marketing at your fingertips',
  description: 'Empowering brands for digital success; we are your partner in online growth, data-driven strategies and digital innovation. Get fast full-stack react web applications alongside premium and reliable search engine optimization(SEO) services for individuals and businesses alike.',
  icons: { icon: '/icon.png' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[wheat] dark:bg-black text-black dark:text-[wheat]`}>{children}</body>
    </html>
  )
}
