'use client'
import React from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { TextField,Button,Select,MenuItem } from "@mui/material";
import { TbGiftCardFilled } from "react-icons/tb";
import { AdsNotification } from "../components/alert";
import { ContactUs, FileUpload1, MyGiftProducts } from "../components/client/ReusableComponents";

const validationRules = yup.object().shape({
    email:yup.string().required('This field is required'),
})

export default function GiftCard() {
    const [amount, setAmount] = React.useState('');
    const [currency, setCurrency] = React.useState('');

    const {handleBlur, handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues: {currency: currency, amount: amount, email: ''},
        onSubmit: values => {
           try {
                console.log(values);
           } catch (error) {
                console.error(error);
           }
        },
        validationSchema:validationRules
    });

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
            <main>
                <blockquote className="flex justify-center items-center my-5">
                    <h1 className="flex gap-1 justify-center items-center px-5">Purchase Spades gitft-card <TbGiftCardFilled 
                    className="text-[#de4f0a] text-xl"/> </h1>   
                </blockquote>
                <AdsNotification 
                alertTitle={"Website in few flicks"}
                >
                    <span>Grow your network in a few clicks by getting a professional website for yourself or business </span> 
                </AdsNotification>
                <blockquote className="flex flex-col lg:flex-row md:flex-row gap-3 items-center justify-center my-5">
                    <MyGiftProducts />
                </blockquote>
                <div className="w-full flex my-5 items-center justify-center">
                    <form className="bg-[wheat] flex flex-col gap-5 p-5 items-center rounded-lg" onSubmit={handleSubmit}>
                        <div className="gap-5 items-center grid grid-cols-2">
                        <div className="text-gray-800 flex flex-col gap-1 items-center">
                            <small className="font-bold">Currency</small>
                            <Select
                                labelId="demo-simple-select-filled-label"
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
                        <div className="text-gray-800 flex flex-col gap-1 items-center">
                            <small className="font-bold">Amount</small>
                            <Select
                            labelId="demo-simple-select-filled-label"
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
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />

                        {errors.email && touched.email
                        ? <span className="text-red-500">{errors.email}</span> : null}

                        <span className="text-center text-sm text-black flex flex-col gap-1 items-center justify-center">
                            <b>Upload transaction confirmation/hash</b>
                            <br />
                            <h5>Pay to the following bitcoin wallet</h5>
                            <p>copy and paste the below wallet and send bitcoin only!</p>
                            <input 
                            readOnly={true}
                            value={"bc1qjef244zt8glzk3z80d6x50sryeufkuc8kfxtss"}
                            className="w-full border-y text-center border-[#de4f0a] py-1 px-2 rounded-lg bg-transparent"
                            />
                        </span>
                        
                        <span className="text-center text-sm text-black flex flex-col gap-1 items-center justify-center">
                            <h5>Pay to the following USDT [ERC20] wallet</h5>
                            <p>copy and paste the below wallet and send USDT [ERC20] only!</p>
                            <input 
                            readOnly={true}
                            value={"0xec10Ed071DAA66d1d6C540Cebf899b56cCCE5444"}
                            className="w-full border-y text-center border-[#de4f0a] py-1 px-2 rounded-lg bg-transparent"
                            />
                        </span>
                        
                        <FileUpload1 />
                        
                        <Button type="submit"
                        style={{
                             color: 'black'
                        }}>
                            Proceed
                        </Button>

                    </form>
                </div>
                <article className="flex flex-col gap-5 items-center w-full justify-center my-5 px-2">
                    <div className="flex flex-col items-center justify-center gap-5">
                        
                        <form className="flex flex-col items-center justify-center gap-3 text-center">
                            
                        </form>
                        <h4 className="text-center border-x border-[#be4f0a] px-5 py-1 rounded-lg">OR</h4>
                        <ContactUs text={"to complete purchase"}/>
                    </div>
                </article>
            </main>
        </>
    )
}