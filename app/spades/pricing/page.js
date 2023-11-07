import Image from "next/image";

export default function Page() {

    return (
        <Image 
        src={'/img/invoice.jpg'}
        alt="Pricing Image"
        width={920}
        height={1020}
        className="h-auto w-full px-10 my-10"
        priority={true}
        />
    )
}