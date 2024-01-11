'use client'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import ActivityIndicator from '@/app/components/activity-indicator';
import Link from 'next/link';
import { Button, InputAdornment, TextField } from '@mui/material';
import { RiAccountCircleLine } from 'react-icons/ri';
import { AdsBadge } from '@/app/components/alert';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { db, storage } from '@/settings/firebase.settings';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { FileUpload1, WebCategories } from '@/app/components/client/ReusableComponents';

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

const options = [ 'Blog', 'Booking/Consultation', 'Custom', 'E-commerce', 'Fitness', 'Hire Services', 'Insights/Analytics', 'Interior Decor', 'Landing Page', 'NGO', 'Portfolio', 'Real Estate Agency', 'Restaurant/Cafe', 'Spa', 'Spa & Fitness', ];

const timeOptions = [
    '$500 - $1999', '$2000 - $4999', '$5000 - $9999', 'custom'
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
            budget:timeValue,
            devtime:'waiting...',
            devrem: 'waiting...',
            status: 'waiting...',
            progress: 1,
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
        <main>
            <blockquote className="relative top-4 left-4 max-w-[90%] sm:max-w-[300px] overflow-hidden">
                <AdsBadge 
                alertTitle={"Get a Website 50% off"}
                >
                    <small>Did you know with spades you can get a website built almost free?
                        We offer premium web development services and management</small> 
                </AdsBadge>
            </blockquote>
            
            <div className="my-5 p-2">
                <h1 className="text-center font-bold">WEB DEVELOPMENT APPLICATION</h1>
                <form className="p-2 sm:p-5 flex flex-col mt-4 items-center justify-center gap-5 bg-wheat rounded-lg shadow-lg shadow-black/70 "
                onSubmit={handleSubmit}>
                    <h3 className="text-gray-800 text-center font-bold text-lg">FILL AND SUBMIT TO PROCEED</h3>
                    <div className="lg:grid md:grid md:grid-cols-2 flex flex-col gap-5 w-full">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                        id="compEmail" 
                        label="Company Email"
                        type="email" 
                        variant="filled" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.compEmail}
                        />
                        {errors.compEmail && touched.compEmail
                        ? <span className="text-red-500">{errors.compEmail}</span> : null}

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

                        <WebCategories
                        value={value} 
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        label={"Web Category"}
                        options={options}
                        />
                        
                        <FileUpload1 text={"Upload Logo"} selectedFile={imageToPost}/>
                        
                        <WebCategories
                        value={timeValue} 
                        onChange={(event, newValue) => {
                            setTimeValue(newValue);
                          }}
                          label={"Budget"}
                          options={timeOptions}
                        />

                    </div>
                    <TextField 
                    required
                    id="compDesc" 
                    label="Company Description"
                    multiline={true} 
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.compDesc} 
                    className='w-full'
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
                    className='w-full' 
                    />
                    {errors.compAddress && touched.compAddress
                    ? <span className="text-red-500">{errors.compAddress}</span> : null}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                <p className="my-5 text-center px-2">Tap on the spades icon to login or login <Link href={'/web-development'}><i className="underline text-amber-600">here</i></Link></p>
            </div>
        </main>
    )
}
        