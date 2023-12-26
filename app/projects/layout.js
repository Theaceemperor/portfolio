import { BaseLayout } from "../components/client/ReusableComponents";

  export const metadata = {
    title: 'Spadeshub | Our projects',
  }

  export default function Layout({ children }) {
    return (
      <BaseLayout>
        {children}
      </BaseLayout>
    )
  }