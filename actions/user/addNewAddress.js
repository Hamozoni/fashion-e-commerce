"use server";

import {db} from "../../lip/db";

export const addNewAddress = async (email,data)=> {

    try{

        await db.user.userAddress.create({
            where: {
                email
            },
            data: {
                ...data
            }
        })

        return  {success: "user address has been added successfully!"}
    }catch {
        return  {error: "something went wrong!"}
    }
    console.log(email,data)

}