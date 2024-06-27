"use server";

import {db} from "../../lip/db"

export const getReviewaByProductId = async(productId)=> {

    try{
       const data =  await db.reviews.findMany({where: {productId}});

       return {success: data}
    }
    catch {
        return {error: "something went wrong"}
    }

}