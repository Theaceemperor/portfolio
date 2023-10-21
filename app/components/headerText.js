'use client'
import { useRef } from "react";
import { GiSpades } from "react-icons/gi";
import { useIsVisible } from "./useIsVisible";


export function HeaderText({customBorder}) {
    const ref = useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <header className={`border-y-2 border-[#252324] dark:border-amber-600 p-2 ${customBorder}`}>
          <h1 ref={ref} className={`text-4xl sm:text-9xl text-amber-600 flex items-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>SP<GiSpades />DES</h1>
        </header>
    )
}