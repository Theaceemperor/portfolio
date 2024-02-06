import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginPage from "@/app/components/client/loginpage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function Page() {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect('/web-development/dashboard')
  }
  return (
    <LoginPage />
  )
}