import SubLayout from "../components/layout";

  export const metadata = {
    title: 'Spadeshub | Contact us',
  }

  export default function Layout({ children }) {
    return (
      <SubLayout>
        {children}
      </SubLayout>
    )
  }