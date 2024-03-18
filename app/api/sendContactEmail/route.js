import { NextResponse } from 'next/server';

require('dotenv').config();
const nodemailer = require('nodemailer');

export async function POST(request) {
    const {name, subject, message, email} = await request.json();

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
            refreshToken: process.env.REFRESH_TOKEN,
            expires: 1710723000000
        },
    });

    try {
        await transporter.sendMail({
            to: process.env.EMAIL,
            subject: subject,
            text: "This is a test string",
            html: `<h3>NEW ENTRY FROM SPADES CONTACT/FEEDBACK FORM</h3><p>Sender: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`
        })
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: "Email Sent Successfully"}, { status: 200 })
}