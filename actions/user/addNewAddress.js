"use server";

import {db} from "../../lip/db";

export const addNewAddress = async (email,data)=> {

    console.log(data)



        await db.userAddress.create({
            data: {
                email,
                ...data
            }
        })

        return  {success: "user address has been added successfully!"}

}