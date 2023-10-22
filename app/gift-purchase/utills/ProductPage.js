
import { ShoppingCart } from "@/app/components/btn-field";
import Image from "next/image";

export function ProductPage6({name,price,stock,product,available,amount,imageSrc}) {

    return (
        <section className="flex flex-col items-center justify-center m-1">
            <div className="h-[300px] w-[300px] flex items-center flex-col shadow-md p-2 shadow-gray-600 gap-3 rounded-sm">
                <Image 
                width={920}
                height={1080}
                src={imageSrc}
                className="h-auto w-full rounded-md border-b border-[#de4f0a] shadow-inner"
                alt="gift card"
                />
                <div className="flex justify-evenly gap-8 px-2 w-full items-center">
                    <ul>
                        <li>{name}</li>
                        <li>{price}</li>
                        <li>{stock}</li>
                    </ul>
                    <ul>
                        <li>{product}</li>
                        <li>{amount}</li>
                        <li>{available}</li>
                    </ul>
                </div>
                <ShoppingCart />
            </div>
        </section>
    )
}

