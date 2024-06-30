"use server";

import {db} from "../../lip/db"

export const updatereviewAction = async (id,rateTitle,rateText)=> {

    try{
        const updatedReview =  await db.reviews.update({
                where: {id},
                data: {rateTitle,rateText}
            });
        return {data: updatedReview}
    }
    catch {
        return {error: 'opps! something went wrong'}
    }
    finally {
        await db.$disconnect()
    }

}