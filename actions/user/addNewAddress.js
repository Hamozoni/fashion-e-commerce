"use server";

import {db} from "../../lip/db";
import { findUserAddressByEmail, findUserByEmail } from "../../lip/user";

import {getToken} from "next-auth/jwt"

export const addNewAddress = async (req,res)=> {

    console.log(req,res)
    const secret = process.env.AUTH_SECRET
    const token = await getToken({req,secret});
    // if(!token) throw new Error("nont authenticated");

    console.log(token)

    // const {email,data} = req;

    // const exestingUser = await findUserByEmail(email);

    // if(exestingUser){
    //     const exestingAddress = await findUserAddressByEmail(email);

    //     if(exestingAddress){

    //         try{
    //             await db.userAddress.update({
    //                 where: {email},
    //                 data: {
    //                     email,
    //                     ...data
    //                 }
    //             });
    
    //             return {success: "user address has been updated successfully!"}
    //         }
    //         catch {
    //             return {error: "oops! something went wrong"}
    //         }
    //         finally {
    //             await db.$disconnect()
    //         }

    //     }else {

    //         try {
    //             await db.userAddress.create({
    //                 data: {
    //                     email,
    //                     ...data
    //                 }
    //             })
            
    //             return  {success: "user address has been added successfully!"}

    //         }
    //         catch {
    //             return {error: "oops! something went wrong"}
    //         }
    //         finally {
    //             await db.$disconnect()
    //         }

    //     }

    // }

    // if(!exestingUser) {
    //     return {error: "oops! email not found"}
    // }

    // return {error: "oops! something went wrong"}


}