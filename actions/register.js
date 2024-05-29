"use server";

import bcrypt from "bcryptjs";
import {db} from "../lip/db";
import {findUserByEmail} from "../data/user"
import { registerSchema } from "../validationSchemas/authSchemas";

export const registerAction =  async (formData)=> {

    const data = Object.fromEntries(formData.entries());
    const Datavalidation = registerSchema.safeParse(data)

    if(Datavalidation.success) {
        const {name,email,password,confirm_password} = data;
            if(password !== confirm_password) {
                return {error: "passwords are not matches"}
            }
        const hassedPassword = await bcrypt.hash(password,10);
    
        const existingUser = await findUserByEmail(email);
        if(existingUser) {
            return {error: "email is already in use"}
        }

        try{
            await db.user.create({
                data: {
                    name,
                    email,
                    password: hassedPassword
                }
            })
        }catch (error) {

            return {error}

        }


    } else if(Datavalidation.error) {
        return {error: JSON.parse(Datavalidation.error)}
    }

    return {success: "user created !"}
}