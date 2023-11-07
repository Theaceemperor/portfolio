'use client'
import Link from "next/link";
import { ServiceRow } from "./utils/serviceRow";
import React from "react";
import { SpadesStats } from "./utils/stats";
import { LoginQuest, VisitHomePage } from "../projects/utils/loginQuest";
import { CgLink } from "react-icons/cg";
import { redirect } from "next/navigation";

const devRedirect = () => {
    redirect('web-development/application')
};

const managerRedirect = () => {
    redirect('https://wa.me/message/LLABQR53DPNME1')
};

const seoRedirect = () => {
    redirect('https://twitter.com/@spadeshub')
};

const fxRedirect = () => {
    redirect('https://wa.me/message/LLABQR53DPNME1')
};

export default function Page() {
    const [ services,setServices ] = React.useState([
        { id: 'web-development', service: 'Web Development', serviceDescription: 'We offer incredible premium web-development services, easily proceed to develop a website of your choice for either commercial or personal use via our dev service. We build dreams!' },
        { id: 'web-management', service: 'Web Management', serviceDescription: 'We offer incredible web-management services, including; asset upgrade, asset maintenance and update.' },
        { id: 'search-engine-optimization', service: 'Search Engine Optimization(S.E.O)', serviceDescription: 'We offer exclusive and inclusive (web-development inclusive) S. E. O services that ensure you rank high in search egines.' },
        { id: 'forex-trading', service: 'FX(Forex) trading and account management', serviceDescription: "Maximize profits with our expert Forex trading and investment management services." },
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
            </section>

            <LoginQuest />

            <blockquote className="flex items-center justify-center">
                <VisitHomePage />
            </blockquote>
        </>
    )
}