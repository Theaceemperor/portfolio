import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Spades | User Settings',
}

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth')
  }

  return(
    <main>
      {children}
    </main>
  )
}