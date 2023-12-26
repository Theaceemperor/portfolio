import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LongProfile } from "@/app/components/client/profile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default function Page() {
    const session = getServerSession(authOptions);

    if (!session) {
        redirect('web-development');
    }

    return (
        <LongProfile />
    )
}