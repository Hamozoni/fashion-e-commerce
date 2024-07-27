"use server";

import {findUserByEmail} from "../../lip/user";
import {db} from "../../lip/db";
import {findVerificationTokenByToken} from "../../lip/token";


export const verificationAction = async (token)=> { 

    const existingToken = await findVerificationTokenByToken(token);

    if(!existingToken){
         return {error:"token does not exist"}
    }

    const isTokenExpired = new Date(existingToken.expires) < new Date();

    if(isTokenExpired){
        return {error: "token has expired"}
    }

    const existingUser = await findUserByEmail(existingToken?.email);

    if(!existingUser) {
        return {error: "email is not found"}
    }
    if(existingUser?.emailVerified) {

        await db.verificationToken.delete({
            where :{id: existingToken?.id}
        });

        return {success: 'email has been verified'}
    }

    try{
        await db.user.update({
            where :{
                id: existingUser.id
            },
            data: {
                emailVerified: new Date(),
                email: existingToken.email
            }

          
        }).then(async()=>{
            try {
                await db.verificationToken.delete({
                    where :{id: existingToken?.id}
                })

                return {success: 'email has been verified'}
            }
            catch (error){
                return {error: "something went wrong"}
            }

        })

    }catch {
        return {error: "something went wrong"}
    }
    finally {
        await db.$disconnect()
    }

    return {success: "email has verified"}
}