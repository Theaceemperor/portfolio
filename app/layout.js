import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spadeshub | Optimized digital marketing at your fingertips',
  description: "Elevate your online presence with our comprehensive web development and SEO services. We craft beautiful websites that rank high and drive conversions for your business.",
  icons: '/icon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[wheat] dark:bg-black text-black dark:text-[wheat]`}>{children}</body>
    </html>
  )
}
