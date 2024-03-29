'use client'
import React from "react";
import { useSession } from "next-auth/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";
import { CgLink, CgProfile } from "react-icons/cg";
import Link from "next/link";
import { GiSpades } from "react-icons/gi";
import { DashboardProfile } from "./ReusableComponents";

export function ShortProfile() {
    const { data:session } = useSession();

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
        <section>
            {
                dev.map(item => (
                    <DashboardProfile key={item.id}
                    icon={<CgProfile />}
                    header={"Profile"}
                    sidetext={<span className="flex items-center">Welcome to Spades Dev <GiSpades className="text-xl" /></span>}
                    l1={'User: '}
                    r1={ session?.user.name }
                    l2={'Company Name: '}
                    r2={ item.data.compname }
                    l3={'Company Description: '}
                    r3={ item.data.compdesc }
                    l4={'Email: '}
                    r4={ session?.user.email }
                    l5={'Web Category: '}
                    r5={ item.data.category }
                    l6={'Company Address: '}
                    r6={ item.data.compaddress }
                    l7={'Phone Number: '}
                    r7={ item.data.phone }
                    l8={'Custom Email: '}
                    r8={ item.data.customEmail }
                    >
                        <Link href={'/settings'} className="underline underline-offset-4 flex items-center justify-center decoration-amber-600">edit profile information <CgLink /></Link>
                    </DashboardProfile>
                ))
            }
        </section>
    )
}
