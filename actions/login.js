"use server";
import { signIn } from "../auth";
import {loginSchema} from "../validationSchemas/authSchemas";
import {DEFAULT_LOGIN_REDIRECT} from "../routes";
import { AuthError } from "next-auth";
import { findUserByEmail } from "../lip/user";
import { generateVerificationToken } from "../lip/token";
import { verifyEmail } from "../lip/mail";

export const loginAction = async(formData)=> {

    const data = Object.fromEntries(formData.entries());

    const DataValidation = loginSchema.safeParse(data);

        if(DataValidation?.error) {
            return {error: JSON.parse(DataValidation.error) }
        }

        const {email,password} = data;

        const existingUser = await findUserByEmail(email);

        if(!existingUser || !existingUser.email || !existingUser.password){
            return {error: 'Invalid credentials!'}
        }

        if(existingUser){
            if(existingUser?.emailVerified === null) {
                const verificationToken = await generateVerificationToken(existingUser.email);
                await verifyEmail(verificationToken.email,verificationToken.token)

                return {success: "verify your email place!"}
            }

            try {
                
                await signIn("credentials",{
                    email,
                    password,
                    redirect : DEFAULT_LOGIN_REDIRECT
                })

            }catch (error) {
                if(error instanceof AuthError) {
                    switch(error.type) {
                        case "CredentialsSignin" :
                            return {error: "invalid credentials!"}
                        default : 
                            return {error : "something went wrong!"}
                    }
                }

                throw error;
            }
        }
                

}