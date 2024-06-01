import {findUserByEmail} from "../lip/user";
import {db} from "../lip/db";
import {findVerificationTokekByToken} from "../lip/token";


export const newVerification = async (token)=> { 

    const existingToken = await findVerificationTokekByToken(token);

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
            await db.verifivationToken.delete({
                where :{id: existingToken?.id}
            })
        })

    }catch {
        return {error: "something went wrong"}
    }

    return {success: "email has verified"}

     
}