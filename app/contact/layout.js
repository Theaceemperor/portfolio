import { BaseLayout } from "../components/client/ReusableComponents";

  export const metadata = {
    title: 'Spadeshub | Contact us',
  }

  export default function Layout({ children }) {
    return (
      <BaseLayout>
        {children}
      </BaseLayout>
    )
  }