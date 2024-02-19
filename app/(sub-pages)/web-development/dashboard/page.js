'use client'
import React from "react";
import { FaBuysellads, FaShoppingCart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GiChatBubble } from "react-icons/gi";
import Link from "next/link";
import { CgLink, CgProfile } from 'react-icons/cg';
import { BiLogOutCircle } from "react-icons/bi";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaLaptopCode } from "react-icons/fa6";
import { OnLoginNotification } from "@/app/components/alert";
import { ShortProfile } from "@/app/components/client/profile";
import { BlogLink, ButtonLink, DashboardProfile, DialogSlide, H1Link, VisitHomePage } from "@/app/components/client/ReusableComponents";
import { DevPop } from "@/app/components/modals";
import Timer from "@/app/components/countdown-timer";
import LinearWithValueLabel from "@/app/components/client/progress";


export default function Dashboard() {
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
                        <BiLogOutCircle className="text-xl text-amber-600"
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
                <div className="w-full flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-3 px-3 my-5">
                    <ShortProfile />
                    {
                        dev.map(item => (
                            <DashboardProfile key={item.id}
                            header={<span className="flex items-center gap-2">Current Development <FaLaptopCode className="text-2xl text-amber-600" /></span>}
                            sidetext={<span className="uppercase">{item.data.compname}</span>}
                            l1={"Deployment Status: "}
                            l2={"Dev Progress: "}
                            l3={"Completed Features: "}
                            l4={"Features Requested: "}
                            l5={"Dev Time: "}
                            l6={"Dev Time left: "}
                            l7={'Deployment Link: '}
                            r1={item.data.status}
                            r2={<LinearWithValueLabel progressValue={item.data.progress} />}
                            r3={item.data.features_completed}
                            r4={item.data.featuresreq}
                            r5={item.data.devtime}
                            r6={item.data.devrem}
                            r7={<Link
                                href={'https://' + item.data.devlink}
                                className="underline decoration-amber-600"
                                >view this development here!</Link>
                            }
                            >    
                                <Link href={'/account/dev-details'} className="underline underline-offset-4 flex items-center justify-center decoration-amber-600">View full Dev details <CgLink /></Link>
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
                            <small><button><i className="underline decoration-amber-600">expand</i></button></small>
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
                            icon={<FaBuysellads className="text-xl text-amber-600"/>} 
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