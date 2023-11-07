import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spadeshub | Optimized digital marketing at your fingertips',
  description: "Revolutionize your online presence and attract more organic or paid visitors with our bespoke software development and SEO services",
  icons: '/icon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[wheat] dark:bg-black text-black dark:text-[wheat]`}>{children}</body>
    </html>
  )
}
