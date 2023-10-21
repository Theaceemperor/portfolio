
import Link from "next/link";
import { FaBlog } from "react-icons/fa";

export function H1Link({text,icon,targetLink}) {

    return (
        <div  className="w-full flex items-center justify-center my-1">
            <h1 className="px-3">
                <Link href={`${targetLink}`} className="flex gap-1 items-center">{text}{icon}</Link>
            </h1>
        </div>
    )
}

export function BlogLink() {

    return (
        <div className="w-full flex items-center justify-center my-1">
            <h1 className="px-3">
                <Link href={"https://x.com/@spadeshub"}
                className="flex items-center justify-center">
                    <FaBlog className="text-[#de4f0a]"/>log
                </Link>
            </h1>
        </div>
    )
}

export function PLink({text,icon,targetLink}) {

    return (
        <div>
            <p className="px-2">
                <Link href={`${targetLink}`} className="flex gap-1 items-center">{text}{icon}</Link>
            </p>
        </div>
    )
}