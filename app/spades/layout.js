import { BaseLayout } from "../components/client/ReusableComponents";

export const metadata = {
  title: 'Spadeshub | Policy',
}

  export default function Layout({ children }) {
    return (
      <BaseLayout>
        {children}
      </BaseLayout>
    )
  }