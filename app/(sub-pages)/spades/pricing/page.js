import { PricingCard } from "@/app/components/client/ReusableComponents";
import Image from "next/image";

export default function Page() {

    return (
        <section className="container mx-auto mt-8">
            <h1 className="text-center font-bold text-lg my-2 underline underline-offset-8 flex items-center justify-center">Web development pricing scheme</h1>
            <p className="text-center text-sm flex items-center justify-center">Pricing is subject to clients product descrioption</p>
            {/* <div className="w-auto h-auto">
                <Image 
                src={'/img/invoice1.png'}
                alt="Pricing Image"
                width={920}
                height={1020}
                className="h-auto w-full px-10 my-10"
                />
            </div> */}

            {/* <div className="w-auto h-auto">
                <Image 
                src={'/img/invoice2.png'}
                alt="Pricing Image"
                width={920}
                height={1020}
                className="h-auto w-full px-10 my-10"
                />
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-8">
                <PricingCard title={"Standard/Fixed Pricing"} discount={"15% off"}>
                    <li>Web asset Development (from one of our available solutions/modules)</li>
                    <li>Custom domain (e.g. example.com)</li>
                    <li>Pro Email (e.g. example@example.com)</li>
                    <li>Dev Support</li>
                    <li>Web Hosting (1 year free) see limits</li>
                    <li>Performance Improvements</li>
                    <li>Bug Fixes</li>
                    <li>Search Engine Indexing</li>
                    <li>SEO audit</li>
                    <li>99.9% uptime guarantee</li>
                </PricingCard>
                <PricingCard title={"Custom"} discount={"10% off"} >
                    <li>Custom Web asset Development or available asset feature enhancement</li>
                    <li>Custom domain (e.g. example.com)</li>
                    <li>Pro Email (e.g. example@example.com)</li>
                    <li>Dev Support</li>
                    <li>Web Hosting (6 months free) see limits</li>
                    <li>Performance Improvements</li>
                    <li>Bug Fixes</li>
                    <li>Search Engine Indexing</li>
                    <li>SEO audit</li>
                    <li>Web performance audit</li>
                    <li>99.9% uptime guarantee</li>
                </PricingCard>
                <PricingCard title={"Add Ons"} >
                    <li>Web management (security update included) + $120/month</li>
                    <li>Web analytics + 100/month</li>
                    <li>Speed Insights + $75/month</li>
                    <li>Premium SEO (Regular keyword updates) + $100/month </li>
                    <li>Database (Basic) + $125/month</li>
                    <li>Database (Premium) contact us</li>
                    <li>Web Hosting contact us</li>
                    <li>AB testing (Contact us)</li>
                </PricingCard>
            </div>
        </section>
    )
}