


export default function DashboardProfile({icon,header,hidden,sidetext,children,l1,l2,l3,l4,l5,l6,r1,r2,r3,r4,r5,r6}) {

    return (
        <div className="shadow-amber-600/90 shadow-lg hover:shadow-amber-600 hover:shadow-inner p-5 rounded-lg border-y-2 border-black w-full">
            <h1 className={`flex items-center justify-center gap-2 ${hidden}`}>{icon}{header}</h1>
            <article className="my-5 flex flex-col gap-5">
                <p>{sidetext}</p>
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <ul className="text-sm">
                            <li>{l1}</li>
                            <li>{l2}</li>
                            <li>{l3}</li>
                            <li>{l4}</li>
                            <li>{l5}</li>
                            <li>{l6}</li>
                        </ul>
                        <ul className="text-sm">
                            <li>{r1}</li>
                            <li>{r2}</li>
                            <li>{r3}</li>
                            <li>{r4}</li>
                            <li>{r5}</li>
                            <li>{r6}</li>
                        </ul>
                    </div>
                    {children}
                </div>
            </article>
        </div>
    )
}