
import WebDevLayout from "./utils/layout"

  export const metadata = {
    title: 'Spadeshub | Login to track web development',
  }

  export default function Layout({ children }) {
    return (
      <WebDevLayout>
        { children }
      </WebDevLayout>
    )
  }