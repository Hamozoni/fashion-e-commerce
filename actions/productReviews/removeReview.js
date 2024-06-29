"use server"

import {db} from "../../lip/db"

export const removeReviewAction = async (id)=> {

    try{

        await db.reviews.delete({where:{id}});

        return {success: "review has been deleted"}

    }
    catch{
        return {error: "something went wrong"}
    }
    finally {
        await db.$disconnect()
    }
}