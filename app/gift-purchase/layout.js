import { BaseLayout } from "../components/client/ReusableComponents";

  export const metadata = {
    title: 'Spadeshub | Buy Spades Giftcards',
  }

  export default function Layout({ children }) {
    return (
      <BaseLayout>
        {children}
      </BaseLayout>
    )
  }