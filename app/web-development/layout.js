import { getServerSession } from "next-auth"
import { WebDevLayout } from "../components/client/ReusableComponents"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";

  export const metadata = {
    title: 'Spadeshub | Login',
  }

  export default async function Layout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect('/web-development')
    }

    return (
      <WebDevLayout>
        { children }
      </WebDevLayout>
    )
  }