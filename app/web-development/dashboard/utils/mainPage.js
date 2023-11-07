'use client'
import React, { Suspense } from "react";
import { FaBuysellads, FaShoppingCart } from "react-icons/fa";
import { BlogLink, ButtonLink, H1Link } from "@/app/projects/utils/links";
import { IoMdCart } from "react-icons/io";
import { GiChatBubble } from "react-icons/gi";
import { VisitHomePage } from "@/app/projects/utils/loginQuest";
import Link from "next/link";
import { CgProfile } from 'react-icons/cg';
import { BiLogOutCircle } from "react-icons/bi";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";
import { signOut, useSession } from "next-auth/react";
import { OnLoginNotification } from "@/app/components/alert";
import { DevPop } from "@/app/components/poppers";
import Timer from "@/app/components/countdown-timer";
import DashboardProfile from "./dashboardProfile";
import DialogSlide from "@/app/components/Dialog";
import { useRouter } from "next/navigation";
import { ActivityIndicator2, ActivityIndicator3 } from "@/app/components/activity-indicator";



export default function MainDashboard() {
    const {data:session} = useSession();
    const router = useRouter();

    const [ showDialogAlert, setShowDialogAlert ] = React.useState(false);

    const handleCloseDialogAlert = () => {
        setShowDialogAlert(false);
    }

    const handleOpenDialogAlert = () => {
        setShowDialogAlert(true);
    }

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
        <>
            <main>
                <blockquote className="my-5">
                    <h3 className="flex flex-row gap-2 items-center px-5"> <CgProfile /> { session?.user.email }
                        <BiLogOutCircle className="text-xl text-[#de4f0a]"
                        onClick={() => signOut()}
                        />
                    </h3>
                </blockquote>
                <OnLoginNotification 
                alertTitle={"Successfully logged in"}
                >
                    <span>
                        Logged in as {session?.user.name}
                    </span>
                </OnLoginNotification>
                <div className="w-full flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-5 px-3 my-5">
                    {
                        dev.map(item => (
                            <DashboardProfile key={item.id}
                            icon={<CgProfile />}
                            header={"Profile"}
                            sidetext={"Welcome to Spades"}
                            r1={ session?.user.name }
                            r2={ item.data.compname }
                            r3={ item.data.compdesc }
                            r4={ session?.user.email }
                            r5={ item.data.category }
                            />
                        ))
                    }
                    {
                        dev.map(item => (
                            <DashboardProfile  key={item.id}
                            header={"Current Development"}
                            l1={"status: "}
                            l2={"Progress: "}
                            l3={"Completed Features: "}
                            l4={"Features requested"}
                            l5={"Dev time: "}
                            l6={"Dev time left: "}
                            r1={item.data.status}
                            r2={parseInt(item.data.progress)}
                            r3={item.data.features_completed}
                            r4={item.data.featuresreq}
                            r5={item.data.devtime}
                            r6={item.data.devrem}
                            >
                                <p><Link
                                href={item.data.devlink}
                                className="underline decoration-[#de4f0a]"
                                >view this development</Link></p>
                            </DashboardProfile>
                        ))
                    }
                </div>

                <div className="my-5 flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-5 px-5">
                        <DashboardProfile 
                        header={"Your gift-cards"}
                        l1={"Amount: "}
                        r1={"$0"}
                        l2={"Count: "}
                        r2={"0"}
                        >
                            <small><button><i className="underline decoration-[#de4f0a]">expand</i></button></small>
                            <FaShoppingCart />

                        </DashboardProfile>
                        <blockquote className="flex flex-col gap-5 items-center justify-center"> 
                            <DevPop />

                            <H1Link 
                            icon={<IoMdCart />} 
                            targetLink={"/gift-purchase"}
                            text={"Shop Giftcards"} 
                            />

                            <BlogLink />
                            
                            <H1Link 
                            icon={<FaBuysellads className="text-xl text-[#de4f0a]"/>} 
                            text={"Post ads"} 
                            targetLink={"/contact"}/>
                        </blockquote>
                    {
                        dev.map((item) => (
                            <Timer key={item.id}
                            time={item.data.managementtime}
                            eventImage={"/img/cta.png"}
                            event={"Web Management period available"}
                            />
                        ))
                    }
                </div>
            
                <ButtonLink 
                icon={<GiChatBubble />}
                text={"Chat with a developer"}
                targetLink={handleOpenDialogAlert}
                />
                
                <span className="flex items-center flex-col gap-2 mt-3">
                    <VisitHomePage />
                </span>
            </main>
            <DialogSlide handleClose={handleCloseDialogAlert}
            open={showDialogAlert}
            header={'Chat with a dev'} 
            text={
                <span>
                    <p>Will you like to chat with a developer? please click the open button to begin conversation. Let us know if you need any direct help or questions. Thank you for using spades Dev!</p>
                </span>
            }
            buttonAction={() => router.push('https://wa.me/message/LLABQR53DPNME1')}
            />
        </>
    )
}