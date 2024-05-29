import { signIn } from "../auth";
import {loginSchema} from "../validationSchemas/authSchemas";
import {DEFAULT_LOGIN_REDIRECT} from "../routes";
import { AuthError } from "next-auth";

export const loginAction = async(formData)=> {

    const data = Object.fromEntries(formData.entries());

    const DataValidation = loginSchema.safeParse(data);

    if(DataValidation.error) {
        return {error: JSON.parse(DataValidation.error) }
    }

    if(DataValidation.success) {
        const {email,password} = data;
        
        try {
            await signIn("credentials",{
               email,
               password,
               redirect : DEFAULT_LOGIN_REDIRECT
            })

            console.log(password,email)

        }catch (error) {
            if(error instanceof AuthError) {
                switch(error.type) {
                    case "CredentialsSignin" :
                        return {error: "invalid credentials!"}
                    default : 
                       return {error : "something went wrong!"}
                }
            }

        }
        
        throw error;
    }

}