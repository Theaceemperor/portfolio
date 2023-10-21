
import Link from "next/link";
import Image from "next/image";
import { GiSpades } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
//import { Button } from "@mui/material";

export function LoginQuest({color}) {

    return (
        <div className="flex my-5 items-center justify-center">
            <Link 
            href={"/web-development/dashboard"}
            className={`text-md flex items-center gap-1 px-2 text-[#de4f0a] text-center ${color}`}>
                <i>login to dashboard</i><GiSpades />
            </Link>
        </div>
    )
}

export function SignUpQuest({color}) {

    return (
        <div>
            <Link 
            href={"/web-development/application"}
            className={`text-sm flex items-center gap-1 px-2 text-[#de4f0a] text-center ${color}`}>
                <i>Get a website here</i><GiSpades />
            </Link>
        </div>
    )
}

export function ContactUs({text}) {

    return (
        <Link href={"https://wa.me/message/LLABQR53DPNME1"} 
        className="flex items-center gap-1">
            Contact us<IoMdContacts className="text-[#de4f0a]"/> {text}
        </Link>
    )
}

export function LoginButton({onClick}) {

    return (
        <button 
        type="submit"
        style={{
            background: 'black',
            opacity: 1,
            color: '#be4f0a'
        }}
        className="bg-black/70 flex items-center gap-1 px-2 py-1 rounded-md"
        onClick={onClick}
        >LogIn<GiSpades className="text-xl"/>
        </button>
    )
}

export function LoginButton2({onClick}) {

    return (
        <Link 
        href={"/web-development/dashboard"}
        className="flex gap-1 items-center justify-center"
        >LogIn<GiSpades className="text-lg"/>
        </Link>
    )
}

export function VisitHomePage() {

    return (
        <Link href="/"><i className="text-[#de4f0a] flex items-center gap-0.5">
            H<Image 
            className="w-[32px] h-auto rounded-full border-2 border-[#be4f0a]" 
            width={50} 
            height={32} 
            src="/img/SPADES3.png" 
            alt="logo" 
            />
            mepage</i>
            
        </Link>
    )
}

export function PortfolioBtn() {

    return (
        <Link href="/web-design/portfolio"><i className="text-[#de4f0a] flex items-center gap-0.5">
            Portf<Image 
            className="w-[32px] h-auto rounded-full border-2 border-[#be4f0a]" 
            width={50} 
            height={32} 
            src="/img/SPADES3.png" 
            alt="logo" 
            />lio</i>
            
        </Link>
    )
}