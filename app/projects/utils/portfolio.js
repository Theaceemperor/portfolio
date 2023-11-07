'use client'
import { useIsVisible } from "@/app/components/useIsVisible";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiLinkAlt } from "react-icons/bi";


export function ProjectPortfolio({ projectLink, projectName, projectId, image1, image2, overview, productDesc1, productDesc2 }) {
    const ref = useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`flex flex-col gap-5 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <h2 id={`${projectId}`} className="font-bold text-xl flex items-center justify-center">
                <Link href={`${projectLink}`} className="flex items-center gap-1 justify-center">{projectName} <BiLinkAlt className="text-amber-600"/></Link>
            </h2>
            <p className="text-center text-sm px-1">{overview}</p>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 px-2">
                <article className="flex flex-col sm:grid sm:grid-rows-2 gap-2">
                    <aside className="p-2 text-sm">
                        <h4 className="text-center font-bold text-amber-600 underline underline-offset-4">Product Description</h4>
                        <blockquote className="text-xs">{productDesc1}</blockquote>
                    </aside>
                    <Image 
                    alt="project image"
                    width={1350}
                    height={650}
                    src={image1}
                    className="rounded-md w-[100%] h-auto hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                    />
                </article>
                <article className="flex flex-col sm:grid sm:grid-rows-2 gap-2">
                    <Image 
                    alt="project image"
                    width={1350}
                    height={650}
                    src={image2}
                    className="rounded-md w-[100%] h-auto hover:border hover:border-amber-600 hover:shadow-sm hover:shadow-amber-600"
                    />
                    <aside className="text-center p-2 text-sm">
                        <h4 className="font-bold text-amber-600 underline underline-offset-4">Product Description</h4>
                        <blockquote className="text-xs">{productDesc2}</blockquote>
                    </aside>
                </article>
            </div>
        </div>
    )
}