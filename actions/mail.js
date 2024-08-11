"use server";
import { Resend } from "resend";

export const sendMail = async (formData) => {
    const resend = new Resend(process.env.RESEND_API);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const { data, error } = await resend.emails.send({
        from: `${name} <admin@resend.dev>`,
        to: ["vermanoor89@gmail.com"],
        subject: `Contact from ${email} `,
        html: `<strong>${message}</strong>`,
    });

    if (error) {
        return console.log({ message: error, status: true });
    }
    if (data) {
        return { message: "Message Sent Successfully", status: true };
    }
};
