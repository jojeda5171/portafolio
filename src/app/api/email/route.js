import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    const formData = await request.json();
    const name = formData.name;
    const lastName = formData.lastName;
    const email = formData.email;
    const code = formData.code;
    const phone = formData.phone;
    const subject = formData.subject;
    const message = formData.message;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      react: EmailTemplate({
        name,
        lastName,
        email,
        code,
        phone,
        message,
      }),
      text: "",
    });

    return NextResponse.json({ message: "Email sent", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", status: 500 });
  }
}
