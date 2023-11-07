import { SubHeader } from "../projects/utils/Headers";
import { RowCta } from "../projects/utils/cta";
import { SubNav } from "./navBar";
import { SpadesSubFooter } from "./spadesFooter";

  export default function SubLayout({ children }) {
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