import SubLayout from "../components/layout";

  export const metadata = {
    title: 'Spadeshub | Our projects',
  }

  export default function Layout({ children }) {
    return (
      <SubLayout>
        {children}
      </SubLayout>
    )
  }