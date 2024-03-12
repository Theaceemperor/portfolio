import { AdsNotification } from "@/components/alert"

export const metadata = {
  title: 'Spades | Web Solutions',
}

export default function Layout({ children }) {
  return (
    <>
      <AdsNotification 
      alertTitle={"Unlock Your Site's Potential!"}
      >
          <span>Maximize your online impact with our bespoke web solutions. Transform your website into a powerful asset for your business growth.</span> 
      </AdsNotification>
      {children}
    </>
  )
}