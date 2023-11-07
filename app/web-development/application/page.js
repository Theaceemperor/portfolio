'use client'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import ActivityIndicator from '@/app/components/activity-indicator';
import Link from 'next/link';
import { Button, InputAdornment, TextField } from '@mui/material';
import { RiAccountCircleLine } from 'react-icons/ri';
import WebCategories from '../utils/webCategories';
import { FileUpload1 } from '../utils/uploadBtn';
import { AdsBadge } from '@/app/components/alert';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { db, storage } from '@/settings/firebase.settings';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { CgLink } from 'react-icons/cg';

const validationRules = yup.object().shape({
    firstName:yup.string().required('this is a required field'),
    lastName:yup.string().required('this is a required field'),
    compPhone:yup.string().required('this is a required field'),
    compName:yup.string().required('this is a required field'),
    compDesc:yup.string().required('this is a required field').min(120, 'minimum of 120 characters').max(1500, 'maximum of 1500 characters'),
    compAddress:yup.string().required('this is a required field'),
    compEmail:yup.string().required(),
    password:yup.string().required().min(8, 'minimum of 8 characters').max(36, 'maximum of 36 characters')
    .oneOf([yup.ref('passwordConfirmation'),null], "password dosen't match")
})

const options = [ 'Personal Web', 'Landing Page', 'Portfolio Site', 'Spa', 'Custom', 'Booking/Consultation', 'Blog', 'Real Estate Agency', 'NGO', 'Restaurant/Cafe', 'E-commerce', 'Landing x Portfolio', 'Ticket Purchse', 'Interior Decor', 'Ads & Traffic', 'Event & Planning', 'Recipe', 'Voting', 'Social', 'Donation', 'Campaign', 'Mobile Bank/Wallet' ];

const timeOptions = [
    '30 days', '60 days', '90 days', '120 days'
]

const typeOptions = [
    'Private', 'Public', 'Commercial'
]

export default function Page() {
    const router = useRouter();
    const [value, setValue] = React.useState(options[0]);
    const [selectedFile,setSelectedFile] = React.useState(null);
    const [showActivityIndicator,setShowActivityIndicator] = React.useState(false);

    const handleCloseAlertDialog = () => {
        setShowAlertDialog(false);
    }

    const [ timeValue,setTimeValue ] = React.useState(timeOptions[0])
    const [ privacy,setPrivacy ] = React.useState(typeOptions[0])

    const imageToPost = (e) => {
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readEvent) => {
            setSelectedFile(readEvent.target.result);
        }
    }

    const handleCreateUser = async () => {
        setShowActivityIndicator(true);
        const docRes = await addDoc(collection(db,'users'),{
            name:values.firstName + ' ' + values.lastName,
            compname:values.compName,
            compdesc:values.compDesc,
            compaddress:values.compAddress,
            phone:values.compPhone,
            managementtime: null,
            devtime:timeValue,
            devrem: 'waiting...',
            status: 'waiting...',
            progress: '0',
            devlink: '#',
            category:value,
            logo:null,
            email:values.compEmail,
            password:values.password,
            role:'user',
            joinedAt:new Date().getTime(),

        });
        const imageRef = ref(storage,`user/${docRes.id}/logo`);

        await uploadString(imageRef,selectedFile,'data_url')
        .then(async () => {
            const imgUrl = await getDownloadURL(imageRef);
            updateDoc(doc(db,'users',docRes.id),{
                logo:imgUrl,
            });
            router.push('/web-development/application/next-step');
            setShowActivityIndicator(false);
        })
        .catch((e) => console.error(e))
    }

    const {handleBlur, handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues: { firstName: '', lastName: '', compEmail: '', compPhone: '', compName:'', compDesc:'', compAddress: '', category: '', password: '', passwordConfirmation: '', value:value },
        onSubmit: values => {
           handleCreateUser();
        },
        validationSchema:validationRules
    })

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <>
            <blockquote className="w-[50%] flex items-center justify-center">
                <AdsBadge 
                alertTitle={"Get a Website 50% off"}
                >
                    <small>Did you know with spades you can get a website built almost free?
                        We offer premium web development services and management</small> 
                </AdsBadge>
            </blockquote>
            
            <div className="w-full flex flex-col items-center justify-center px-1 my-5">
                <h1 className="text-center">WEB DEVELOPMENT APPLICATION</h1>
                <h3 className="text-center py-2 text-md underline underline-offset-2"><Link href={'#apply'} className='flex justify-center items-center text-amber-600'>Get your desired web page in just a few clicks <CgLink /></Link></h3>
                <form className="p-2 md:p-5 lg:p-5 flex flex-col gap-5 bg-[wheat] rounded-lg shadow-lg shadow-black/70"
                onSubmit={handleSubmit}>
                    <h3 className="text-gray-800 text-center font-bold text-lg">FILL AND SUBMIT TO PROCEED</h3>
                    <div className="lg:grid  md:grid md:grid-cols-2 flex flex-col gap-5 w-full">
                        <TextField 
                        required
                        id="firstName"
                        label="First Name" 
                        variant="filled"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName} 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <RiAccountCircleLine />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {errors.firstName && touched.firstName
                        ? <span className="text-red-500">{errors.firstName}</span> : null}

                        <TextField
                        required 
                        id="lastName"
                        label="Last Name" 
                        variant="filled" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        />
                        {errors.lastName && touched.lastName
                        ? <span className="text-red-500">{errors.lastName}</span> : null}

                    </div>
                    <div className=" lg:grid md:grid md:grid-cols-2 flex flex-col gap-5 w-full">
                        <TextField 
                        id="compEmail" 
                        label="Company Email"
                        type="email" 
                        variant="filled" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.compEmail}
                        />
                        {errors.CompEmail && touched.CompEmail
                        ? <span className="text-red-500">{errors.CompEmail}</span> : null}

                        <TextField 
                        required
                        id="compPhone" 
                        label="Company Phone" 
                        variant="filled"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.compPhone} 
                        type="tel"
                        />
                        {errors.compPhone && touched.compPhone
                        ? <span className="text-red-500">{errors.compPhone}</span> : null}

                    </div>
                    <TextField
                    required 
                    id="compName" 
                    label="Company Name" 
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.compName} 
                    />
                    {errors.compName && touched.compName
                    ? <span className="text-red-500">{errors.compName}</span> : null}

                    <TextField 
                    required
                    id="compDesc" 
                    label="Company Description"
                    multiline={true} 
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.compDesc} 
                    />
                    {errors.compDesc && touched.compDesc
                    ? <span className="text-red-500">{errors.compDesc}</span> : null}

                    <TextField 
                    required
                    id="compAddress" 
                    label="Company Address"
                    multiline={true} 
                    variant="filled" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.compAddress} 
                    />
                    {errors.compAddress && touched.compAddress
                    ? <span className="text-red-500">{errors.compAddress}</span> : null}

                    <div className="flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-5">
                        <WebCategories
                        value={value} 
                        onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          label={"Web category/type"}
                          options={options}
                          />
                        <FileUpload1 text={"Upload Logo"} selectedFile={imageToPost}/>
                    </div>
                    
                    <div className="flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-5 w-full">
                        <WebCategories
                        value={timeValue} 
                        onChange={(event, newValue) => {
                            setTimeValue(newValue);
                          }}
                          label={"Select Dev time"}
                          options={timeOptions}
                        />
                        <WebCategories
                        value={privacy} 
                        onChange={(event, newValue) => {
                            setPrivacy(newValue);
                          }}
                          label={"Privacy"}
                          options={typeOptions}
                        />
                    </div>

                    <div className="lg:grid md:grid md:grid-cols-2 flex flex-col gap-5 w-full">
                        <TextField 
                        required
                        id="password" 
                        label="Password" 
                        variant="filled" 
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password} 
                        />
                        {errors.password && touched.password
                        ? <span className="text-red-500">{errors.password}</span> : null}
    
                        <TextField 
                        required
                        id="passwordConfirmation" 
                        label="Password confirmation" 
                        variant="filled"
                        type="password" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirmation} 
                        />
                    </div>
                    
                    <Button 
                    color='warning'
                    type="submit">Proceed</Button>
                </form>
                <p className="my-5 text-center px-2">Have a current development? Tap on the spades icon to login or login <Link href={'/web-development'}><i className="underline text-[#de4f0a]">here</i></Link></p>
            </div>
        </>
    )
}
        