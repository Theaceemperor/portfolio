'use client'

import React from "react";
import Swiper from "swiper";
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { ClientsCard, WorkingSteps } from "./ReusableComponents";

const clientsData = [
  { name: "Royal ACumen Consult", link: 'https://royalacumenconsult.com' },
  { name: "Tym Cuisine", link: 'https://tymcuisine.shop' },
  { name: "Linted", link: 'https://linted.vercel.app' },
  { name: "Clem Insights", link: 'https://cleminsights.com' },
  { name: "NexVault", link: 'https://nexvault.space' },
  { name: "Spades Blog", link: 'https://spadesblog.vercel.app' },
];

const workingStepsData = [
  { id: 1, title: "Tell us your business", description: "Let us know your business, so we can tailor functions specific to your business needs." },
  { id: 2, title: "Sign Up", description: `Sign up for a "Spades Dev" account to monitor/track your development as well as be eligible for dev support.` },
  { id: 3, title: "Your basic structure", description: "Have your basic program/software structure oulined within 72 hours." },
  { id: 4, title: "Begin Your Journey", description: 'Begin your lightning fast software development journey with spades just after one week of contact.' },
  { id: 5, title: "Popcorn Supervisor", description: "Lay back with your daily activities while we carve your digital red carpet. Monitor your development in real time from your dev dashboard. Ask questions, make queries, request changes and fine tune your digital asset without worrying about solving technical problems." },
  { id: 6, title: "Dev Support", description: "Our ever improving Dev support is available to our client's to point out technical issues, which we solve with lightning speed!" },
];

export function StepSwiper() {
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
      <section className="w-64 sm:w-80">
        {/* <!-- Slider main container --> */}
        <div className="container"> 
          <div className="swiper">
            <div className="swiper-wrapper">
              {workingStepsData.map((data) => (
                <div key={data.id} className="swiper-slide">
                  <WorkingSteps data={data} />
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