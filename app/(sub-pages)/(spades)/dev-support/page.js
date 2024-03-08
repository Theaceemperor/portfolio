'use client'

import React from "react";
import * as yup from 'yup';
import { useSession } from "next-auth/react";
import ActivityIndicator from "@/components/activity-indicator";
import { useFormik } from "formik";
import { ticketGen } from "@/assets/codeGen";
import { OnLoginNotification } from "@/components/alert";
import Customdialog from "@/components/CustomDialog";
import { GiSpades } from "react-icons/gi";
import { addDoc, collection } from "firebase/firestore";

const validationRules = yup.object().shape({
    supportSubject:yup.string().required('This field is required.'),
    supportMessage:yup.string().required('What would you like support with?').max(4000)
});

export default function DevSupportPage() {
    const { data:session } = useSession();
    const generateTicket = ticketGen();
    const [ticketNumber,setTicketNumber] = React.useState(generateTicket);
    const [ showAlertDialog, setShowAlertDialog ] = React.useState(false);
    const [showActivityIndicator,setShowActivityIndicator] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleCloseDialog = () => setOpenDialog(false);
    const [openFailDialog, setOpenFailDialog] = React.useState(false);
    const handleCloseFailDialog = () => setOpenFailDialog(false);

    const {handleBlur, handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues: {supportSubject: '', supportMessage: ''},
        onSubmit: values => {
           try {
                const handleApiSubmit = async (e) => {
                    e.preventDefault();
                    setShowActivityIndicator(true);

                    const content = {
                        name: session?.user.name,
                        email: session?.user.email,
                        ticketNumber: ticketNumber,
                        subject: values.supportSubject,
                        message: values.supportMessage
                    }
            
                    const response = await fetch('/api/dev-support', {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                        },
                        body:JSON.stringify({
                            content,
                        })
                    }).then( async () => {
                        await addDoc(collection(db,'support-tickets'), {
                            user: session.user.email,
                            ticket: ticketNumber,
                            subject: values.supportSubject,
                            date: new Date().getTime()
                        });
                        setOpenDialog(true);
                        setShowAlertDialog(true);
                    }).catch((e) => {setOpenFailDialog(true)});
            
                    setShowActivityIndicator(false);
            
                    // Clear the form fields
                    handleChange('')
                }; handleApiSubmit();
           } catch (error) {
                console.error(error);
           }
        },
        validationSchema:validationRules
    });

    return (
        <div className="container mx-auto px-2 sm:px-0 flex flex-col justify-center items-center max-w-lg">
            <div className="flex mt-8 font-bold text-2xl">{`<> `} <h1 className="mx-2">Dev Support</h1> {` </>`}</div>
            {
                showActivityIndicator
                ?
                <ActivityIndicator />
                :
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4 bg-wheat p-4 max-w-lg rounded shadow-md shadow-amber-600 text-gray-800 w-full">
                    <div className="mb-4">
                        <label htmlFor="devName" className="block font-semibold mb-2">Name</label>
                        <input
                        id="devName"
                        name="devName"
                        type="text"
                        placeholder="Name"
                        className="p-2 border rounded w-full outline-none" 
                        readOnly
                        value={session?.user.name}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="devEmail" className="block font-semibold mb-2">Email</label>
                        <input
                        id="devEmail"
                        name="devEmail"
                        type="email"
                        placeholder="Email"
                        className="p-2 border rounded w-full outline-none"
                        readOnly
                        value={session?.user.email} 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ticketNumber" className="block font-semibold mb-2">Ticket Number</label>
                        <input
                        id="ticketNumber"
                        name="ticketNumber"
                        type="text"
                        placeholder="Ticket Number"
                        className="p-2 border rounded w-full outline-gray-500 outline-1"
                        value={ticketNumber}
                        readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="supportSubject" className="block font-semibold mb-2">Subject</label>
                        <input
                        id="supportSubject"
                        name="supportSubject"
                        type="text"
                        placeholder="Subject"
                        className="p-2 border rounded w-full outline-gray-500 outline-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.supportSubject}
                        required 
                        />
                    </div>
                    
                    {errors.supportSubject && touched.supportSubject
                    ? <span className="text-red-500">{errors.supportSubject}</span> : null}
                    
                    <div className="mb-4">
                        <label htmlFor="supportMessage" className="block font-semibold mb-2">Message</label>
                        
                        {errors.supportMessage && touched.supportMessage
                        ? <span className="text-red-500">{errors.supportMessage}</span> : null}

                        <textarea
                        id="supportMessage"
                        name="supportMessage"
                        required
                        draggable={false}
                        rows={6}
                        placeholder="Message"
                        className="p-2 border rounded w-full outline-gray-500 outline-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.supportMessage} 
                        />
                    </div>
                    
                    <button type="submit" className="px-6 py-2 bg-amber-600 text-black rounded-md font-semibold hover:bg-wheat hover:shadow-md hover:shadow-amber-600 transition duration-300 ease-in-out">Generate Ticket</button>
                </form>
            }
            {
                showAlertDialog
                ?
                <OnLoginNotification alertTitle={'Ticket Generated'}>
                    <span>Your message was sent successfully!</span>
                </OnLoginNotification>
                :
                null
            }
            <Customdialog
                openProp={openDialog} 
                handleCloseProp={handleCloseDialog} 
                title={<span className='flex items-center text-amber-600'>SP <GiSpades />DES</span>}>
                    We'll respond via email soon! You can check the status of this ticket on your dashboard.
            </Customdialog>
            <Customdialog
                openProp={openFailDialog} 
                handleCloseProp={handleCloseFailDialog} 
                title={<span className='flex items-center text-amber-600'>SP <GiSpades />DES</span>}>
                    Action failed, please try again later!
            </Customdialog>
        </div>
    )
}