import { NextResponse } from 'next/server';
//import nodemailer from 'nodemailer';

require('dotenv').config();
const nodemailer = require('nodemailer');

const orgEmail = process.env.EMAIL;

export async function POST(request) {
    const {subject, message, email} = await request.json();

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
            subject: subject,
            text: "This is a test string",
            html: `<h3>TASTY BITE CONTACT/FEEDBACK FORM</h3><p>Sender: ${email}</p><p>${message}</p>`
        })
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: "Email Sent Successfully"}, { status: 200 })
}