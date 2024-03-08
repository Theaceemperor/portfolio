import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const metadata = {
    title: 'Spades | Dev Support'
}

export default async function Layout({ children }) {
    const session = await getServerSession(authOptions);

    return (
        session
        ?
        <>{children}</>
        :
        <div className="flex flex-col mt-4 space-y-4 justify-center items-center p-4 font-semibold text-lg">
            <p>You must have a "Spades Dev" account and be logged in to access Dev Support!</p>
            <p className="font-medium">Login <i className="text-amber-600 font-bold underline"><Link href={"/auth"}>here!</Link></i></p>
        </div>
    )
}