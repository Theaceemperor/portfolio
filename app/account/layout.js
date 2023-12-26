import { WebDevLayout } from "../components/client/ReusableComponents"

  export const metadata = {
    title: 'Spadeshub | Account',
  }

  export default function Layout({ children }) {
    return (
      <WebDevLayout>
        { children }
      </WebDevLayout>
    )
  }