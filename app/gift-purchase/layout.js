import SubLayout from "../components/layout";

  export const metadata = {
    title: 'Spadeshub | Spades gift purchase',
  }

  export default function Layout({ children }) {
    return (
      <SubLayout>
        {children}
      </SubLayout>
    )
  }