import SubLayout from "../components/layout";

  export const metadata = {
    title: 'Spadeshub | Our services',
  }

  export default function Layout({ children }) {
    return (
      <SubLayout>
        {children}
      </SubLayout>
    )
  }