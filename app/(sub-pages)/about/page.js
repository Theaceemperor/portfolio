'use client'

import Link from "next/link";
import React from "react";
import { LoginQuest, SectionHeader, ServiceCard, SpadesApart, SpadesStats, TeamMemberCard, TechStack, VisitHomePage } from "@/components/ReusableComponents";
import { Skeleton } from "@mui/material";
import { StepSwiper } from "@/components/swiper";


const servicesFeaturesData = [
    { title: 'Website Development & Design', description: "Spades offers a unique and customized web experience to each client's needs. We model our designs to the caliber the large organization gets." },
    { title: 'Website Management & Maintenance', description: 'We offer incredible web-management services, including; asset upgrade, asset maintenance and update.' },
    { title: 'Website Rennovation & Upgrade', description: 'Rennovate and upgade your already available we asset with our unrivalled technique.' },
    { title: 'Developing Ecommerce for Businesses', description: 'We develop and deploy standard ecommerce websites for small businesses and institutions.' },
    { title: 'Search Engine Optimization (SEO)', description: 'We offer exclusive and inclusive (web-development inclusive) S. E. O services that ensure you rank high in search egines.' },
    { title: 'High Quality Brand Logo Design', description: 'We deliver high quality brand logo designs to our clients, either you have an idea or not.' },
]

const teamMembers = [
    { imageUrl: '/img/1.jpg', name: 'Excellent .O. Omoobajesu', position: 'C. E. O' },
    { imageUrl: '/img/1.jpg', name: 'Andrew Wisdom', position: 'Sales Manager' },
    { imageUrl: '/img/1.jpg', name: 'Nathan Gates', position: 'Product & Graphic Designer' },
]

const spadesApartData = [
    { title: "Flexible developments", description: "We support custom developments, use of templates, as well as use of our already built modules." },
    { title: "Long-term partnerships", description: "We support our customers as long as they need us. 60% of our engagements are over 12 months." },
    { title: "Fast build times", description: "Our build/development timeframe is unrivalled. Delivering excepotionally functional unique web applications in the shortest possible time. Say goodbye to long build times, wheather it's a minor update or development." },
    { title: "Speed, Security & Reliability", description: "Using our technology stack, boasting reliability, security, speeed and performance, we deliver asset level reliable high speed softwares that drive on the smoothest tracks. We build dreams, and secure your insecurities via coding." },
];

export default function Page() {
    
    return (
        <main>
            <SpadesStats />

            <p className="text-center"><Link href={'/gift-purchase'} className="hover:text-amber-600">Purchase spades gift cards <i>here!</i></Link></p>

            <div id="about" className="container mx-auto mt-8">
                <div className="mb-8 px-2">
                    <SectionHeader headerLink={'#about'} headerText={'About Us'} />
                    <p>Discover our mission, vision, and the people behind our initiatives.</p>
                </div>

                {/* mission and vission section */}
                <section id="our-mission" className="mb-8 px-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#our-mission'} className={"flex items-center hover:text-amber-600"}>Our Mission</Link></h3>
                    <p>Our mission is to provide easily accessible fast, reliable, and streamlined web services to small businesses and institutions as fast as possible. Using our system, we will offer various types of web solutions that will be tailored to serve the ever changing needs of our clients.</p>
                </section>
                <section id="our-vision" className="mb-8 px-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#our-vision'} className={"flex items-center hover:text-amber-600"}>Our Vision</Link></h3>
                    <p>Speed and quality are our coner stones. we look to offer quality web services to small businesses and institutions looking to accelerate their online presence at affordable prices.</p>
                    <p>We look to build and tailor our software solutions to small businesses and Institutions, as well as help our clients update and improve their existing web services. We have established a scalable system to streamline our services so as to offer high-end services.</p>
                </section>

                {/* Services Section */}
                <section id="services" className="mb-8 px-2">
                    <SectionHeader headerLink={'#services'} headerText={'Our Services'} />

                    {/*  Services/Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {servicesFeaturesData.map((item, index) => (
                            <ServiceCard key={index} item={item} />
                        ))}
                    </div>
                </section>
                
                {/* Working steps section */}
                <section id="working-steps" className="mb-8 px-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center"><Link href={'#working-steps'} className={"hover:text-amber-600"}>How it works</Link></h3>
                    <div className="flex justify-center items-center">
                        <StepSwiper />
                    </div>
                </section>

                {/* Tech stack section */}
                <section id="tech-stack" className="mb-8 bg-wheat py-8 px-4 text-black">
                    <h3 className="text-xl sm:text-2xl font-bold"><Link href={'#tech-stack'} className={"flex items-center hover:text-amber-600"}>Tech Stack</Link></h3>
                    <h4 className="mb-4">What we build with.</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                        <TechStack tech={"Node Js"} />
                        <TechStack tech={"React"} />
                        <TechStack tech={"Next Js"} />
                        <TechStack tech={"TailwindCSS"} />
                        <TechStack tech={"Firebase"} />
                        <TechStack tech={"JavaScript"} />
                        <TechStack tech={"Vercel"} />
                        <TechStack tech={"Styled Components"} />
                    </div>
                </section>

                {/* What sets us apart */}
                <section id="spades" className="mb-8 px-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#spades'} className={"flex items-center hover:text-amber-600"}>What sets Spades apart</Link></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {
                            spadesApartData.map((data, index) => (
                                <SpadesApart key={index} data={data} />
                            ))
                        }
                    </div>
                </section>
            </div>

            <blockquote className="flex flex-col space-y-2 items-center justify-center mt-4 px-2">
                <LoginQuest />
                <VisitHomePage />
            </blockquote>
        </main>
    )
}