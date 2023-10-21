import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import LoginPage from "./utils/loginpage"
import { redirect } from "next/navigation"


export default async function Page() {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect('/web-development/dashboard')
  }
  return (
    <LoginPage />
    )
}