import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginPage from "../components/client/loginpage";


export default async function Page() {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect('/web-development/dashboard')
  }
  return (
    <LoginPage />
    )
}