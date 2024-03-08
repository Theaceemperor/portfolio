'use client'

import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import Link from "next/link";
import { GiSpades } from "react-icons/gi";
import { InputAdornment, TextField } from "@mui/material";
import { RiAccountCircleLine } from 'react-icons/ri';
import { signIn } from 'next-auth/react';
import ActivityIndicator from "@/components/activity-indicator";
import { LoginButton, VisitHomePage } from "./ReusableComponents";

const validationRules = yup.object().shape({
    email:yup.string().required('This field is required'),
    password:yup.string().required()
});

export default function LoginPage() {
    const [showActivityIndicator,setShowActivityIndicator] = React.useState(false);

    const {handleBlur, handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: values => {
           try {
                const handlereqSubmit = async () => {
                    setShowActivityIndicator(true);
                    await signIn("sign-in", {email:values.email,password:values.password}, 
                    // {callbackUrl: "/web-development/dashboard"}
                    ).then(() => {
                        setShowActivityIndicator(false);
                    })
                }
                handlereqSubmit();
           } catch (error) {
                console.error(error);
           }
        },
        validationSchema:validationRules
    });

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <>
            <h1 className="flex items-center gap-1 px-2 justify-center text-amber-600 text-center mt-8 text-2xl">LOGIN<GiSpades /></h1>
            <div className="flex flex-col items-center justify-center gap-5 mt-4 px-2">
                <form 
                onSubmit={handleSubmit}
                className="bg-wheat flex flex-col items-center shadow-lg shadow-gray-800 gap-4 p-6 rounded-lg max-w-lg ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField 
                    id="email" 
                    label="Email" 
                    name="email"
                    variant="filled" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <RiAccountCircleLine />
                            </InputAdornment>
                        ),
                    }}
                    />
                    
                    {errors.email && touched.email
                    ? <span className="text-red-500">{errors.email}</span> : null}
                    
                    <TextField 
                    id="password" 
                    label="Password"
                    name="password" 
                    variant="filled"
                    type="password"
                    value={values.password} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    
                    {errors.password && touched.password
                    ? <span className="text-red-500">{errors.password}</span> : null}
                    
                </div>
                <LoginButton
                />
                </form>
                <p className="text-center">Don't have a development? Create <Link href={'/auth/signup'}><i className="underline text-amber-600 mt-4">here</i></Link></p>
                
                <VisitHomePage />
                
            </div>
        </>
    )
}