import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoHome } from "react-icons/io5";


export function SpadesSubFooter() {

    return (
        <footer id="footer" className="mx-1 my-5 border-y rounded-md border-amber-600">
          <div className="grid grid-cols-3 text-center gap-2 p-1 text-sm">
            <ul>
              <li><Link href={'/'} className="hover:underline underline-offset-2 decoration-amber-600">Home</Link></li>
              <li><Link href={'/#about'} className="hover:underline underline-offset-2 decoration-amber-600">About us</Link></li>
              <li><Link href={'/projects#portfolio'} className="hover:underline underline-offset-2 decoration-amber-600">Projects</Link></li>
              <li><Link href={'/services#services'} className="hover:underline underline-offset-2 decoration-amber-600">Services</Link></li>
              <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Contact</Link></li>
            </ul>
            <ul>
              <li><Link href={'/web-development'} className="hover:underline underline-offset-2 decoration-amber-600">Track your development</Link></li>
              <li><Link href={'/web-development/application'} className="hover:underline underline-offset-2 decoration-amber-600">Build a website</Link></li>
              <li><Link href={'/spades/pricing'} className="hover:underline underline-offset-2 decoration-amber-600">How our pricing works</Link></li>
              <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Get a template</Link></li>
              <li><Link href={'https://github.com/Theaceemperor/portfolio'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><BsGithub className="text-amber-600 text-2xl border-x-2 border-black rounded-full text-center" /></Link></li>
            </ul>
            <ul>
              <li><Link href={'https://twitter.com/@spadeshub'} className="hover:underline underline-offset-2 decoration-amber-600">Dev support</Link></li>
              <li><Link href={'/spades/terms'} className="hover:underline underline-offset-2 decoration-amber-600">T & C</Link></li>
              <li><Link href={'/spades/policy'} className="hover:underline underline-offset-2 decoration-amber-600">Privacy</Link></li>
              <li><Link href={'#'}>2023 © spadeshub</Link></li>
            </ul>
          </div>
        </footer>
    )
}