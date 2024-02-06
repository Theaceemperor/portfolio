'use client'
import React from "react";
import Link from "next/link";
import MySwiper from "@/app/components/swiper";
import { projectsData } from "./[project]/page";
import { CgLink } from "react-icons/cg";
import { Project } from "@/app/components/client/ReusableComponents";

const projects = projectsData;

export default function Page() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [sortOption, setSortOption] = React.useState('Default');

    const filteredProjects = selectedCategory === 'All'
      ? projects
      : projects.filter(item => item.category === selectedCategory);
  
    const sortedProjects = sortOption === 'Default'
        ? filteredProjects
        : [...filteredProjects].sort((a, b) => {
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
            <article id="our-clients" className="flex items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center mb-8 mt-4 shadow shadow-black/50 dark:shadow-amber-600/80 rounded max-w-lg p-2">
                    <Link href={'#our-clients'} className="flex items-center text-center underline underline-offset-4 hover:text-amber-600 font-bold">Our Clients <CgLink /></Link>
                    <MySwiper />
                </div>
            </article>

            <p className="px-2 text-center"><Link href={'/web-development/application'} className="underline decoration-amber-600 underline-offset-1 flex items-center justify-center gap-1">Get your desired website in few clicks <CgLink /></Link></p>
            <h3><Link href={'#our-projects'} className="flex items-center justify-center hover:text-amber-600 text-xl underline underline-offset-8 mt-8">Our Projects <CgLink /></Link></h3>

            {/* Filter and Sort Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
                <label className="sm:mr-4 text-lg">Filter by Category:</label>
                <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-amber-600 rounded-md px-2 py-1 sm:mr-4 mb-2 text-gray-600"
                >
                <option value="All">All</option>
                {/* Add unique categories from your data */}
                {Array.from(new Set(projects.map(item => item.category))).map(category => (
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

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-4 mt-4">
                {sortedProjects.map(project => (
                    <Project key={project.id} description={project.description} imageUrl={project.imageUrl} link={`/projects/website?solution=${project.title.toLowerCase().split(' ').join('-').toString()}`} title={project.title} />
                ))}
            </section>
        </main>
    )
}