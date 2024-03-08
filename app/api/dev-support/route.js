import { NextResponse } from 'next/server';

require('dotenv').config();
const nodemailer = require('nodemailer');

export async function POST(request) {
    const { content } = await request.json();

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

    try {
        await transporter.sendMail({
            to: process.env.DEV_SUPPORT_EMAIL,
            subject: subject,
            text: "Dev Support",
            html: `<h3>NEW ENTRY FOR DEV SUPPORT</h3><p>Sender: ${content.name}</p><p>Email: ${content.email}</p><p>Subject: ${content.subject}</p><p>Message: ${content.message}</p>`
        })
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: "Email Sent Successfully"}, { status: 200 })
}