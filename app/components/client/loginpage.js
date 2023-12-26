'use client'
import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import Link from "next/link";
import { GiSpades } from "react-icons/gi";
import { InputAdornment, TextField } from "@mui/material";
import { RiAccountCircleLine } from 'react-icons/ri';
import { signIn } from 'next-auth/react';
import ActivityIndicator from "@/app/components/activity-indicator";
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
            <h1 className="flex items-center gap-1 px-2 justify-center text-[#de4f0a] text-center my-5 text-2xl">LOGIN<GiSpades /></h1>
            <div className="w-full flex flex-col items-center justify-center gap-5 my-5 px-1">
                <form 
                onSubmit={handleSubmit}
                className="bg-[wheat] flex flex-col items-center shadow-lg shadow-gray-800 gap-3 p-3 rounded-lg">
                <div className="lg:grid md:grid md:grid-cols-2 flex flex-col gap-3">
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
                <p className="text-center">Don't have a current development? Create one <Link href={'web-development/application'}><i className="underline text-[#de4f0a]">here</i></Link></p>
                
                <VisitHomePage />
                
            </div>
        </>
    )
}