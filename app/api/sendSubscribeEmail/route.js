import { NextResponse } from 'next/server';
//import nodemailer from 'nodemailer';

require('dotenv').config();
const nodemailer = require('nodemailer');

const orgEmail = process.env.EMAIL;

export async function POST(request) {
    const { formInput } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            accessToken: process.env.ACCESS_TOKEN,
            refreshToken: process.env.REFRESH_TOKEN
        },
    });

    const mailOptions = {
        from: 'contact@tastybites.com',
        to: orgEmail,
    }

    try {
        await transporter.sendMail({
            to: "spadesinstitute.empire@gmail.com",
            subject: "NEW EMAIL SUBSCRIPTION FOR SPADES",
            text: "This is a test string",
            html: `<h3>THERE IS A NEW EMAIL NEWSLETTER SUBSCRIPTION FOR SPADES ON YOUR WEBSITE</h3><p>Website: spadeshub.com </p><p>Subscribed email: ${formInput}</p>`
        })
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: "Email Sent Successfully"}, { status: 200 })
} 