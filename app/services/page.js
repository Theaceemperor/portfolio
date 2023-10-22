'use client'
import Link from "next/link";
import { ServiceRow } from "./utils/serviceRow";
import React from "react";
import { SpadesStats } from "./utils/stats";
import { LoginQuest, VisitHomePage } from "../projects/utils/loginQuest";
import { CgLink } from "react-icons/cg";


export default function Page() {
    const [ services,setServices ] = React.useState([
        { id: 'web-development', service: 'Web Development', pageLink: '#web-development', serviceDescription: 'We offer incredible premium web-development services. aproceed to book one of your choice for either commercial or personal use. We build dreams!' },
        { id: 'web-management', service: 'Web Management', pageLink: '#web-management', serviceDescription: 'We offer incredible web-management services, including; asset upgrade and asset maintenance & update.' },
        { id: 'search-engine-optimization', service: 'Search Engine Optimization(S.E.O)', pageLink: '#search-engine-optimization', serviceDescription: 'We offer exclusive and inclusive (web-development inclusive) S. E. O services that ensure you rank high in search egines.' },
    ]);
    return (
        <>
            <SpadesStats />

            <p className="text-center"><Link href={'/gift-purchase'}>Purchase our services using our giftcard <i>here!</i></Link></p>

            <section id="services" className="text-center">
                <h2 className="underline underline-offset-8 decoration-amber-600 my-5 font-bold text-2xl"><Link href={"/services#services"} className="flex items-center justify-center">Our services <CgLink /></Link></h2>
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

            <blockquote className="flex items-center justify-center">
                <VisitHomePage />
            </blockquote>
        </>
    )
}