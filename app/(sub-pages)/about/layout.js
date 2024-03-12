import { AdsNotification } from "@/components/alert";

export const metadata = {
  title: 'Spades | About Us',
}

export default function Layout({ children }) {
  return (
    <>
      <AdsNotification 
      alertTitle={"Craft Your Perfect Site!"}
      >
          <span>From concept to launch, let us bring your website vision to life. Discover expert guidance and unmatched quality in web development.</span> 
      </AdsNotification>
      {children}
    </>
  )
}