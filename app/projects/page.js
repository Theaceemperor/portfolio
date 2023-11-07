'use client'
import React from "react";
import { ProjectPortfolio } from "./utils/portfolio";
import Link from "next/link";
import { BiLink, BiLinkAlt } from "react-icons/bi";
import MySwiper from "../components/swiper";

export default function Page() {
    const [ projectImages,setProjectImages ] = React.useState([
        { id: 'raconsult', projectDesc1: <span>
            <b className="underline">Overview: </b>Revolutionize your consultation services with our React-based module. Our cutting-edge technology creates a seamless user experience and streamlined workflow for your business.
            <br />
            This React-based module can provide several benefits for consultation services, including but not limited to:
            <ul>
                <li>1. Increased efficiency and productivity through streamlined workflows and automation</li>
                <li>2. Enhanced user experience and interactivity with fast-loading, responsive, and dynamic interfaces</li>
                <li>3. Scalability and flexibility to accommodate changing business needs</li>
                <li>4. Improved performance and speed, resulting in faster load times and smoother user experience</li>
                <li>5. Seamless integration with other technologies and platforms, providing a comprehensive solution for your business.</li>
                <li>6. High search engine ranking</li>
            </ul>
            <ul className="flex flex-col my-2 text-center">
                <b>Clients using this module:</b>
                <li className="flex items-center gap-1 justify-center">1. <Link href={'royalacumenconsultation.com'} className="flex items-center gap-1 hover:text-amber-600 hover:underline">Royal acumen consult <BiLink /></Link></li>
            </ul>
        </span>, productDesc2: <span>
        This React-based module can offer business and individuals alike flexibility to consultation services in several ways, including:
        <br />
        1. <b className="underline">Customization:</b> React allows for easy customization and reusability of components, enabling businesses to readily adapt to changing demands and requirements.
        <br />
        2. <b className="underline">Scalability:</b> This module with the aid of React allows for easy scaling up or down of the application as per the business needs.
        <br />
        3. <b className="underline">Faster deployment:</b> React reduces the time to market for businesses by offering faster development and deployment cycles. 
        <br />
        4. <b className="underline">Cross-platform compatibility:</b> This React-based module can work on any device and can be deployed on multiple platforms, providing flexibility across different markets.
        <br />
        5. <b className="underline">Integration with other technologies:</b> React can easily integrate with other technologies, providing a comprehensive solution for consultation services that may require different tools. In summary, this React-based consultation business module offers your business the opportunity to be more adaptable, agile, and responsive in their consultation services.
        <br />
        <b className="underline">Pricing: </b>This module is a <b>one-time investment</b> of <b>$438</b> which includes a <b>custom domain name(yourbusiness.com)</b> and a <b>pro email(custom@yourbusiness.com)</b>.
        </span>, image1: '/portfolio/raconsult/raconsult2.PNG', image2: '/portfolio/raconsult/raconsult.PNG', projectLink: 'https://royalacumenconsult.com', projectName: 'Consultation business module', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'tymcuisine', image1: '/portfolio/tymcuisine/2.PNG', image2: '/portfolio/tymcuisine/3.PNG', projectDesc1: <span>
            Experience delectable dishes with our React-based cuisine website module. Our cutting-edge technology offers a seamless and interactive user experience that elevates your culinary journey.
            <br />
            Our React-based cuisine website module can provide several features that make it seamless and interactive, including but not limited to:
            <br />
            1. Fast loading times and high performance for smooth and uninterrupted browsing.
            <br />
            2. Interactive and engaging user interface with responsive design and customizable components.
            <br />
            3. Dynamic and real-time updates for menu items, pricing, and deals that keep users informed and engaged.
            <br />
            4. Easy navigation and search functionality that help users find what they are looking for quickly and efficiently.
            <br />
            5. Integration with other platforms like social media, online ordering, and reservation systems that enhance the user experience.
            <br />
            6. Personalization options like favorite dish lists, reviews, and ratings that make the module feel tailored to each user’s preferences. 
            <br />
            In summary, the React-based cuisine website module provides an immersive and user-friendly experience that brings the best of culinary delights to the user's doorstep.
        </span>, productDesc2: <b className="text-center text-sm p-2 flex justify-center items-center">This website is still under development!</b>, projectLink: 'https://tymcuisine.vercel.app', projectName: 'Cuisine website module', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
        
        { id: 'linted', image1: '/portfolio/linted/4.PNG', image2: '/portfolio/linted/2.PNG', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: 'https://linted.vercel.app', projectName: 'Linted E-commerce', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'spadesv1', image1: '/portfolio/spades/spades2.PNG', image2: '/portfolio/spades/spades1.PNG', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: 'https://spadeshub.vercel.app', projectName: 'Spades v1', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'hilker-spa', image1: '/portfolio/hilker/hilker1.PNG', image2: '/portfolio/hilker/hilker.PNG', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: '/contact', projectName: 'Hilker Spa', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },

        { id: 'simple-landing-page', image1: '/portfolio/landing/landing2.PNG', image2: '/portfolio/landing/landing1.PNG', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: '/contact', projectName: 'Spades Landing', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
        
        { id: 'isam', image1: '/portfolio/isam/isam3.PNG', image2: '/portfolio/isam/isam.PNG', projectDesc1: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", productDesc2: "This will be a block of text to describe the product, check in later for the product's description; or visit the product page!", projectLink: '/contact', projectName: 'ISam store', overview: 'This project was built with React using Nextjs as a framework for development. It is fast and optimized for S.E.O' },
    ]);

    return (
        <section className="flex flex-col gap-5 justify-center items-center my-10">
            <div className="flex flex-col gap-2 items-center justify-center mb-5">
                <h3><Link href={'#our-clients'} className="flex items-center justify-center underline underline-offset-8 hover:text-amber-600">Our Clients <BiLink /></Link></h3>
                <MySwiper />
            </div>
            <p className="px-2 text-md text-center"><Link href={'/web-development/application'} className="underline decoration-amber-600 underline-offset-1 flex items-center gap-1">Get your desired website in a few clicks <BiLinkAlt /></Link></p>
            <h3><Link href={'#our-projects'} className="flex items-center justify-center hover:text-amber-600 text-xl underline underline-offset-8">Our Projects <BiLink /></Link></h3>
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