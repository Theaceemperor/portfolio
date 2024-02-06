import { GiSpades } from "react-icons/gi";


export default function Loading() {

    return (
        <div className="h-screen flex justify-center items-center">
            <h1 className={"text-5xl sm:text-9xl text-amber-600 flex items-center justify-center animate-pulse"}>SP<GiSpades />DES</h1>
        </div>
    )
}