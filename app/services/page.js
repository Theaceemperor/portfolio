'use client'
import Link from "next/link";
import { IoMdStats } from "react-icons/io";
import { ServiceRow } from "./utils/serviceRow";
import React from "react";
import { SpadesStats } from "./utils/stats";
import { LoginQuest } from "../projects/utils/loginQuest";


export default function Page() {
    const [ services,setServices ] = React.useState([
        { id: 1, service: 'Web Development', pageLink: '#', serviceDescription: 'We offer incredible premium web-development services. aproceed to book one of your choice for either commercial or personal use. We build dreams!' },
        { id: 2, service: 'Web Management', pageLink: '#', serviceDescription: 'We offer incredible web-management services, including; asset upgrade and asset maintenance & update.' },
        { id: 3, service: 'Search Engine Optimization(S.E.O)', pageLink: '#', serviceDescription: 'We offer exclusive and inclusive (web-development inclusive) S. E. O services that ensure you rank high in search egines.' },
    ]);
    return (
        <>
            <SpadesStats />

            <p className="text-center"><Link href={'#'}>Purchase our services using our giftcard <i>here!</i></Link></p>

            <section id="services" className="text-center">
                <h2 className="underline underline-offset-8 decoration-amber-600 my-5 font-bold text-2xl">Our services</h2>
                <p className="mb-5">We offer amazing premium over the air services that suite your individual and business needs.
                    <br /> we have provided you a digital solution for your web services.
                </p>
                <div className="px-2 sm:grid sm:grid-cols-3 gap-2 flex flex-col justify-center items-center">
                    {
                        services.map((item) => (
                            <ServiceRow 
                            key={item.id}
                            Service={item.service}
                            pagrLink={item.pageLink}
                            serviceDescription={item.serviceDescription}
                            />
                        ))
                    }
                </div>
            </section>

            <LoginQuest />
        </>
    )
}