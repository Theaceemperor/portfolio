
import { LoginQuest } from "@/app/components/spadesLinks";
import Image from "next/image";
import { TbGiftCardFilled } from "react-icons/tb";

export default function GiftCardCheckout() {

    return (
        <>
            <main>
                <section className="flex flex-col items-center justify-center my-5 gap-5 P-2 text-center">
                    <h1 className="px-5">Thank you for your purchase!</h1>
                    <div>
                        <Image 
                        width={560}
                        height={560}
                        className="w-full h-auto rounded-lg"
                        alt="gift-card image"
                        src={"/img/bg.png"}
                        />
                    </div>
                    <h4 className="text-sm flex items-center gap-1 px-2 border-b border-[#de4f0a] text-center">Gift card <TbGiftCardFilled className="text-[#de4f0a]"
                    /> sent to provided Email.</h4>
                    
                    <LoginQuest />
                    
                </section>
            </main>
        </>
    )
}