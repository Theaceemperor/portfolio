import { AdsNotification } from "@/components/alert"

export const metadata = {
    title: 'Spades | Privacy Policy'
}

export default function Layout({ children }) {

    return (
        <>
            <AdsNotification 
            alertTitle={"Elevate Your Web Presence!"}
            >
                <span>Experience tailored web solutions for online success. Partner with us to enhance your brand's digital footprint today.</span> 
            </AdsNotification> 
            {children}
        </>
    )
}