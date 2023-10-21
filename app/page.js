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
        <div id='about' className='text-center px-2 flex flex-col gap-5'>
          <p>Hi, we are a digital marketing agency that specializes in building and developing fast full stack react applicications using the Nex.js framework. <br />
          We develop websites you can pitch to investors or own. Take advantage of our already built <Link href={'/projects'} className='underline font-bold dark:text-amber-600'><i>digital solutions</i></Link> now!</p>
          <AffiliateLink />
        </div>
        <LoginQuest />
      </main>
    </>
  )
}
