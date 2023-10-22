'use client'
import { useIsVisible } from "@/app/components/useIsVisible";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ContactUs } from "./loginQuest";
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";

export function RowCta() {
    const ref = useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <section id="cta" ref={ref} className={`my-10 px-2 flex flex-col gap-3 items-center justify-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-[url('/img/cta.png')] h-56 w-72 sm:w-96 bg-center bg-cover shadow-md dark:shadow-amber-600 shadow-black rounded-md flex justify-center items-end py-1">
            <article className="flex flex-row gap-5">
              <Link href={'mailto:spadesinstitute.empire@gmail.com'}>
              <SiGmail
              className="rounded-full border-2 text-[wheat] font-bold border-amber-600 animate-bounce text-3xl p-1"
              />
              </Link>
              <Link href={'https://wa.me/message/LLABQR53DPNME1'}>
              <Image 
              src={'/img/SPADES3.png'}
              alt="logo"
              width={500}
              height={500}
              className="rounded-full border-2 border-amber-600 animate-bounce w-8 h-8"
              />
              </Link>
              <Link href={'https://x.com/@spadeshub'}>
              <FaXTwitter
              className="rounded-full border-2 text-[wheat] font-bold border-amber-600 animate-bounce text-3xl p-1"
              />
              </Link>
            </article>
          </div>
          <ContactUs />
        </section>
    )
}