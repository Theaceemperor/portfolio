'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";
import { FaXTwitter } from "react-icons/fa6";
import { OnLoginNotification } from "../components/alert";
import { LoginButton, LoginButton2, VisitHomePage } from "../components/client/ReusableComponents";


export default function Page() {
    const [email,setEmail] = React.useState([]);
    const [firstName,setFirstName] = React.useState([]);
    const [lastName,setLastName] = React.useState([]);
    const [message,setMessage] = React.useState([]);
    const [ showAlertDialog, setShowAlertDialog ] = React.useState(false);

    const handlePostMessage = async () => {
        await addDoc(collection(db,'messages'), {
            owner:email,
            first_name:firstName,
            last_name:lastName,
            body:message,
            sentAt:new Date().getTime(),
        }).then(async () => {
            setShowAlertDialog(true);
            setEmail('');
            setFirstName('');
            setLastName('');
            setMessage('');
            setTimeout(() => {
                setShowAlertDialog(false);
            }, 5000);
        })
        .catch(() => {
            alert('Please try again in 3 minutes.')
        })
    }

    return (
        <>
            <main className="px-2">
                <div className="flex flex-col my-10 p-3 text-center items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col shadow-xl gap-5 rounded-lg p-3">
                        <blockquote className="text-center flex flex-col items-center">
                            <h3 className="font-bold text-lg">Email Address</h3>
                            <Link href={'mailto:spadesinstitute.empire@gmail.com'} className="hover:text-amber-600">spadesinstitute.empire@gmail.com</Link>
                        </blockquote>
                        <blockquote className="text-center flex flex-col items-center gap-2">
                            <h3 className="font-bold text-lg">Socials</h3>
                            <ul className="flex gap-5">
                                <li>
                                    <Link href={'https://twitter.com/@spadeshub'}>
                                        <FaXTwitter
                                        className="rounded-full border-2 text-[wheat] bg-black font-bold border-amber-600 animate-bounce text-3xl p-1"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'https://wa.me/message/LLABQR53DPNME1'}>
                                        <Image 
                                        src={'/img/SPADES3.png'}
                                        alt="logo"
                                        width={500}
                                        height={500}
                                        className="rounded-full border-2 border-amber-600 animate-bounce w-8 h-8"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'https://nexvault.vercel.app'}><Image priority src={'/nexvault_icon.ICO'} alt='NexVault' width={500} height={500} className='w-7 h-7 animate-bounce dark:bg-wheat rounded-full dark:border-2 dark:border-amber-600' /></Link>
                                </li>
                            </ul>
                        </blockquote >
                        <blockquote className="text-center flex flex-col items-center">
                            <h3 className="font-bold text-lg">Company Address</h3>
                            <p>Abuja, FCT. Nigeria.</p>
                        </blockquote>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center text-center px-1">
                            <h1 className="text-2xl w-[fit-content] px-2 border-y border-amber-600 rounded-md my-8 py-1">CONTACT US</h1>
                            <p className="font-bold">Write a message or give us some feedback/review</p>
                        </div>
                        <form className="flex flex-col gap-5 p-1">
                            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-5 md:gap-3 lg:gap-3 w-full">
                                <input
                                required 
                                placeholder="First Name"
                                type="text"
                                className="py-1 px-3 bg-transparent border-b border-[#be4f0a]"
                                onChange={(text) => setFirstName(text.target.value)}
                                value={firstName}
                                />
                                <input 
                                required
                                placeholder="Last Name"
                                type="text"
                                className="py-1 px-3 bg-transparent border-b border-[#be4f0a]"
                                onChange={(text) => setLastName(text.target.value)}
                                value={lastName}
                                />
                            </div>
                            <input 
                            required
                            className="py-1 px-3 bg-transparent border-b border-[#be4f0a]"
                            placeholder="Email Address"
                            type="Email"
                            onChange={(text) => setEmail(text.target.value)}
                            value={email}/>

                            <textarea
                            required 
                            placeholder="Your Message"
                            className="border-b border-[#be4f0a] bg-transparent px-1 py-2"
                            onChange={(text) => setMessage(text.target.value)}
                            value={message}
                            />

                            {
                                message.length && email.length > 0
                                ?
                                <Button 
                                variant="outlined"
                                onClick={() => handlePostMessage()}
                                color="warning"
                                >
                                Submit
                            </Button>
                            :
                            null
                            }
                        </form>
                    </div>
                </div>

                <div className="flex flex-col items-center my-5 justify-center lg:flex-row md:flex-row gap-5">
                    <LoginButton2 />
                    <VisitHomePage />
                </div>
                <div className="flex items-center justify-center my-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244303439!2d7.367465296507847!3d9.024416367940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1697757271444!5m2!1sen!2sng" width="640" height="480" className="max-w-[95%] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[500px] h-auto rounded-lg shadow-md shadow-amber-600"></iframe>
                </div>
            </main>
            {
                showAlertDialog
                ?
                <OnLoginNotification alertTitle={'Message sent'}>
                    <span>Your message was sent successfully!</span>
                </OnLoginNotification>
                :
                null
            }
        </>
    )
}