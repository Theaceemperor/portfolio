'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LoginButton2, VisitHomePage } from "@/app/components/client/ReusableComponents";
import { OnLoginNotification } from "@/app/components/alert";


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
            <main className="px-2 mt-8">
                <div className="mb-8 text-center gap-4 grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col shadow-lg space-y-4 rounded-lg p-2">
                        <blockquote className="text-center flex flex-col items-center">
                            <h3 className="font-bold text-lg">Email Address</h3>
                            <Link href={'mailto:spadesinstitute.empire@gmail.com'} className="hover:text-amber-600">spadesinstitute.empire@gmail.com</Link>
                            <Link href={'mailto:spadeshub.info@gmail.com'} className="hover:text-amber-600">spadeshub.info@gmail.com</Link>
                        </blockquote>
                        <blockquote className="text-center flex flex-col items-center space-y-4">
                            <h3 className="font-bold text-lg">Socials</h3>
                            <ul className="flex space-x-4">
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
                                <li>
                                    <Link href={'https://instagram.com/spadeshub?igsh=YnMwZWpmdW9mNWI3'}>
                                        <FaInstagram
                                        className="rounded-full border-2 text-wheat font-bold border-amber-600 animate-bounce text-3xl p-1 bg-black" 
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </blockquote >
                        <blockquote className="text-center flex flex-col items-center">
                            <h3 className="font-bold text-lg">Company Address</h3>
                            <p>Abuja, FCT. Nigeria.</p>
                        </blockquote>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center text-center px-1 mt-4">
                            <h1 className="text-2xl w-[fit-content] px-2 border-y border-amber-600 rounded-md mb-2 py-1">CONTACT US</h1>
                            <p className="font-medium mb-4">Write a message or give us some feedback/review</p>
                        </div>
                        <form className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                required 
                                placeholder="First Name"
                                type="text"
                                className="py-1 px-2 placeholder:text-black dark:placeholder:text-amber-600 outline-none focus:outline-none bg-transparent border-b border-amber-600"
                                onChange={(text) => setFirstName(text.target.value)}
                                value={firstName}
                                />
                                <input 
                                required
                                placeholder="Last Name"
                                type="text"
                                className="py-1 px-2 placeholder:text-black dark:placeholder:text-amber-600 outline-none focus:outline-none bg-transparent border-b border-amber-600"
                                onChange={(text) => setLastName(text.target.value)}
                                value={lastName}
                                />
                            </div>
                            <input 
                            required
                            className="py-1 px-2 placeholder:text-black dark:placeholder:text-amber-600 outline-none focus:outline-none bg-transparent border-b border-amber-600"
                            placeholder="Email Address"
                            type="Email"
                            onChange={(text) => setEmail(text.target.value)}
                            value={email}/>

                            <textarea
                            required 
                            placeholder="Your Message"
                            className="py-1 px-2 placeholder:text-black dark:placeholder:text-amber-600 outline-none focus:outline-none bg-transparent border-b border-amber-600"
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

                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LoginButton2 />
                    <VisitHomePage />
                </div>
                {/* <div className="flex items-center justify-center mb-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244303439!2d7.367465296507847!3d9.024416367940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1697757271444!5m2!1sen!2sng" width="640" height="480" className="max-w-[95%] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[500px] h-auto rounded-lg shadow-md shadow-amber-600"></iframe>
                </div> */}
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