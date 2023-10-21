import { SubNav } from "../components/navBar";
import { SpadesSubFooter } from "../components/spadesFooter";
import { SubHeader } from "../projects/utils/Headers";
import { RowCta } from "../projects/utils/cta";

  export const metadata = {
    title: 'Spadeshub | Our services',
  }

  export default function Layout({ children }) {
    return (
      <>
        <SubNav />
        <SubHeader />
        <main>
          {children}
        </main>
        <RowCta />
        <SpadesSubFooter />
      </>
    )
  }