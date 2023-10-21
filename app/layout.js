import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spadeshub | Optimized digital marketing at your fingertips',
  description: 'Fast react web development software company alongside premium and reliable Search engine optimization(SEO) services for individuals and businesses alike.',
  icons: { icon: '/icon.ico' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[wheat] dark:bg-black text-black dark:text-[wheat]`}>{children}</body>
    </html>
  )
}
