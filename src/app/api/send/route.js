import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass
  }
});
export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.email || !body.subject || !body.message) {
      return NextResponse.json({message: "Sending mail failed"});  
    }
    await transporter.sendMail({
      from: email,
      to: "2191maisha2191@gmail.com",
      subject: body.subject,
      text: body.message,
      html: `<p>${body.message}</p>`
    });
    return NextResponse.json({message: "Mail successfully sent!"});
  } catch(error) {
    return NextResponse.json({error});
  }
}