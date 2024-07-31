"use server";

import {db} from "../../lip/db";
import { findUserAddressByEmail, findUserByEmail } from "../../lip/user";


export const addNewAddress = async (req)=> {

    const {email,data} = req;

    const exestingUser = await findUserByEmail(email);

    if(exestingUser){
        const exestingAddress = await findUserAddressByEmail(email);

        if(exestingAddress){

            try{
                const userAddress =   await db.userAddress.update({
                        where: {email},
                        data: {
                            email,
                            ...data
                        }
                    });
    
                return {data: userAddress}
            }
            catch (error){
                console.log(error)
                return {error: "oops! something went wrong"}
            }
            finally {
                await db.$disconnect()
            }

        }else {

            try {
             const userAddress =   await db.userAddress.create({
                    data: {
                        email,
                        ...data
                    }
                })
            
                return  {data: userAddress}

            }
            catch {
                return {error: "oops! something went wrong"}
            }
            finally {
                await db.$disconnect()
            }

        }

    }

    if(!exestingUser) {
        return {error: "oops! email not found"}
    }

    return {error: "oops! something went wrong"}


}