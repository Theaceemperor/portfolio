import { BaseLayout } from "../components/client/ReusableComponents";

  export const metadata = {
    title: 'Spadeshub | Spades Gift purchase',
  }

  export default function Layout({ children }) {
    return (
      <BaseLayout>
        {children}
      </BaseLayout>
    )
  }