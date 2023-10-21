'use client'
import { useIsVisible } from "@/app/components/useIsVisible";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ContactUs } from "./loginQuest";

export default function  Cta() {

    return (
        <>
            <div className="flex justify-center items-center mb-10 w-full p-4">
                <div className="bg-[url('/img/cta.png')] bg-cover bg-center rounded-lg p-1 text-[wheat] flex gap-8 flex-col items-center h-[40vh] justify-evenly w-full lg:w-[fit-content] shadow-2xl">
                    <h4 className="w-[70%] md:w-full lg:w-full text-sm md:text-xl text-center lg:text-2xl lg:p-4">Book our service anywhere in the world!</h4>
                    <Link href="https://twitter.com/@spadeshub" className="px-3 py-1 border-y hover:rounded-lg duration-500">Book Now</Link>
                </div>
            </div>
        </>
    )
}

export function RowCta() {
    const ref = useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <section id="cta" ref={ref} className={`my-10 px-2 flex flex-col gap-3 items-center justify-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-[url('/img/cta.png')] h-56 w-72 sm:w-96 bg-center bg-cover shadow-md dark:shadow-amber-600 shadow-black rounded-md flex justify-center items-end py-1">
            <article className="flex flex-row gap-5">
              <Link href={'#'}>
              <Image 
              src={'/img/gmail-logo.png'}
              alt="logo"
              width={500}
              height={500}
              className="rounded-full border border-amber-600 animate-bounce w-9 h-9"
              />
              </Link>
              <Link href={'#'}>
              <Image 
              src={'/img/SPADES3.png'}
              alt="logo"
              width={500}
              height={500}
              className="rounded-full border border-amber-600 animate-bounce w-9 h-9"
              />
              </Link>
              <Link href={'#'}>
              <Image 
              src={'/img/x-logo.jfif'}
              alt="logo"
              width={500}
              height={500}
              className="rounded-full border border-amber-600 animate-bounce w-9 h-9"
              />
              </Link>
            </article>
          </div>
          <ContactUs />
        </section>
    )
}