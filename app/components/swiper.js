'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLink } from "react-icons/bi";
import Swiper from "swiper";
import { Pagination,Navigation,Autoplay } from 'swiper/modules';

export default function MySwiper() {
  React.useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
      },
      loop: true,
      effect: 'cube',

  
      pagination: {
          el: "swiper-pagination",
          clickable: true,
      },
  
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  
      scrollbar: {
          el: 'swiper-srollbar',
      }
    });
  })

    return (
        <section className="w-60">
            {/* <!-- Slider main container --> */}
            <div className="container bg-black rounded-md text-amber-600"> 
              <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <span className="p-4 flex items-center justify-center">
                        <h3><Link href={'https://royalacumenconsult.com'} className="flex items-center hover:underline hover:underline-offset-8 decoration-amber-600 gap-2">Royal Acumen Consult <BiLink /></Link></h3>
                      </span>
                    </div>
                    <div className="swiper-slide">
                      <span className="p-4 flex items-center justify-center">
                        <h3><Link href={'https://tymcuisine.vercel.app'} className="flex items-center hover:underline hover:underline-offset-8 decoration-amber-600 gap-2">Tym Cuisine <BiLink /></Link></h3>
                      </span>
                    </div>
                    <div className="swiper-slide">
                      <span className="p-4 flex items-center justify-center">
                      <h3><Link href={'https://linted.vercel.app'} className="flex items-center hover:underline hover:underline-offset-8 decoration-amber-600 gap-2">Linted<BiLink /></Link></h3>
                      </span>
                    </div>
                    <div className="swiper-slide">
                      <span className="p-4 flex items-center justify-center">
                        <h3><Link href={'https://cleminsights.vercel.app'} className="flex items-center hover:underline hover:underline-offset-8 decoration-amber-600 gap-2">Clem Insights<BiLink /></Link></h3>
                      </span>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
              </div>
            </div>    

            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />

            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </section>
    )
}