import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Spades | Sign Up',
    description: 'Sign up to build fast, secure and reliable react web applications with spades.'
  }

  export default async function Layout({ children }) {
    const session = await getServerSession(authOptions);

    if (session) {
      redirect('/dashboard')
    }

    return(
        <main>
            {children}
        </main>
    )
  }