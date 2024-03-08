'use client'

import { EditAbout, EditAddress, EditName, EditPassword, EditPhone } from "@/components/ProfileEdit";
import { useRouter } from "next/navigation";
import { CgArrowLeft } from "react-icons/cg";


export default function Page() {
    const router = useRouter();

    return (
        <main className="px-2">
            {/* <AccountInformationForm /> */}
            <button onClick={() => router.back()} className="p-2 rounded shadow bg-amber-600 my-2 flex items-center">Back <CgArrowLeft /></button>
            <EditName />
            <EditAbout />
            <EditAddress />
            <EditPhone />
            <EditPassword />
        </main>
    )
}