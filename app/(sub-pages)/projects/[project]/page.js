'use client'
import { ContactUs, SectionHeader, SignUp } from "@/app/components/client/ReusableComponents";
import FetchDoc from "@/app/components/fetchDoc";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
    
export const projectsData = [
    { id: 1, title: 'Catalyst Canvas', description: "Catalyst Canvas is a dynamic and engaging website module designed to showcase the impactful work of a charitable organization or non-profit entity. Seamlessly blending modern design with user-friendly functionality, Catalyst Canvas aims to provide visitors with a rich and interactive experience.", imageUrl: '/portfolio/catalyst_canvas.PNG', link: 'https://catalystcanvas.vercel.app', detailedDesc: 
    <FetchDoc doc={'/docs/catalystcanvas.txt'} />, price: 1320, category: 'NGO' },

    { id: 2, title: 'Clarity Pulse', description: '', imageUrl: '/portfolio/claritypulse.png', link: 'https://claritypulse.vercel.app', detailedDesc: '', price: '', category: 'Blog' },

    { id: 3, title: 'DataVista Analytics', description: "The Data Analytics Website Module provides a powerful and intuitive platform for data analysts and their clients, offering a myriad of benefits that enhance collaboration, project management, and data visualization.", imageUrl: '/portfolio/analytics.PNG', link: 'https://datavistaanalytics.vercel.app', detailedDesc: <FetchDoc doc={'/docs/datavista.txt'} />, price: '50,000 min budget. Please contact us.', category: 'Data analytics' },

    { id: 4, title: 'EpicNest Express', description: '', imageUrl: '/portfolio/epicnestexpress.png', link: 'https://epicnestexpress.vercel.app', detailedDesc: '', price: '', category: 'Ecommerce' },

    { id: 5, title: 'FlexiScape', description: 'A very cool and informative landing page tailored for any purpose, from; individuals, to small business as well as coporates willing to showcase specific products or services.', imageUrl: '/portfolio/landing.PNG', link: 'https://spadeslanding.vercel.app', detailedDesc: <FetchDoc doc={'/docs/flexiscape.txt'} />, price: 870, category: 'Landing page' },

    { id: 6, title: 'HarmonyHub Consult', description: "Developed by the innovation software company, Spadeshub, HarmonyHub Consult is a dynamic platform crafted for seamless interactions between clients and experts. The objective is to simplify the consultation process, offering a mordern and efficient solution.", imageUrl: '/portfolio/consult.PNG', link: 'https://spadesconsult.vercel.app', detailedDesc: <FetchDoc doc={'/docs/consult.txt'} />,  price: 'contact us', category: 'Consultation' },

    { id: 7, title: 'Linted Ecommerce', description: "Welcome to MarketMingle, your go-to destination for a unique and delightful shopping experience. This small e-commerce store is designed to bring you exclusive features, easy navigation, and a curated selection of products that make every purchase special.", imageUrl: '/portfolio/linted.PNG', link: 'https://linted.vercel.app', price: ' contact us', category: 'Ecommerce' },

    { id: 8, title: 'PersonalHub', description: `PersonalHub, an individual endeavor powered by Spadeshub, is a distinctive personal website that offers a unique blend of exclusive content, confidentials, insights, and features a dedicated section for careers and certifications. The primary objective is to create a personalized and engaging space for users to subscribe to premium content, access a decisive "About" column, explore careers and certifications, and participate in a vibrant community through a chat interface.`, imageUrl: '/portfolio/personal.PNG', link: 'https://spadespersonal.vercel.app', detailedDesc: <FetchDoc doc={'/docs/personalhub.txt'} />, category: 'Personal' },
    
    { id: 9, title: 'Smart Living Estate', description: '', imageUrl: '/portfolio/smartliving.PNG', link: 'https://smartlivingestate.vercel.app', detailedDesc: '', price: '', category: 'Real Estate' },

    { id: 10, title: 'Sprectracraft', description: '', imageUrl: '/portfolio/spectracraft.png', link: 'https://spectracraft.vercel.app', detailedDesc: '', price: '', category: 'Portfolio' },

    { id: 11, title: 'TastyBites', description: "Embark on a culinary journey with TastyBites, a tantalizing cuisine website model meticulously crafted for discerning food enthusiasts. Immerse yourself in an exclusive list of menus, where each dish is a symphony of flavors curated to elevate your dining experience. The primary objective of TastyBites is to offer a feast for the senses, blending exquisite tastes with a visually delightful presentation.", imageUrl: '/portfolio/cuisine.PNG', link: 'https://thefoodalleyways.vercel.app', detailedDesc: <FetchDoc doc={'/docs/tastybite.txt'} />, price: 1550, category: 'Cuisine' },

    { id: 12, title: 'ZenFit Spa', description: "ZenFit Spa, a visionary project by Spadeshub, is a comprehensive spa and fitness website designed to elevate spa and fitness brands, setting them on the path for active online success. The platform embodies the essence of wellness and rejuvenation while fostering a dynamic online presence.", imageUrl: '/portfolio/zenfit.PNG', link: 'https://zenfitspa.vercel.app', detailedDesc: <FetchDoc doc={'/docs/zenfitspa.txt'} />, price: '1480 - $2000', category: 'Fitness' },
]

export default function Page() {
    const router = useRouter();

    //Access the url search params
    const searchParams = useSearchParams();

    // extract the projectId from the url
    const search = searchParams.getAll('project');

    // Find the project with the matyching ID
    const project = projectsData.find((p) => String(p.id) === String(search));

    //check if the project is found 
    if (!project) {
        return <div>Project not found!{router.push('/projects')}</div>
    }

    const searchId = parseInt(search);

    const handlePrevious = () => {
        if (searchId > 1) {
            router.replace(`/projects/[project]?project=${searchId - 1}`);
        } else if (searchId <= 1) {
            router.replace('/projects')
        }
    }

    const handleNext = () => {
        if (projectsData.find((p) => String(p.id) <= String(search))) {
            router.push(`/projects/[project]?project=${searchId + 1}`);
        } else {
            null
        }
    }

    return (
        <main>
            <h2 className="text-3xl font-bold text-center mt-8">{project.title}</h2>
            <nav className="flex items-center justify-between px-2 mt-8">
                <button className="bg-amber-600 text-black py-2 px-4 rounded-md hover:bg-transparent hover:text-amber-600 focus:outline-none" onClick={handlePrevious}>Previous</button>
                <button className="bg-amber-600 text-black py-2 px-4 rounded-md hover:bg-transparent hover:text-amber-600 focus:outline-none" onClick={handleNext}>Next</button>
            </nav>

            <section className="container px-2 mx-auto mt-8">
                <div className="max-w-2xl mx-auto">
                    {/* Project Image (if available) */}
                    {project.imageUrl && project.imageUrl.length > 0 && (
                        <Image src={project.imageUrl} alt={`${project.title} Image`} width={500} height={500} quality={100} priority className="w-full h-auto object-cover mb-6 rounded-md" />
                    )}

                    {/* Project Title */}
                    <SectionHeader headerLink={project.link} headerText={project.title} />
                    <div className="mb-4">
                        <p className="text-base md:text-lg mb-2 text-gray-800">Value - ${project.price} License fee included</p>
                        <ContactUs />
                    </div>

                    {/* Project Description */}
                    <div className="text-lg text-gray-700 mb-4">{project.description}</div>

                    {/* Additional Project Details can be added here */}
                    <div className="text-lg text-gray-700 mb-8">{project.detailedDesc}</div>

                    <Link href={project.link} className="flex items-center justify-center px-4 py-2 rounded-full hover:bg-amber-600 hover:text-black text-amber-600 transition duration-300 font-semibold" target="_blank" rel="noopener noreferrer">View live here</Link>

                    <div className="flex items-center justify-around">
                        <ContactUs />
                        <SignUp />
                    </div>
                </div>
            </section>
        </main>
    )
}