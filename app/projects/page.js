'use client'
import React from "react";
import { ProjectPortfolio } from "./utils/portfolio";
import Link from "next/link";
import { BiLinkAlt } from "react-icons/bi";

export default function Page() {
    const [ projectImages,setProjectImages ] = React.useState([
        { id: 1, image1: '/Portfolio/amber.png', image2: '/Portfolio/amber.png', image3: '/Portfolio/amber.png', image4: '/spades/spades2.png', projectLink: 'https://raconsult.vercel.app', projectName: 'Royal Acumen Consult', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 2, image1: '/linted/1.png', image2: '/linted/2.png', image3: '/linted/3.png', image4: '/linted/4.png', projectLink: 'https://linted.vercel.app', projectName: 'Linted E-commerce', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 3, image1: '/spades/spades.png', image2: '/spades/spades1.png', image3: '/spades/spades3.png', image4: '/spades/spades2.png', projectLink: 'https://spadeshub.vercel.app', projectName: 'Spades v1', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 4, image1: '/hilker/hilker.png', image2: '/hilker/hilker1.png', image3: '/hilker/hilker3.png', image4: '/hilker/hilker4.png', projectLink: '/contact', projectName: 'Hilker Spa', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 5, image1: '/landing/landing1.png', image2: '/landing/landing1.png', image3: '/landing/landing2.png', image4: '/landing/landing2.png', projectLink: '/contact', projectName: 'Spades Landing', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
        
        { id: 6, image1: '/isam/isam.png', image2: '/isam/isam.png', image3: '/isam/isam2.png', image4: '/isam/isam3.png', projectLink: '/contact', projectName: 'ISam store', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
    ]);

    return (
        <section className="flex flex-col gap-5 justify-center items-center my-10">
            <h3 className="px-2 text-center"><Link href={'/web-development/application'} className="underline decoration-amber-600 underline-offset-1 flex items-center gap-1">Get your desired website in a few clicks <BiLinkAlt /></Link></h3>
            <div id="portfolio" className="flex flex-col gap-24">
                {
                    projectImages.map((items) => (
                        <ProjectPortfolio
                        key={items.id} 
                        image1={items.image1}
                        image2={items.image2}
                        image3={items.image3}
                        image4={items.image4}
                        projectLink={items.projectLink}
                        projectName={items.projectName}
                        overview={items.overview}
                        />
                    ))
                }
            </div>
        </section>
    )
}