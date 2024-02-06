import { BaseLayout } from "../components/client/ReusableComponents";


export default function Layout({ children }) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  )
}