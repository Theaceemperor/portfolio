import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import GiftCard from "./utills/gift-cards";



export default async function Page() {
    const session = await getServerSession(authOptions);
    if(!session) {
        
    }

    return (
        <GiftCard />
    )
}