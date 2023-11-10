import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { SiGmail } from "react-icons/si";


export function SpadesSubFooter() {

    return (
        <footer id="footer" className="mx-1 my-5 border-y rounded-md border-amber-600">
          <div className="flex flex-col sm:grid sm:grid-cols-3 sm:text-center gap-5 p-5 text-xs">
            <ul className="flex flex-col gap-1">
              <li><Link href={'/'} className="hover:underline underline-offset-2 decoration-amber-600">Home</Link></li>
              <li><Link href={'/#about'} className="hover:underline underline-offset-2 decoration-amber-600">About us</Link></li>
              <li><Link href={'/projects#portfolio'} className="hover:underline underline-offset-2 decoration-amber-600">Projects</Link></li>
              <li><Link href={'/services#services'} className="hover:underline underline-offset-2 decoration-amber-600">Services</Link></li>
              <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Contact</Link></li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li><Link href={'/web-development'} className="hover:underline underline-offset-2 decoration-amber-600">Track your development</Link></li>
              <li><Link href={'/web-development/application'} className="hover:underline underline-offset-2 decoration-amber-600">Build a website</Link></li>
              <li><Link href={'/spades/pricing'} className="hover:underline underline-offset-2 decoration-amber-600">How our pricing works</Link></li>
              <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Get a template</Link></li>
              <li>
                <blockquote className="flex flex-row gap-5 mt-1 sm:items-center sm:justify-center">
                  <Link href={'https://twitter.com/@spadeshub'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><FaXTwitter className="text-2xl text-amber-600 rounded-full text-center" /></Link>
                  <Link href={'https://github.com/Theaceemperor/portfolio'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><BsGithub className="text-amber-600 text-2xl border-x-2 border-black rounded-full text-center" /></Link>
                  <Link href={'mailto:spadesinstitute.empire@gmail.com'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><SiGmail className="text-amber-600 text-2xl text-center" /></Link>
                </blockquote>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li><Link href={'https://twitter.com/@spadeshub'} className="hover:underline underline-offset-2 decoration-amber-600">Dev support</Link></li>
              <li><Link href={'/spades/terms'} className="hover:underline underline-offset-2 decoration-amber-600">T & C</Link></li>
              <li><Link href={'/spades/policy'} className="hover:underline underline-offset-2 decoration-amber-600">Privacy</Link></li>
              <li><Link href={'#'}>2023 © spadeshub</Link></li>
            </ul>
          </div>
        </footer>
    )
}