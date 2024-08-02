
import {Resend} from "resend";
import { OrderSummary } from "../app/(protected)/orders/orderSummary";
import { getCurrency } from "./getCurrency";

const resend = new Resend(process.env.RESENSD_API_KEY);

export const verifyEmail = async (email,token)=> {

    const confimLink = `${process.env.NEXT_PUBLIC_URL}/auth/new-verification?token=${token}`;

    const emailContent = `
    <div>
       <header> <h1> System Store </h1> <h3>Hello</h3> </header>
       <p>We received a request to verify your email for the system store account associated with ${email}</p>
       <a href=${confimLink}>Verify Your Email</a>
       <p>If you didn’t make this request, or if you’re having trouble signing in, contact us via our support site. No changes have been made to your account.</p>
    </div>
    `

     await resend.emails.send({
        from:"onboarding@resend.dev",
        to: email,
        subject: "Verify Your Email",
        html: emailContent
     })

};

export const resetPasswordEmail = async(email,token)=> {

   const resetLink = `${process.env.NEXT_PUBLIC_URL}/auth/new-password?token=${token}`;


   const emailContent = `
   <div>
      <header> <h1> System Store </h1> <h3>Hello</h3> </header>
      <p>We received a request to reset the password for the system store account associated with ${email}</p>
      <a href=${resetLink}>Reset Password</a>
      <p>If you didn’t make this request, or if you’re having trouble signing in, contact us via our support site. No changes have been made to your account.</p>
   </div>
   `

   await resend.emails.send({
      from:"onboarding@resend.dev",
      to: email,
      subject: "Reset Password Email",
      html: emailContent
   });

};

export const ordersEmail = async (email,address,data)=> {

 const emailContent =  `<div>
        Hello ${email}
      <h3 >Your Order Summary</h3>
      <div className="">
         <h4 >Subtotal: ${getCurrency(data?.totalPaidInCent - (data?.totalPaidInCent / 100) * 15)}</h4>
         <h4 >Delivery Fee: ${data?.deliveryFree === 0 ? 'Free': getCurrency(data?.deliveryFree)}</h4>
         <h4 >Tax: ${getCurrency((data?.totalPaidInCent / 100) * 15)}</h4>
         <h4 >Totla: ${getCurrency(data?.totalPaidInCent)}</h4>
         <h3>Address</h3>
         <address>${address.formatedAddress}</address>
      </div>
   </div>`
   await resend.emails.send({
      from:"onboarding@resend.dev",
      to: email,
      subject: "Your Order Summary",
      html : emailContent
   })
}