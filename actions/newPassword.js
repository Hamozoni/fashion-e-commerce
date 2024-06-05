"use server";
import { db } from "../lip/db";
import { findResetPasswordTokenByToken } from "../lip/token";
import { findUserByEmail } from "../lip/user";
import bcrypt from "bcryptjs";


export const newPasswordAction = async (formData)=> {



    const newPassword = formData.get("new_password");
    const confirmPassword = formData.get("confirm_password");
    const token = formData.get("token");

    if(newPassword !== confirmPassword){
        return {error: "opps! passwords  are matches"}
    }

    const existingToken = await findResetPasswordTokenByToken(token);

    if(!existingToken){
        return {error: 'opps! token is not found'}
    }

    const existingUser = await findUserByEmail(existingToken.email);

    if(!existingUser){
        return {error: "opps! email is not found"}
    }

    const expired =  new Date(existingToken.expires) < new Date();

    if(expired){
        return {error: "opps! token has expired"}
    }

    try{

        const hashedPassword = await bcrypt.hash(newPassword,10)
        await db.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                password:hashedPassword
            }
        });

        return {success: "password changed"}

    }catch {
         return {error: "opps! something went wrong"}
    }



}