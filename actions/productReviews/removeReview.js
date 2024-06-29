"use server"
import fs from "fs/promises"
import {db} from "../../lip/db"

export const removeReviewAction = async (id,reviewImage)=> {

    if(reviewImage){
        try{
            await fs.unlink(reviewImage)
        }
        catch {
            return {error: "oops! something went wrong"}
        }
    }


    try{
        await db.reviews.delete({where:{id}});
        return {success: "review has been deleted"}

    }
    catch{
        return {error: "oops! something went wrong"}
    }
    finally {
        await db.$disconnect()
    }
};