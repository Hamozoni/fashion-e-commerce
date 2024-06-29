"use server";

import {db} from "../../lip/db"

export const getReviewaByProductId = async(productId)=> {

    try{
       const data =  await db.reviews.findMany({
        where: {productId},
        include:{
            auther:{
                select : {
                    name: true,
                    image: true,
                }
            }
        }
    });

       return {data}
    }
    catch(error) {
        console.log(error)
        return {error: "something went wrong"}
    }
    finally {
        await db.$disconnect()
    }

}