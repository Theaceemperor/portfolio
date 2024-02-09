
import { CircularProgress } from "@mui/material";


export default function ActivityIndicator() {

    return (
        <div className='h-auto w-full flex justify-center items-center my-10'>
            <div className="flex flex-col gap-1 items-center justify-center">
                <CircularProgress color='inherit' />
                <h1 className="px-2">Authenticating</h1>
            </div>
        </div>
    )
}

export function ActivityIndicator2() {

    return (
        <div className='h-auto w-full flex justify-center items-center my-10'>
            <div className="flex flex-col gap-1 items-center justify-center">
                <CircularProgress color='inherit' />
                <h1 className="px-2">Please Wait...</h1>
            </div>
        </div>
    )
}

export function ActivityIndicator3() {

    return (
        <div className='h-auto w-full flex justify-center items-center my-10'>
            <div className="flex flex-col gap-1 items-center justify-center">
                <CircularProgress color='inherit' />
                <h1 className="px-2">Loading...</h1>
            </div>
        </div>
    )
}

export function ActivityIndicator4() {

    return (
        <div className='h-auto w-auto flex justify-center items-center'>
            <CircularProgress color='inherit' size={16} />
        </div>
    )
}
