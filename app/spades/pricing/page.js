import Image from "next/image";

export default function Page() {

    return (
        <section>
            <h2 className="text-center font-bold text-lg my-2 underline underline-offset-8 flex items-center justify-center">Web development pricing scheme</h2>
            <p className="text-center text-sm flex items-center justify-center">Pricing is subject to clients product descrioption</p>
            <div className="w-auto h-auto">
                <Image 
                src={'/img/invoice1.png'}
                alt="Pricing Image"
                width={920}
                height={1020}
                className="h-auto w-full px-10 my-10"
                />
            </div>

            <div className="w-auto h-auto">
                <Image 
                src={'/img/invoice2.png'}
                alt="Pricing Image"
                width={920}
                height={1020}
                className="h-auto w-full px-10 my-10"
                />
            </div>
        </section>
    )
}