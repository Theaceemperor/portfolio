import './globals.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import AppLayout from '../components/ReusableComponents';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spades | Innovative web development at your fingertips',
  description: "Revolutionize your online presence and attract more organic or paid visitors with our bespoke software development and premium optimized SEO services",
  icons: '/SPADES.ICO'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-wheat text-black dark:bg-black dark:text-wheat`}>
        <SpeedInsights />
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  )
}
