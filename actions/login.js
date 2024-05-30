"use server";
import { signIn } from "../auth";
import {loginSchema} from "../validationSchemas/authSchemas";
import {DEFAULT_LOGIN_REDIRECT} from "../routes";
import { AuthError } from "next-auth";

export const loginAction = async(formData)=> {
    console.log('first')

    const data = Object.fromEntries(formData.entries());

    const DataValidation = loginSchema.safeParse(data);

        const {email,password} = data;
           if(DataValidation.success){
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
   
               }
           }

            if(DataValidation.error) {
                return {error: JSON.parse(DataValidation.error) }
            }
                    
    

}