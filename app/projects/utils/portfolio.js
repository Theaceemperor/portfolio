'use client'
import { useIsVisible } from "@/app/components/useIsVisible";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiLinkAlt } from "react-icons/bi";


export function ProjectPortfolio({ projectLink, projectName, image1, image2, image3,image4, overview }) {
    const ref = useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`flex flex-col gap-5 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <h2 className="font-bold text-xl flex items-center justify-center">
                <Link href={`${projectLink}`} className="flex items-center gap-1 justify-center">{projectName} <BiLinkAlt className="text-amber-600"/></Link>
            </h2>
            <p className="text-center text-sm px-1">{overview}</p>
            <div className="grid grid-cols-2 gap-2 px-2">
                {/* <Image 
                src={image1}
                alt="project image"
                width={1080}
                height={920}
                className="rounded-md w-auto h-[100%] hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                /> */}
                <article className="grid grid-rows-2 gap-2">
                    <Image 
                    src={image1}
                    alt="project image"
                    width={1080}
                    height={920}
                    className="rounded-md w-auto h-auto hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                    />
                    <Image 
                    src={image4}
                    alt="project image"
                    width={1080}
                    height={920}
                    className="rounded-md w-auto h-auto hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                    />
                </article>
                <article className="grid grid-rows-2 gap-2">
                    <Image 
                    src={image2}
                    alt="project image"
                    width={1080}
                    height={920}
                    className="rounded-md w-auto h-auto hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                    />
                    <Image 
                    src={image3}
                    alt="project image"
                    width={1080}
                    height={920}
                    className="rounded-md w-auto h-auto hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                    />
                </article>
            </div>
        </div>
    )
}