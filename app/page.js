import Link from 'next/link';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Image from 'next/image';
import { HeaderText, HomeNav, LoginQuest } from '../components/ReusableComponents';
import { AdsNotification } from '@/components/alert';

export default function Home() {
  return (
    <main className='text-center flex flex-col space-y-4 min-h-screen justify-center items-center border-y-8 border-black dark:border-amber-600 max-w-screen px-2 py-4'>
      <HomeNav />
      <HeaderText />
      <h1>Web development and Search engiene optimization (SEO)</h1>
      <div id='about' className='text-center text-sm sm:text-base'>
        <p>Welcome to <b>Spades</b>, a hub and effective center of success and control in web application development. We are an innovative and creative company of experts that specializes in developing optimized and secure fast full-stack react web applications using the Next.js framework, alongside premium search engine optimization (SEO) to boost and enhance your business presence, search engine ranking and online visibility. <br />
        We develop software solutions and digital assets you can pitch to investors or own. Our aim is to elevate individuals, small businesses and institutions for digital success, online growth, elegance and visibility via data-driven strategies, digital innovation and tailored solutions using the most secure, scalable and mordern platforms for development to satisfy the needs of our clients and their clients in turn. Take advantage of our already built <Link href={'/projects'} className='underline font-bold dark:text-amber-600'><i>digital solutions</i></Link> now!</p>
      </div>
      <LoginQuest />
      <div  className='text-2xl flex flex-row gap-5 items-center justify-center font-bold text-amber-600'>
        <Link href={'https://twitter.com/@spadeshub'}><FaXTwitter /></Link>
        <Link href={'mailto:spadesinstitute.empire@gmail.com'}><SiGmail /></Link>
        <Link href={'https://nexvault.space'}><Image priority src={'/nexvault_icon.ICO'} alt='NexVault' width={500} height={500} className='w-7 h-7 bg-amber-600 rounded-full' /></Link>
        <Link href={'https://instagram.com/spadeshub?igsh=YnMwZWpmdW9mNWI3'}><FaInstagram /></Link>
      </div>
      <AdsNotification 
      alertTitle={"Unlock Your Site's Potential!"}
      >
          <span>Maximize your online impact with our bespoke web solutions. Transform your website into a powerful asset for your business growth.</span> 
      </AdsNotification> 
    </main>
  )
}
