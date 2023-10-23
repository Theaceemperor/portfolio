import Link from 'next/link';
import { HeaderText } from './components/headerText';
import { AffiliateLink, LoginQuest } from './components/spadesLinks';
import { HomeNav } from './components/navBar';

export default function Home() {
  return (
    <>
      <main className='text-center flex flex-col gap-5 h-screen justify-center items-center border-y-8 border-black dark:border-amber-600 max-w-screen'>
        <HomeNav />
        <HeaderText />
        <div id='about-us' className='text-center px-3 flex flex-col gap-5'>
          <p>Welcome to <b>Spadeshub</b>, an effective center of success and control in software development. We are a digital marketing agency that specializes in developing optimized fast full-stack secure react web applications using the Next.js framework alongside premium search engine optimization(SEO) to boost your search engine ranking and online visibility. <br />
          We develop websites you can pitch to investors or own; our aim is to empower brands and individuals alike for digital success and online growth via data-driven strategies and digital innovation using the most secure and scalable platforms for development to satisfy the needs of our clients and their clients in turn. Take advantage of our already built <Link href={'/projects'} className='underline font-bold dark:text-amber-600'><i>digital solutions</i></Link> now!</p>
          <AffiliateLink />
        </div>
        <LoginQuest />
      </main>
    </>
  )
}
