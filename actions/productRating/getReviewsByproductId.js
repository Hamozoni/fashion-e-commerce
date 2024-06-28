"use server";

import {db} from "../../lip/db"

export const getReviewaByProductId = async(productId)=> {

    try{
       const data =  await db.reviews.findMany({
        where: {productId},
        include:{
            auther:{
                email: true,
                id: true,
                name: true,
                image: true
            }
        }
    });

       return {data}
    }
    catch {
        return {error: "something went wrong"}
    }

}