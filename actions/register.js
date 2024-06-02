"use server";

import bcrypt from "bcryptjs";
import {db} from "../lip/db";
import {findUserByEmail} from "../lip/user"
import { registerSchema } from "../validationSchemas/authSchemas";
import {generateVerificationToken} from "../lip/token";
import {verifyEmail} from "../lip/mail";

export const registerAction =  async (formData)=> {

    const data = Object.fromEntries(formData.entries());
    const Datavalidation = registerSchema.safeParse(data);

    if(Datavalidation.error) {
        return {error: JSON.parse(Datavalidation.error)}
    }
        const {name,email,password,confirm_password} = data;
            if(password !== confirm_password) {
                return {error: "passwords are not matches!"}
            }
        const hassedPassword = await bcrypt.hash(password,10);
    
        const existingUser = await findUserByEmail(email);
        if(existingUser) {
            return {error: "email is already in use!"}
        }

        await db.user.create({
            data: {
                name,
                email,
                password: hassedPassword
            }
        });

        const verificationToken = await generateVerificationToken(email);

        await verifyEmail(verificationToken.email,verificationToken.token)



    

    return {success: "user created !"}
}