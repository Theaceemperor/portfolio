'use client'

import React from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { TextField,Select,MenuItem } from "@mui/material";
import { TbGiftCardFilled } from "react-icons/tb";
import { ContactUs } from "@/components/ReusableComponents";
import Payment from "@/components/payment";

const validationRules = yup.object().shape({
    email:yup.string().required('This field is required'),
})

export default function GiftCard() {
    const [amount, setAmount] = React.useState('');
    const [currency, setCurrency] = React.useState('');

    const {handleBlur, handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues: {currency: currency, amount: amount, email: ''},
        onSubmit: values => {
            
        },
        validationSchema:validationRules
    });

    const orderDetails = {
        currency: currency,
        amount: amount,
        email: values.email
    }

    const handleSuccessFunction = () => {
        setAmount('');
        setCurrency('');
        values.email('');
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const changedAmount = amount*100;
    const convertedAmount = changedAmount*1550;

    return (
        <>
            <main className="px-2">
                <blockquote className="flex justify-center items-center mt-8">
                    <h1 className="flex gap-1 justify-center items-center mb-4">Purchase Spades gitft-card <TbGiftCardFilled 
                    className="text-amber-600 text-xl"/> </h1>   
                </blockquote>
                <div className="flex items-center justify-center">
                    <form className="bg-wheat flex flex-col space-y-4 items-center rounded-lg p-4" onSubmit={handleSubmit}>
                        <div className="gap-4 grid grid-cols-2">
                            <div className="text-gray-800 flex flex-col space-y-2 items-center">
                                <small className="font-bold">Currency</small>
                                <Select
                                    labelId="currency"
                                    id="currency"
                                    value={currency}
                                    onChange={handleCurrencyChange}
                                    className="w-[100px]"
                                    >
                                    <MenuItem value="">
                                        <em>Currency</em>
                                    </MenuItem>
                                    <MenuItem value={'$'}>$</MenuItem>
                                </Select>
                                
                                {errors.currency && touched.currency
                                ? <span className="text-red-500">{errors.currency}</span> : null}

                            </div>
                            <div className="text-gray-800 flex flex-col space-y-2 items-center">
                                <small className="font-bold">Amount</small>
                                <Select
                                labelId="amount"
                                id="amount"
                                value={amount}
                                onChange={handleAmountChange}
                                className="w-[100px]"
                                >
                                <MenuItem value="">
                                    <em>Amount</em>
                                </MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={25}>25</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                                <MenuItem value={200}>200</MenuItem>
                                <MenuItem value={500}>500</MenuItem>
                            </Select>

                            {errors.amount && touched.amount
                            ? <span className="text-red-500">{errors.amount}</span> : null}

                            </div>
                        </div>
                        <TextField 
                        id="email"
                        variant="filled"
                        label="Enter receipient Email address"
                        required
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />

                        {errors.email && touched.email
                        ? <span className="text-red-500">{errors.email}</span> : null}
                        
                        <Payment amount={convertedAmount} email={values.email} orderDetails={orderDetails} name={'Spades Gift Card'} successFunction={handleSuccessFunction} />

                    </form>
                </div>
                <article className="flex flex-col space-y-2 items-center w-full justify-center mt-4 px-2">
                        <h4 className="text-center border-x border-[#be4f0a] px-4 py-1 rounded-lg">OR</h4>
                        <ContactUs/>
                </article>
            </main>
        </>
    )
}