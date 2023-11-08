import Image from "next/image";

export default function Page() {

    return (
        <div className="w-auto h-auto">
            <Image 
            src={'/img/invoice.png'}
            alt="Pricing Image"
            width={920}
            height={1020}
            className="h-auto w-full px-10 my-10"
            />
        </div>
    )
}