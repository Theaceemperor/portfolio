'use client'
import React from "react";
import Link from "next/link";
import { BiLink, BiLinkAlt } from "react-icons/bi";
import MySwiper from "../components/swiper";
import { Project } from "../components/client/ReusableComponents";

const projectsData = [
    { id: 1, title: 'Catalyst Canvas', description: "Catalyst Canvas is a dynamic and engaging website module designed to showcase the impactful work of a charitable organization or non-profit entity. Seamlessly blending modern design with user-friendly functionality, Catalyst Canvas aims to provide visitors with a rich and interactive experience.", imageUrl: '/portfolio/catalyst_canvas.PNG', link: 'https://catalystcanvas.vercel.app', category: 'NGO' },

    { id: 2, title: 'HarmonyHub Consult', description: "Developed by the innovation software company, Spadeshub, HarmonyHub Consult is a dynamic platform crafted for seamless interactions between clients and experts. The objective is to simplify the consultation process, offering a mordern and efficient solution.", imageUrl: '/portfolio/consult.PNG', link: 'https://spadesconsult.vercel.app', category: 'Consultation' },

    { id: 3, title: 'FlexiScape', description: 'A very cool and informative landing page tailored for any purpose, from; individuals, to small business as well as coporates willing to showcase specific products or services.', imageUrl: '/portfolio/landing.PNG', link: 'https://spadeslanding.vercel.app', category: 'Landing page' },

    { id: 4, title: 'ZenFit Spa', description: "ZenFit Spa, a visionary project by Spadeshub, is a comprehensive spa and fitness website designed to elevate spa and fitness brands, setting them on the path for active online success. The platform embodies the essence of wellness and rejuvenation while fostering a dynamic online presence.", imageUrl: '/portfolio/zenfit.PNG', link: 'https://zenfitspa.vercel.app', category: 'spa' },

    { id: 5, title: 'DataVista Analytics', description: "The Data Analytics Website Module provides a powerful and intuitive platform for data analysts and their clients, offering a myriad of benefits that enhance collaboration, project management, and data visualization.", imageUrl: '/portfolio/analytics.PNG', link: 'https://datavistaanalytics.vercel.app', category: 'Analytics' },

    { id: 6, title: 'PersonalHub', description: `PersonalHub, an individual endeavor powered by Spadeshub, is a distinctive personal website that offers a unique blend of exclusive content, confidentials, insights, and features a dedicated section for careers and certifications. The primary objective is to create a personalized and engaging space for users to subscribe to premium content, access a decisive "About" column, explore careers and certifications, and participate in a vibrant community through a chat interface.`, imageUrl: '/portfolio/personal.PNG', link: 'https://spadespersonal.vercel.app', category: 'Personal' },

    { id: 7, title: 'Linted Ecommerce', description: "Welcome to MarketMingle, your go-to destination for a unique and delightful shopping experience. This small e-commerce store is designed to bring you exclusive features, easy navigation, and a curated selection of products that make every purchase special.", imageUrl: '/portfolio/linted.PNG', link: 'https://linted.vercel.app', category: 'Ecommerce' },

    { id: 8, title: 'TastyBite', description: "Embark on a culinary journey with TastyBite, a tantalizing cuisine website model meticulously crafted for discerning food enthusiasts. Immerse yourself in an exclusive list of menus, where each dish is a symphony of flavors curated to elevate your dining experience. The primary objective of TastyBite is to offer a feast for the senses, blending exquisite tastes with a visually delightful presentation.", imageUrl: '/portfolio/cuisine.PNG', link: 'https://tymcuisine.vercel.app', category: 'Restaurant/Cuisine' },
    //{ id: 9, title: '', description: '', imageUrl: '', link: '' },
];

export default function Page() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [sortOption, setSortOption] = React.useState('Default');

    const filteredProjectsData = selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(item => item.category === selectedCategory);
  
    const sortedProjectsData = sortOption === 'Default'
        ? filteredProjectsData
        : [...filteredProjectsData].sort((a, b) => {
            if (sortOption === 'Category') {
            //Make sure 'a' and 'b' have the 'category' property
            if (a.category && b.category) {
                return a.category.localeCompare(b.category);
            }
            }
            // Add more sorting options as needed
            return 0;
        });

    return (
        <main>
            <article className="flex items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center mb-5 mt-4 shadow shadow-black/50 dark:shadow-amber-600/80 rounded max-w-md p-2">
                    <h3><Link href={'#our-clients'} className="flex items-center justify-center underline underline-offset-4 hover:text-amber-600 font-bold">Our Clients <BiLink /></Link></h3>
                    <MySwiper />
                </div>
            </article>

            <p className="px-2 text-center"><Link href={'/web-development/application'} className="underline decoration-amber-600 underline-offset-1 flex items-center justify-center gap-1">Get your desired website in few clicks <BiLinkAlt /></Link></p>
            <h3><Link href={'#our-projects'} className="flex items-center justify-center hover:text-amber-600 text-xl underline underline-offset-8 mt-8">Our Projects <BiLink /></Link></h3>

            {/* Filter and Sort Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center my-4">
                <label className="sm:mr-4 text-lg">Filter by Category:</label>
                <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-amber-600 rounded-md px-2 py-1 sm:mr-4 mb-2 text-gray-600"
                >
                <option value="All">All</option>
                {/* Add unique categories from your data */}
                {Array.from(new Set(projectsData.map(item => item.category))).map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
                </select>
        
                <label className="sm:mr-4 text-lg">Sort by:</label>
                <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-amber-600 rounded-md px-2 py-1  text-gray-600"
                >
                <option value="Default">Default</option>
                <option value="Category">Category</option>
                {/* Add more sorting options as needed */}
                </select>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-8">
                {sortedProjectsData.map(project => (
                    <Project key={project.id} description={project.description} imageUrl={project.imageUrl} link={`/projects/[project]?project=${project.id}`} title={project.title} />
                ))}
            </section>
        </main>
    )
}