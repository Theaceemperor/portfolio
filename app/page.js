import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Image from 'next/image';
import { AffiliateLink, HeaderText, HomeNav, LoginQuest } from './components/client/ReusableComponents';

export default function Home() {
  return (
    <main className='text-center flex flex-col gap-5 min-h-screen justify-center items-center border-y-8 border-black dark:border-amber-600 max-w-screen'>
      <HomeNav />
      <HeaderText />
      <div id='about-us' className='text-center px-3 flex flex-col gap-5 text-sm'>
        <p>Welcome to <b>Spadeshub</b>, an effective center of success and control in software development. We are a digital marketing agency that specializes in developing optimized fast full-stack secure react web applications using the Next.js framework alongside premium search engine optimization(SEO) to boost your search engine ranking and online visibility. <br />
        We develop websites you can pitch to investors or own; our aim is to empower brands and individuals alike for digital success and online growth via data-driven strategies and digital innovation using the most secure and scalable platforms for development to satisfy the needs of our clients and their clients in turn. Take advantage of our already built <Link href={'/projects'} className='underline font-bold dark:text-amber-600'><i>digital solutions</i></Link> now!</p>
        <AffiliateLink />
      </div>
      <LoginQuest />
      <div  className='text-2xl flex flex-row gap-5 items-center justify-center font-bold p-1 text-amber-600'>
        <Link href={'https://twitter.com/@spadeshub'}><FaXTwitter /></Link>
        <Link href={'mailto:spadesinstitute.empire@gmail.com'}><SiGmail /></Link>
        <Link href={'https://nexvault.vercel.app'}><Image priority src={'/nexvault_icon.ICO'} alt='NexVault' width={500} height={500} className='w-7 h-7 bg-amber-600 rounded-full' /></Link>
      </div>
    </main>
  )
}
