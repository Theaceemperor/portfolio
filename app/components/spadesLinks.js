'use client'
import { useRef } from "react";
import { useIsVisible } from "./useIsVisible";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiSpades } from "react-icons/gi";


export function AffiliateLink() {
    const router = useRouter();
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    return (
        <button ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} underline decoration-amber-600 underline-offset-4`}
        onClick={() => router.push('/contact')}><i>Become an affiliate here</i>
        </button>
    )
}

export function LoginQuest() {
    const router = useRouter();
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    return (
        <button ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} border-y border-amber-600 dark:text-amber-600 rounded-md px-2 py-1 bg-black/75 text-amber-600 animate-bounce flex items-center gap-1`}
        onClick={() => router.push('/web-development')}>Login to dashboard <GiSpades /></button>
    )
}