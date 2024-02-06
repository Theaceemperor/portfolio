import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

  export const metadata = {
    title: 'Spadeshub | Account',
  }

  export default async function Layout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect('/web-development');
    }
    
    return (
      <>
        { children }
      </>
    )
  }