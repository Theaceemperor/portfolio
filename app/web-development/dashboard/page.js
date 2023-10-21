import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MainDashboard from "./utils/mainPage";


export default async function Page() {
    const session = await getServerSession(authOptions);
    if(!session) {
        redirect('/web-development');
    }

    return (
        <MainDashboard />
    )
}