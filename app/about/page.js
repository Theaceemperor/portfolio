'use client'
import Link from "next/link";
import React from "react";
import { CgLink } from "react-icons/cg";
import { redirect } from "next/navigation";
import { FAQ, LoginQuest, SectionHeader, ServiceRow, SpadesStats, VisitHomePage, WriteReview } from "../components/client/ReusableComponents";
import Image from "next/image";
import { ReviewSwiper } from "../components/swiper";


const faqData = [
    { question: 'What is the mission of your organization?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
    { question: 'How can I get involved or contribute?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
    { question: 'Who are the key members ofyour team?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
    { question: 'What projects has your organization been involved in?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
    { question: 'How can i contact your organization?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
]

const servicesFeaturesData = [
    { title: 'Website Development & Design', description: "Spades offers a unique and customized web experience to each client's needs. We model our designs to the caliber the large organization gets." },
    { title: 'Website Management & Maintenance', description: 'Description of service 2' },
    { title: 'Website Rennovation & Upgrade', description: 'Description of service 3' },
    { title: 'Developing Ecommerce for Businesses', description: 'Description of service 3' },
    { title: 'Search Engine Optimization (SEO)', description: 'Description of service 3' },
    { title: 'High Quality Graphics Design', description: 'Description of service 3' },
]

export default function Page() {
    const [ services,setServices ] = React.useState([
        { id: 'web-development', service: 'Web Development', serviceDescription: 'We offer incredible premium web-development services, easily proceed to develop a website of your choice for either commercial or personal use via our dev service. We build dreams!' },
        { id: 'web-management', service: 'Web Management', serviceDescription: 'We offer incredible web-management services, including; asset upgrade, asset maintenance and update.' },
        { id: 'search-engine-optimization', service: 'Search Engine Optimization(S.E.O)', serviceDescription: 'We offer exclusive and inclusive (web-development inclusive) S. E. O services that ensure you rank high in search egines.' },
        { id: 'forex-trading', service: 'FX(Forex) trading and account management', serviceDescription: "Maximize profits with our expert Forex trading and investment management services." },
    ]);
    return (
        <main>
            <SpadesStats />

            <p className="text-center"><Link href={'/gift-purchase'} className="hover:text-amber-600">Purchase our services using our giftcard <i>here!</i></Link></p>

            <div id="about" className="container mx-auto py-16 px-2">
                <div className="mb-8">
                    <SectionHeader headerLink={'/about#about'} headerText={'About Us'} />
                    <p className="text-gray-600">Discover our mission, vision, and the people behind our initiatives.</p>
                </div>

                {/* mission and vission section */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#our-mission'} className="flex items-center hover:text-ocean-blue">Our Mission</Link></h3>
                    <p className="text-gray-600">Our mission is to provide accessibly; fast, reliable, and streamlined web services to small businesses and institutions as fast as possible. Using our system, we will offer various types of web solutions that will be tailored to serve the changing needs of our clients.</p>
                </section>
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#our-vision'} className="flex items-center hover:text-ocean-blue">Our Vision</Link></h3>
                    <p className="text-gray-600">Speed and quality are our coner stones. we look to offer quality web services to small businesses and institutions looking to accelerate their online presence at affordable prices.</p>
                    <p className="text-gray-600">We look to build and tailor our software solutions to small businesses and Institutions, as well as help our clients update and improve their existing web services. We have established a scalable system to streamline our services so as to offer high-end services.</p>
                </section>

                {/* Team section */}
                <section id="our-team">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#our-team'} className="flex items-center hover:text-ocean-blue">Our Team</Link></h3>
                    {/* Include team member profiles with images and descriptions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                            <Image src={'/img/1.jpg'} alt="Team member 1" width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h4 className="text-amber-600 text-lg font-bold mb-2">Excellent .O. Omoobajesu</h4>
                            <p className="text-gray-600">Co-Founder</p>
                        </div>
                        
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                            <Image src={'/img/1.jpg'} alt="Team member 2" width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h4 className="text-amber-600 text-lg font-bold mb-2">Nathan</h4>
                            <p className="text-gray-600">Graphic Designer</p>
                        </div>
                        
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                            <Image src={'/img/1.jpg'} alt="Team member 3" width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h4 className="text-amber-600 text-lg font-bold mb-2">Wisdom Andrew</h4>
                            <p className="text-gray-600">Sales Manager</p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="my-16">
                    <SectionHeader headerLink={'#services'} headerText={'Our Services'} />

                    {/*  Services/Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesFeaturesData.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                                <h4 className="text-lg font-bold mb-2 text-amber-600">{item.title}</h4>

                                {/* Service/Feature Description */}
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mt-16">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#faq'} className="flex items-center capitalize hover:text-ocean-blue">Frequently asked questions</Link></h3>

                    {/* FAQ Questions & Answers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* FAQ Question 1 */}
                        {faqData.map((faqItem, index) => 
                            <FAQ key={index} question={faqItem.question} answer={faqItem.answer} />
                        )}
                    </div>

                </section>
            </div>

            {/* <section id="services" className="text-center">
                <h2 className="underline underline-offset-8 decoration-amber-600 my-5 font-bold text-2xl"><Link href={"/services#services"} className="flex items-center justify-center">Our services <CgLink /></Link></h2>
                <p className="mb-5">We offer amazing premium over the air services that suite your individual and business needs.
                    <br /> we have provided you a digital solution for your web services.
                </p>
                <div className="px-2 sm:grid sm:grid-cols-4 gap-2 flex flex-col justify-center items-center">
                    {
                        services.map((item) => (
                            <ServiceRow 
                            key={item.id}
                            Service={item.service}
                            serviceDescription={item.serviceDescription}
                            />
                        ))
                    }
                </div>
            </section> */}

            <LoginQuest />

            <blockquote className="flex items-center justify-center">
                <VisitHomePage />
            </blockquote>

            <div className="flex items-center justify-center">
                <ReviewSwiper />
            </div>

            <WriteReview />
        </main>
    )
}