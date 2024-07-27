
import {Resend} from "resend";

const resend = new Resend(process.env.RESENSD_API_KEY);

export const verifyEmail = async (email,token)=> {

    const confimLink = `${process.env.NEXT_PUBLIC_URL}/auth/new-verification?token=${token}`;

    const emailContainer = `
    <div>
       <header> <h1> System Store </h1> <h3>Hello</h3> </header>
       <hr/>
       <p>We received a request to verify your email for the system store account associated with ${email}</p>
       <a href=${confimLink}>Verify Your Email</a>
       <p>If you didn’t make this request, or if you’re having trouble signing in, contact us via our support site. No changes have been made to your account.</p>
    </div>
    `

     await resend.emails.send({
        from:"onboarding@resend.dev",
        to: email,
        subject: "Verify Your Email",
        html: emailContainer
     })

};

export const resetPasswordEmail = async(email,token)=> {

   const resetLink = `${process.env.NEXT_PUBLIC_URL}/auth/new-password?token=${token}`;


   const emailContainer = `
   <div>
      <header> <h1> System Store </h1> <h3>Hello</h3> </header>
      <hr/>
      <p>We received a request to reset the password for the system store account associated with ${email}</p>
      <a href=${resetLink}>Reset Password</a>
      <p>If you didn’t make this request, or if you’re having trouble signing in, contact us via our support site. No changes have been made to your account.</p>
   </div>
   `

   await resend.emails.send({
      from:"onboarding@resend.dev",
      to: email,
      subject: "Reset Password Email",
      html: emailContainer
   });

}