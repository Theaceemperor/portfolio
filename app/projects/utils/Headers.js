import { HeaderText } from "@/app/components/headerText";

export function SubHeader() {
    return (
        <div className="bg-black text-amber-600 border-y-4 border-amber-600 dark:bg-amber-600/85 dark:text-black sm:h-[60vh] lg:h-[60vh] h-[40vh] flex flex-col justify-center items-center">
            <div className="dark:p-2 dark:bg-black dark:rounded-md place-self-center">
              <HeaderText customBorder={'border-amber-600'}/>
            </div>
        </div>
    )
}