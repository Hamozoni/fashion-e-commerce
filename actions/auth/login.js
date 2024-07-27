"use server";
import { signIn } from "../../auth";
import {loginSchema} from "../../validationSchemas/authSchemas";
import { AuthError } from "next-auth";
import { findUserByEmail } from "../../lip/user";
import { generateVerificationToken } from "../../lip/token";
import { verifyEmail } from "../../lip/mail";
import bcrypt from 'bcryptjs'

export const loginAction = async(formData,callbackUrl)=> {

    const data = Object.fromEntries(formData.entries());

    const DataValidation = loginSchema.safeParse(data);


        if(DataValidation?.error) {
            return {error: JSON.parse(DataValidation.error) }
        };

        const {email,password} = data;

        const existingUser = await findUserByEmail(email);

        if(!existingUser || !existingUser.email || !existingUser.password){
            return {error: 'Oops! email or password is wrong'}
        }

        const passwordMatch = await bcrypt.compare(password,existingUser.password);

        if(!passwordMatch){
            return {error: 'Oops! email or password is wrong!'}
        }


        if(existingUser && passwordMatch){
            if(existingUser?.emailVerified === null) {
                const verificationToken = await generateVerificationToken(existingUser.email);

                await verifyEmail(verificationToken.email,verificationToken.token);

                return {success: "email sent to you place verify your email"}
            }

            try {

                await signIn("credentials",{
                    email,
                    password,
                    redirectTo : callbackUrl || '/'
                })

            }catch (error) {
                if(error instanceof AuthError) {
                    switch(error.type) {
                        case "CredentialsSignin" :
                            return {error: "Oops! invalid credentials!"}
                        default : 
                            return {error : "Oops! something went wrong!"}
                    }
                }

                throw error;
            }
        }
                

}