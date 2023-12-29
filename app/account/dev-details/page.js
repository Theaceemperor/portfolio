'use client'
import { EditCustomDomain, EditCustomEmail } from "@/app/components/client/ProfileEdit";
import { DashboardProfile } from "@/app/components/client/ReusableComponents";
import { db } from "@/mysettings/firebase.settings";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";


export default function Page() {
    const router = useRouter();
    const {data:session} = useSession();

    const [dev,setDev] = React.useState([]);

    React.useEffect(() => {
        try {
            const handleGetDev = async () => {
                const q = query(collection(db,'users'),where('email','==',session.user.email));
                const onSnapShot = await getDocs(q);
        
                setDev(onSnapShot.docs.map(doc => {
                    return {
                        id:doc.id,
                        data:{
                            ...doc.data()
                        }
                    }
                }));
               }
            handleGetDev();
        } catch (error) {
            
        }
    })

    return (
        <main className="px-2">
            {/* <AccountInformationForm /> */}
            <button onClick={() => router.back()} className="p-2 rounded shadow bg-amber-600 my-2 flex items-center">Back <CgArrowLeft /></button>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {
                    dev.map(item => (
                        <DashboardProfile key={item.id}
                        header={<span className="flex items-center gap-2">Current Development <FaLaptopCode className="text-2xl text-amber-600" /></span>}
                        sidetext={<span className="uppercase">{item.data.compname}</span>}
                        l1={"status: "}
                        l2={"Progress: "}
                        l3={"Completed Features: "}
                        l4={"Features requested: "}
                        l5={"Dev Time: "}
                        l6={"Dev Time left: "}
                        l7={'Development Link: '}
                        l8={'Backend Services: '}
                        l9={'Brand Colors: '}
                        l10={'Complementary Services: '}
                        r1={item.data.status}
                        r2={parseInt(item.data.progress) + '%' }
                        r3={item.data.features_completed}
                        r4={item.data.featuresreq}
                        r5={item.data.devtime}
                        r6={item.data.devrem}
                        r7={<Link
                            href={'https://' + item.data.devlink}
                            className="underline decoration-amber-600"
                            >view this development here!</Link>
                        }
                        r8={...item.data.backendService}
                        r9={item.data.brandColors}
                        r10={item.data.complementaryService}
                        >    
                            <ul className="text-sm flex flex-col gap-3">
                                <li className="flex flex-col">
                                    <small className="font-bold">Dev Support: </small>
                                    {item.data.devSupport}
                                </li>
                                <li className="flex flex-col">
                                    <small className="font-bold">Main Pages: </small>
                                    {...item.data.mainPages}
                                </li>
                                <li className="flex flex-col">
                                    <small className="font-bold">Major Components: </small>
                                    {...item.data.majorComponents}
                                </li>
                                <li className="flex flex-col">
                                    <small className="font-bold">Minor Components: </small>
                                    {...item.data.minorComponents}
                                </li>
                                <li className="flex flex-col">
                                    <small className="font-bold">Sub Pages: </small>
                                    {...item.data.subPages}
                                </li>
                            </ul>
                        </DashboardProfile>
                    ))
                }

                <div>
                    <EditCustomDomain />
                    <EditCustomEmail />
                </div>
            </section>
        </main>
    )
}