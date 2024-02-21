'use client'
import { ContactUs, GetStarted } from "@/app/components/client/ReusableComponents";
import FetchDoc from "@/app/components/fetchDoc";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { CgLink } from "react-icons/cg";
    
export const projectsData = [
    { title: 'ArtiScape', description: `Artiscape is a dynamic portfolio website tailored to architects, photographers, makeup artists, and other creative professionals. It serves as a digital showcase for their work, allowing them to highlight their talents and attract potential clients. Artiscape offers a visually captivating experience that embodies the essence of each individual's creativity and expertise.`, imageUrl: '/portfolio/artiscape.png', link: 'https://artiscape.vercel.app', detailedDesc: '/docs/artiscape.txt', price: 1210, category: 'Portfolio' },

    { title: 'Catalyst Canvas', description: "Catalyst Canvas is a dynamic and engaging website module designed to showcase the impactful work of a charitable organization or non-profit entity. Seamlessly blending modern design with user-friendly functionality, Catalyst Canvas aims to provide visitors with a rich and interactive experience.", imageUrl: '/portfolio/catalyst_canvas.PNG', link: 'https://catalystcanvas.vercel.app', detailedDesc: '/docs/catalystcanvas.txt', price: 2080, category: 'NGO' },

    { title: 'Clarity Pulse', description: 'Clarity Pulse is a comprehensive blog management system designed to streamline the process of creating, managing, and sharing blog content. With an intuitive user interface and robust feature set, Clarity Pulse empowers users to efficiently manage blog posts, engage with their audience, and analyze performance metrics. From content creation and publishing to user interaction and analytics, Clarity Pulse offers a seamless and customizable solution for bloggers, content creators, and small businesses looking to establish a strong online presence. With regular updates and improvements, Clarity Pulse ensures a secure, reliable, and user-friendly blogging experience for both administrators and visitors alike.', imageUrl: '/portfolio/claritypulse.png', link: 'https://claritypulse.vercel.app', detailedDesc: '/docs/claritypulse.txt', price: 2440, category: 'Blog' },

    { title: 'DataVista Analytics', description: "The Data Analytics Website Module provides a powerful and intuitive platform for data analysts and their clients, offering a myriad of benefits that enhance collaboration, project management, and data visualization.", imageUrl: '/portfolio/analytics.PNG', link: 'https://datavistaanalytics.vercel.app', detailedDesc: '/docs/datavista.txt', price: '50,000 min budget. Please contact us.', category: 'Data analytics' },

    { title: 'EpicNest Express', description: 'EpicNest Express is committed to providing an exceptional online shopping experience, continuously evolving and improving to meet the ever-changing needs and expectations of our users. We aim to redefine your online shopping journey, prioritizing user satisfaction, security, and convenience. Experience a platform designed with you in mind, providing not only a vast selection of products but also a seamless, enjoyable, and secure shopping environment.', imageUrl: '/portfolio/epicnestexpress.png', link: 'https://epicnestexpress.vercel.app', detailedDesc: '/docs/epicnest.txt', price: 4985, category: 'Ecommerce' },

    { title: 'FlexiScape', description: `With FlexiScape, users can unlock the power of flexibility and take their productivity to new heights. Whether you're managing projects, collaborating with team members, or organizing your workflow, FlexiScape empowers you to work smarter, not harder.`, imageUrl: '/portfolio/landing.PNG', link: 'https://spadeslanding.vercel.app', detailedDesc: '/docs/flexiscape.txt', price: 630, category: 'Landing page' },

    { title: 'HarmonyHub Consult', description: "Developed by the innovation software company, Spades, HarmonyHub Consult is a dynamic platform crafted for seamless interactions between clients and experts. The objective is to simplify the consultation process, offering a mordern and efficient solution.", imageUrl: '/portfolio/consult.PNG', link: 'https://spadesconsult.vercel.app', detailedDesc: '/docs/consult.txt',  price: 'contact us', category: 'Consultation' },

    { title: 'Linted Ecommerce', description: "Welcome to Linted, your go-to destination for a unique and delightful shopping experience. This small e-commerce store is designed to bring you exclusive features, easy navigation, and a curated selection of products that make every purchase special.", imageUrl: '/portfolio/linted.PNG', link: 'https://linted.vercel.app', price: 'not-available', category: 'Ecommerce' },

    { title: 'PersonalHub', description: `PersonalHub, an individual endeavor powered by Spadeshub, is a distinctive personal website that offers a unique blend of exclusive content, confidentials, insights, and features a dedicated section for careers and certifications. The primary objective is to create a personalized and engaging space for users to subscribe to premium content, access a decisive "About" column, explore careers and certifications, and participate in a vibrant community through a chat interface.`, imageUrl: '/portfolio/personal.PNG', link: 'https://spadespersonal.vercel.app', detailedDesc: '/docs/personalhub.txt', category: 'Personal', price: 2840 },
    
    { title: 'Portfolio Pro', description: `Portfolio Pro is your ultimate solution for presenting your work with elegance and efficiency. Seamlessly crafted using React, Next.js, Tailwind CSS, and JavaScript, this module offers a dynamic platform to showcase your portfolio. From captivating presentations to effortless navigation, Portfolio Pro empowers you to engage your audience, drive conversions, and leave a lasting impression. Elevate your showcase today with Portfolio Pro and unlock the full potential of your portfolio.`, imageUrl: '/portfolio/portfolio_personal.png', link: 'https://spadesportfolio.vercel.app', detailedDesc: '/docs/portfoliopro.txt', category: 'Portfolio', price: 280 },
    
    { title: 'Smart Living Estate', description: `SmartLiving Estate aims to revolutionize real estate management by providing an intuitive and feature-rich platform for residents and administrators alike. With its modern design, extensive features, and robust technology stack, SmartLiving Estate sets the standard for efficient and user-centric estate management solutions.`, imageUrl: '/portfolio/smartliving.PNG', link: 'https://smartlivingestate.vercel.app', detailedDesc: '/docs/smartliving.txt', price: 3765, category: 'Real Estate' },

    { title: 'Sprectracraft', description: `The SpectraCraft Portfolio Module is a versatile and dynamic web application designed to empower professionals, creatives, and freelancers in showcasing their skills, projects, and achievements in a visually stunning and interactive manner. Built using cutting-edge technologies such as React, Next.js, and Tailwind CSS, SpectraCraft offers a seamless and engaging user experience across various devices and screen sizes.`, imageUrl: '/portfolio/spectracraft.png', link: 'https://spectracraft.vercel.app', detailedDesc: '/docs/spectracraft.txt', price: 810, category: 'Portfolio' },

    { title: 'TastyBites', description: "Embark on a culinary journey with TastyBites, a tantalizing cuisine website model meticulously crafted for discerning food enthusiasts. Immerse yourself in an exclusive list of menus, where each dish is a symphony of flavors curated to elevate your dining experience. The primary objective of TastyBites is to offer a feast for the senses, blending exquisite tastes with a visually delightful presentation.", imageUrl: '/portfolio/cuisine.PNG', link: 'https://thefoodalleyways.vercel.app', detailedDesc: '/docs/tastybite.txt', price: 1700, category: 'Cuisine' },

    { title: 'ZenFit Spa', description: "ZenFit Spa, a visionary project by Spadeshub, is a comprehensive spa and fitness website designed to elevate spa and fitness brands, setting them on the path for active online success. The platform embodies the essence of wellness and rejuvenation while fostering a dynamic online presence.", imageUrl: '/portfolio/zenfit.PNG', link: 'https://zenfitspa.vercel.app', detailedDesc: '/docs/zenfitspa.txt', price: 3265, category: 'Fitness' },
]

export default function Page({ params }) {
    const router = useRouter();

    const search = params.project;

    // Find the project with the matyching ID
    const project = projectsData.find((p) => String(p.title.toLowerCase().split(' ').join('-').toString()) === String(search));

    //check if the project is found 
    if (!project) {
        return <div className="text-lg ml-2">Project not found!{router.push('/projects')}</div>
    }

    return (
        <main>
            <Link href={'/projects'} className="mt-4 ml-2 flex items-center gap-1 text-amber-600 hover:underline underline-offset-2"><BsArrowLeft /> Back to products</Link>
            <h2 className="text-3xl font-bold text-center mt-8">{project.title}</h2>

            <section className="container px-2 mx-auto mt-8">
                <div className="max-w-2xl mx-auto">
                    {/* Project Image (if available) */}
                    {project.imageUrl && project.imageUrl.length > 0 && (
                        <Image src={project.imageUrl} alt={`${project.title} Image`} width={500} height={500} quality={100} priority className="w-full h-auto object-cover mb-6 rounded-md" />
                    )}

                    {/* Project Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-center`}><Link href={project.link} className={`flex items-center hover:text-amber-600 gap-1`}  target="_blank" rel="noopener noreferrer">{project.title}<CgLink /></Link></h3>
                    <div className="mb-4">
                        <p className="text-base md:text-lg mb-2 text-gray-800 dark:text-wheat/80">Value - ${project.price} License fee included</p>
                        <ContactUs />
                    </div>

                    {/* Project Description */}
                    <div className="text-lg text-gray-700 dark:text-wheat/70 mb-4">{project.description}</div>

                    {/* Additional Project Details can be added here */}
                    <div className="text-lg text-gray-700 dark:text-wheat/70 mb-8">
                        {project.detailedDesc 
                        ? 
                        <FetchDoc key={project.id} doc={project.detailedDesc} /> 
                        : 
                        <div>
                            <Skeleton variant="text" sx={{
                            fontSize: '1.5rem'
                            }}
                            animation="wave" />  
                            <Skeleton variant="text" sx={{
                            fontSize: '1.5rem'
                            }}
                            animation="wave" />  
                            <Skeleton variant="text" sx={{
                            fontSize: '1.5rem'
                            }}
                            animation="wave" />  
                            <Skeleton variant="text" sx={{
                            fontSize: '1.5rem'
                            }}
                            animation="wave" />  
                            <Skeleton variant="text" sx={{
                            fontSize: '1.5rem'
                            }}
                            animation="wave" />  
                        </div>}
                    </div>

                    <Link href={project.link} className="flex items-center justify-center px-4 py-2 rounded-full hover:bg-amber-600 hover:text-black text-amber-600 transition duration-300 font-semibold" target="_blank" rel="noopener noreferrer">View live here</Link>

                    <div className="flex items-center justify-around mt-4">
                        <ContactUs />
                        <GetStarted />
                    </div>
                </div>
            </section>
            <Link href={'/projects'} className="mt-4 ml-2 flex items-center gap-1 text-amber-600 hover:underline underline-offset-2"><BsArrowLeft /> Back to products</Link>
        </main>
    )
}