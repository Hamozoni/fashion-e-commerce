
import {Resend} from "resend";

const resend = new Resend(process.env.RESENSD_API_KEY);

export const verifyEmail = async (email,token)=> {

    const confimLink = `${process.env.URL}/auth/new-verification?token=${token}`;

     await resend.emails.send({
        from:"onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `<a href=${confimLink}>confirm your email</a>`
     })

}