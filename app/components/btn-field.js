
import Link from "next/link";
import { Button } from "@mui/material";
import { ImCart } from 'react-icons/im';

export default function ButtonField({ link1,link2,linktitle1,linktitle2 }) {

    return (
        <div className="max-h-[50px] flex text-center flex-row justify-between items-center lg:mx-5 my-5 text-sm gap-1">
            <Link href={link1} className="underline decoration-[#be4f0a] font-bold hover:border-y hover:border-[#be4f0a] px-2 py-1 hover:rounded-lg duration-500 hover:decoration-transparent">{linktitle1}</Link>
            <Link href={link2} className="underline decoration-[#be4f0a] font-bold hover:border-y hover:border-[#be4f0a] px-2 py-1 hover:rounded-lg duration-500 hover:decoration-transparent">{linktitle2}</Link>
        </div>
    )
}

export function AdminPostButton() {

    return (
        <Button 
        type="submit"
        className="bg-black text-inherit"
        >
            Update
        </Button>
    )
}

export function ShoppingCart() {

    return (
        <Link 
        href="/gift-purchase"
        className="text-md text-[#de4f0a]"
        >
            <ImCart />
        </Link>
    )
}