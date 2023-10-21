import { HeaderText } from "@/app/components/headerText";
import Head from "next/head";

export function Header() {
    return (
        <Head>
            <link rel='shorcut icon' href='/SPADES3.ICO' type='image/x-icon' />
            <title>Spades | Digital marketing at your finger tips</title>
            <meta name='description' content='Empowering Brands for Digital Success; we are your Partner in Online Growth, Data-Driven Strategies and Digital Innovation' />
            <meta name="google-site-verification" content="BAfsvlK73qUvm-fT6bcxkVnOWSuUgcuZZPDh8RS7pOo" />
        </Head>
    )
}

export function PageHeader() {
    return (
        <Head>
            <link rel='shorcut icon' href='/SPADES3.ICO' type='image/x-icon' />
            <title>Spades | Spades gift cards for your friends and family to use our services with ease. </title>
            <meta name='description' content='Empowering Brands for Digital Success; we are your Partner in Online Growth, Data-Driven Strategies and Digital Innovation' />
        </Head>
    )
}

export function SubHeader() {
    return (
        <div className="bg-black text-amber-600 border-y-4 border-amber-600 dark:bg-amber-600/85 dark:text-black sm:h-[60vh] lg:h-[60vh] h-[40vh] flex flex-col justify-center items-center">
            <div className="dark:p-2 dark:bg-black dark:rounded-md place-self-center">
              <HeaderText customBorder={'border-amber-600'}/>
            </div>
        </div>
    )
}