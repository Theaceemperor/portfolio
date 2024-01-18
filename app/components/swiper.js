'use client'
import { db } from "@/settings/firebase.settings";
import { Rating } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { BiLink } from "react-icons/bi";
import Swiper from "swiper";
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { timeAgo } from "./time-ago";
import { GiSpades } from "react-icons/gi";
import { useIsVisible } from "./useIsVisible";

export function ReviewSwiper() {
  const ref = React.useRef();
  const isVisible1 = useIsVisible(ref);
  const [reviews,setReviews] = React.useState([]);

  const handleGetReviews = async () => {
      const docRes = await getDocs(collection(db,'spades-reviews'));
      setReviews(docRes.docs.map(doc => {
          return {
              id:doc.id,
              data:{
                  ...doc.data()
              }
          }
      }))
  }
  handleGetReviews();

  React.useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
          delay:5000,
          disableOnInteraction: true,
      },
      loop: false,
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
        <section ref={ref} id="reviews" className={`w-[90%] sm:w-auto sm:max-w-lg transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            {/* <!-- Slider main container --> */}
            <div className="container bg-black rounded-md"> 
              <div className="swiper">
                  <div className="swiper-wrapper">
                    {reviews.map((item) => (
                      <div key={item.id} className="swiper-slide">
                        <Suspense fallback={
                          <div className="flex items-center text-amber-600 animate-pulse">
                            Sp<GiSpades/>des
                          </div>
                        }>
                          <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color overflow-hidden">
                              <h4 className="text-lg font-bold mb-2 text-amber-600">{item.data.name}</h4>

                              {/* Service/Feature Description */}
                              <p className="text-sm text-gray-600">{item.data.review}</p>
                              <small className="text-gray-600">{timeAgo(item.data.sentAt)}</small>
                              <div>
                                <Rating name="simple-controlled" value={item.data.rating} />
                              </div>
                          </div>
                        </Suspense>
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
                    <div className="swiper-slide">
                      <span className="p-4 flex items-center justify-center">
                        <h3><Link href={'https://nexvault.vercel.app'} className="flex items-center hover:underline hover:underline-offset-8 decoration-amber-600 gap-2">NexVault<BiLink /></Link></h3>
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