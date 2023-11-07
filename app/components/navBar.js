'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiSpades } from "react-icons/gi";
import { IoHome } from "react-icons/io5";


export function HomeNav() {

    return (
        <nav className='sm:relative sm:left-40'>
          <ul className='flex items-center justify-end gap-3 sm:gap-5'>
            <li><Link href={'/projects'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>Projects</Link></li>
            <li><Link href={'/services'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>Services</Link></li>
            <li><Link href={'/contact'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>contact</Link></li>
          </ul>
        </nav>
    )
}

export function SubNav() {
  const router = useRouter();

    return (
      <section>
        <div id="sub-header" className="flex items-center justify-center">
          <nav className="fixed top-2 z-40 text-amber-600 bg-black/80 py-2 px-5 rounded-md">
            <ul className='flex items-center justify-between gap-3 sm:gap-5'>
              <li><Link href={'/projects'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>Projects</Link></li>
              <li><Link href={'/services'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>Services</Link></li>
              <li><Link href={'/contact'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>contact</Link></li>
              <li><Link href={'/web-development'} className='flex items-center'><GiSpades /></Link></li>
            </ul>
          </nav>
        </div>
        <IoHome className="fixed bottom-0 right-0 m-1 text-5xl font-bold animate-bounce rounded-full text-amber-600 bg-black/90 p-1 border-2 border-amber-600" onClick={() => router.push('/')} />
      </section>
    )
}