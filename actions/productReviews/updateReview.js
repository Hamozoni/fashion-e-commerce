"use server";

import {db} from "../../lip/db"

export const updatereviewAction = async (id,data)=> {

    try{
        const updatedReview =  await db.reviews.update({
                where: {id},
                data: {...data}
            });
        return {data: updatedReview}
    }
    catch (error) {
        console.log(error)
        return {error: 'opps! something went wrong'}
    }
    finally {
        await db.$disconnect()
    }

}