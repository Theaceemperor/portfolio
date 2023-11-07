import SubLayout from "../components/layout";

export const metadata = {
  title: 'Spadeshub | Policy',
}

  export default function Layout({ children }) {
    return (
      <SubLayout>
        {children}
      </SubLayout>
    )
  }