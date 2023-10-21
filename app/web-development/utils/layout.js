'use client'

import { SubNav } from "@/app/components/navBar"
import { SpadesSubFooter } from "@/app/components/spadesFooter"
import { SubHeader } from "@/app/projects/utils/Headers"
import { RowCta } from "@/app/projects/utils/cta"
import { SessionProvider } from "next-auth/react"

  export default function WebDevLayout({ children }) {
    return (
      <SessionProvider >
          <SubNav />
          <SubHeader />
          <main>
            {children}
          </main>
          <RowCta />
          <SpadesSubFooter />
      </SessionProvider>
    )
  }