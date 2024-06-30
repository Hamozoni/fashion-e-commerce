"use server";

import bcrypt from "bcryptjs";
import {db} from "../../lip/db";
import {findUserByEmail} from "../../lip/user"
import { registerSchema } from "../../validationSchemas/authSchemas";
import {generateVerificationToken} from "../../lip/token";
import {verifyEmail} from "../../lip/mail";

export const registerAction =  async (formData)=> {

    const data = Object.fromEntries(formData.entries());
    const DataValidation = registerSchema.safeParse(data);

    if(DataValidation.error) {
        return {error: JSON.parse(DataValidation.error)}
    };

    const {name,email,password,confirm_password} = data;

    if(password !== confirm_password) {
        return {error: "passwords are not matches!"}
    };

    const hassedPassword = await bcrypt.hash(password,10);

    const existingUser = await findUserByEmail(email);

    if(existingUser) {
        return {error: "email is already in use!"}
    }

    try{
        await db.user.create({
            data: {
                name,
                email,
                password: hassedPassword
            }
        })
    }
    catch {
        return {error: 'opps! something went wrong'}
    }
    finally {
        await db.$disconnect()
    }

    const verificationToken = await generateVerificationToken(email);
    await verifyEmail(verificationToken.email,verificationToken.token)
    
    
    return {success: "email sent to you place verify your email"}

}