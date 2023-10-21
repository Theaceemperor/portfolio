
import { SubNav } from "../components/navBar";
import { SubHeader } from "./utils/Headers";
import { SpadesSubFooter } from "../components/spadesFooter";
import { RowCta } from "./utils/cta";

  export const metadata = {
    title: 'Spadeshub | Our projects',
  }

  export default function Layout({ children }) {
    return (
      <>
        <SubNav/>
        <SubHeader />
        <main>
          {children}
        </main>
        <RowCta />
        <SpadesSubFooter />
      </>
    )
  }