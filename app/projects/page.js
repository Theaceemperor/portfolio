'use client'
import React from "react";
import { ProjectPortfolio } from "./utils/portfolio";
import Link from "next/link";
import { BiLinkAlt } from "react-icons/bi";

export default function Page() {
    const [ projectImages,setProjectImages ] = React.useState([
        { id: 'raconsult', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", image1: '/Portfolio/amber.png', image2: '/spades/spades2.png', projectLink: 'https://raconsult.vercel.app', projectName: 'Royal Acumen Consult', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'linted', image1: '/linted/2.png', image2: '/linted/4.png', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: 'https://linted.vercel.app', projectName: 'Linted E-commerce', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'spadesv1', image1: '/spades/spades1.png', image2: '/spades/spades2.png', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: 'https://spadeshub.vercel.app', projectName: 'Spades v1', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'hilker-spa', image1: '/hilker/hilker1.png', image2: '/hilker/hilker4.png', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: '/contact', projectName: 'Hilker Spa', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'simple-landing-page', image1: '/landing/landing1.png', image2: '/landing/landing2.png', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: '/contact', projectName: 'Spades Landing', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
        
        { id: 'isam', image1: '/isam/isam.png', image2: '/isam/isam3.png', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: '/contact', projectName: 'ISam store', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
    ]);

    return (
        <section className="flex flex-col gap-5 justify-center items-center my-10">
            <h3 className="px-2 text-center"><Link href={'/web-development/application'} className="underline decoration-amber-600 underline-offset-1 flex items-center gap-1">Get your desired website in a few clicks <BiLinkAlt /></Link></h3>
            <div id="portfolio" className="flex flex-col gap-24">
                {
                    projectImages.map((items) => (
                        <ProjectPortfolio
                        key={items.id} 
                        projectId={items.id}
                        image1={items.image1}
                        image2={items.image2}
                        projectLink={items.projectLink}
                        projectName={items.projectName}
                        overview={items.overview}
                        productDesc1={items.projectDesc1}
                        productDesc2={items.productDesc2}
                        />
                    ))
                }
            </div>
        </section>
    )
}