import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Spadeshub | Sign Up',
    description: 'Sign up to build fast and secure react web applications with spades'
  }

  export default async function Layout({ children }) {
    const session = await getServerSession(authOptions);

    if (session) {
      redirect('/web-development/dashboard')
    }

    return(
        <main>
            {children}
        </main>
    )
  }