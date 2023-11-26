


export default function DashboardProfile({icon,header,hidden,sidetext,children,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10}) {

    return (
        <div className="shadow-amber-600/90 shadow-md hover:shadow-amber-600 hover:shadow-inner p-5 rounded-lg border-y-2 border-black w-[100%]">
            <h1 className={`flex items-center justify-center gap-2 font-bold text-lg ${hidden}`}>{icon}{header}</h1>
            <article className="my-5 flex flex-col gap-5">
                <p className="text-amber-600 font-bold">{sidetext}</p>
                <div className="flex flex-col items-center justify-center gap-2">
                    <ul className="text-sm flex flex-col gap-3">
                        <li className="flex flex-col">
                            <small className="font-bold">{l1}</small>
                            {r1}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l2}</small>
                            {r2}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l3}</small>
                            {r3}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l4}</small>
                            {r4}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l5}</small>
                            {r5}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l6}</small>
                            {r6}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l7}</small>
                            {r7}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l8}</small>
                            {r8}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l9}</small>
                            {r9}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l10}</small>
                            {r10}
                        </li>
                    </ul>
                    {children}
                </div>
            </article>
        </div>
    )
}