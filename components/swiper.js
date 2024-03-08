'use client'

import React from "react";
import Swiper from "swiper";
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { ClientsCard } from "./ReusableComponents";

const clientsData = [
  { name: "Royal ACumen Consult", link: 'https://royalacumenconsult.com' },
  { name: "Tym Cuisine", link: 'https://tymcuisine.shop' },
  { name: "Linted", link: 'https://linted.vercel.app' },
  { name: "Clem Insights", link: 'https://cleminsights.com' },
  { name: "NexVault", link: 'https://nexvault.space' },
  { name: "Spades Blog", link: 'https://spadesblog.vercel.app' },
]

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
                    {clientsData.map((client, index) => (
                      <div key={index} className="swiper-slide">
                        <ClientsCard client={client} />
                      </div>
                    ))}
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