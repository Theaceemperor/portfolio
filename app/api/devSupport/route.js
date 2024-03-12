import { NextResponse } from 'next/server';

require('dotenv').config();
const nodemailer = require('nodemailer');

export async function POST(request) {
    const { name, email, ticketNumber, subject, message } = await request.json();

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
            to: "spadesdev.back@gmail.com",
            subject: subject,
            text: "Dev Support",
            html: `<h3>NEW ENTRY FOR DEV SUPPORT</h3><p>Ticket Number: ${ticketNumber}</p><p>Sender: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`
        })
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: "Email Sent Successfully"}, { status: 200 })
}