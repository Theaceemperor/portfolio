'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";
import { LoginQuest } from "../components/spadesLinks";
import { LoginButton, VisitHomePage } from "../projects/utils/loginQuest";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";


export default function Page() {
    const [email,setEmail] = React.useState([]);
    const [firstName,setFirstName] = React.useState([]);
    const [lastName,setLastName] = React.useState([]);
    const [message,setMessage] = React.useState([]);

    const handlePostMessage = async () => {
        await addDoc(collection(db,'messages'), {
            owner:email,
            first_name:firstName,
            last_name:lastName,
            body:message,
            sentAt:new Date().getTime(),
        }).then(async () => {
            alert('Your message was sent successfully');
            setEmail('');
            setFirstName('');
            setLastName('');
            setMessage('');
        })
        .catch('Please try again in 3 minutes.')
    }

    return (
        <>
            <main>
                <div className="flex flex-col justify-center items-center text-center px-1">
                    <h1 className="text-2xl w-[fit-content] px-2 border-y border-amber-600 rounded-md my-8 py-1">CONTACT US</h1>
                    <p>Write a message or give us some feedback/review</p>
                </div>
                <div className="flex flex-col p-3 text-center items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col shadow-xl gap-5 rounded-lg py-3 px-1">
                        <blockquote className="text-center flex flex-col items-center">
                            <h3 className="font-bold text-lg">Email Address</h3>
                            <p>spadesinstitute.empire@gmail.com</p>
                        </blockquote>
                        <blockquote className="text-center flex flex-col items-center gap-1">
                            <h3 className="font-bold text-lg">Socials</h3>
                            <ul className="flex gap-5">
                                <li>
                                    <Link className="share-img" href="https://twitter.com/@spadeshub"><Image 
                                        className="w-[40px] h-[40px] rounded-full bg-black z-20 border-2 border-[#be4f0a]" 
                                        src="/img/x-logo.jfif" 
                                        alt="email" 
                                        width={35} height={35} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="share-img" href="https://wa.me/message/LLABQR53DPNME1">
                                        <Image 
                                        className="w-[40px] h-[40px] rounded-full bg-black z-20 border-2 border-[#be4f0a]" 
                                        src="/img/SPADES3.png" 
                                        alt="email"
                                        width={35} height={35} 
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

                            <Button 
                            variant="outlined"
                            onClick={() => handlePostMessage()}
                            color="warning"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col items-center my-5 justify-center lg:flex-row md:flex-row gap-5">
                    <LoginButton />
                    <VisitHomePage />
                </div>
                <div className="flex items-center justify-center my-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244303439!2d7.367465296507847!3d9.024416367940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1697757271444!5m2!1sen!2sng" width="640" height="480" className="max-w-[95%] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[500px] h-auto rounded-lg shadow-md shadow-amber-600"></iframe>
                </div>
            </main>
        </>
    )
}