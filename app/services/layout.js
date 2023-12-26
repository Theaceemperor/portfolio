import { BaseLayout } from "../components/client/ReusableComponents";

  export const metadata = {
    title: 'Spadeshub | Our services',
  }

  export default function Layout({ children }) {
    return (
      <BaseLayout>
        {children}
      </BaseLayout>
    )
  }