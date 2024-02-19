'use client'
import Link from "next/link";
import React from "react";
import { FAQ, LoginQuest, SectionHeader, ServiceCard, SpadesStats, TeamMemberCard, VisitHomePage } from "@/app/components/client/ReusableComponents";
import { Skeleton } from "@mui/material";


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

export default function Page() {
    
    return (
        <main>
            <SpadesStats />

            <p className="text-center"><Link href={'/gift-purchase'} className="hover:text-amber-600">Purchase spades gift cards <i>here!</i></Link></p>

            <div id="about" className="container mx-auto mt-8 px-2">
                <div className="mb-8">
                    <SectionHeader headerLink={'/about#about'} headerText={'About Us'} />
                    <p className="text-gray-600 dark:text-white/70">Discover our mission, vision, and the people behind our initiatives.</p>
                </div>

                {/* mission and vission section */}
                <section id="our-mission" className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#our-mission'} className={"flex items-center hover:text-amber-600"}>Our Mission</Link></h3>
                    <p className="text-gray-600 dark:text-white/70">Our mission is to provide accessibly; fast, reliable, and streamlined web services to small businesses and institutions as fast as possible. Using our system, we will offer various types of web solutions that will be tailored to serve the changing needs of our clients.</p>
                </section>
                <section id="our-vision" className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#our-vision'} className={"flex items-center hover:text-amber-600"}>Our Vision</Link></h3>
                    <p className="text-gray-600 dark:text-white/70">Speed and quality are our coner stones. we look to offer quality web services to small businesses and institutions looking to accelerate their online presence at affordable prices.</p>
                    <p className="text-gray-600 dark:text-white/70">We look to build and tailor our software solutions to small businesses and Institutions, as well as help our clients update and improve their existing web services. We have established a scalable system to streamline our services so as to offer high-end services.</p>
                </section>

                {/* Team section */}
                <section id="our-team" className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#our-team'} className={"flex items-center hover:text-amber-600"}>Our Team</Link></h3>
                    {/* Include team member profiles with images and descriptions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {teamMembers.map((item, index) => (
                            item
                            ?
                            <TeamMemberCard key={index} item={item} />
                            :
                            <Skeleton variant="rounded" width={240} height={100} />
                        ))}
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="mb-8">
                    <SectionHeader headerLink={'#services'} headerText={'Our Services'} />

                    {/*  Services/Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {servicesFeaturesData.map((item, index) => (
                            <ServiceCard key={index} item={item} />
                        ))}
                    </div>
                </section>
            </div>

            <LoginQuest />

            <blockquote className="flex items-center justify-center mt-4">
                <VisitHomePage />
            </blockquote>
        </main>
    )
}