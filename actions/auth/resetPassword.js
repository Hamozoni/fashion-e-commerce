"use server";
import { findResetPasswordTokenByEmail, generateResetPasswordToken } from "../../lip/token";
import { findUserByEmail } from "../../lip/user";
import { db } from "../../lip/db";
import { resetPasswordEmail } from "../../lip/mail";

export async function resetPasswordAction(formData) {

    const email = formData.get('email')
    

    const existingUser = await findUserByEmail(email);

    if(!existingUser){
        return {error: "email not found"}
    }

    const exitingToken = await findResetPasswordTokenByEmail(email);

    if(exitingToken) {
        await db.resetPasswordToken.delete({where :{
            id: exitingToken.id

        }})
    }

    try{
        const resetToken = await generateResetPasswordToken(email);

        await resetPasswordEmail(resetToken.email,resetToken.token);

        return {success: "reset email sent!"}

    }catch {
        return {error: "something went wrong!"}
    }
    finally {
        await db.$disconnect()
    }

}

 