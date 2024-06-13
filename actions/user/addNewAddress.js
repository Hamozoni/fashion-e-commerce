"use server";

import {db} from "../../lip/db";
import { findUserAddressByEmail, findUserByEmail } from "../../lip/user";

export const addNewAddress = async (email,data)=> {

    console.log(data)

    const exestingUser = await findUserByEmail(email);

    if(exestingUser){
        const exestingAddress = await findUserAddressByEmail(email);

        if(exestingAddress){

            try{
                await db.userAddress.update({
                    where: {email},
                    data: {
                        email,
                        ...data
                    }
                })
    
                return {success: "user address has been updated successfully!"}
            }
            catch {
                return {error: "oops! something went wrong"}
            }

        }else {

            try {
                await db.userAddress.create({
                    data: {
                        email,
                        ...data
                    }
                })
            
                return  {success: "user address has been added successfully!"}

            }
            catch {
                return {error: "oops! something went wrong"}
            }

        }

    }

    if(!exestingUser) {
        return {error: "oops! email not found"}
    }

    return {error: "oops! something went wrong"}


}