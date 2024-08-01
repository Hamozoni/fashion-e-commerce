
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

 const emailContent =  `<div className="">
        Hello ${email}
      <h5 >Your Order Summary</h5>
      <div className="">
         <h6 >Subtotal: ${getCurrency(data?.totalPaidInCent - (data?.totalPaidInCent / 100) * 15)}</h6>
         <h6 >Delivery Fee: ${data?.deliveryFree === 0 ? 'Free': getCurrency(data?.deliveryFree)}</h6>
         <h6 >Tax: ${getCurrency((data?.totalPaidInCent / 100) * 15)}</h6>
         <h6 >Totla: ${getCurrency(data?.totalPaidInCent)}</h6>
         <h5>Address</h5>
         <p>${address.formatedAddress}</p>
      </div>
   </div>`
   await resend.emails.send({
      from:"onboarding@resend.dev",
      to: email,
      subject: "Your Order Summary",
      html : emailContent
   })
}