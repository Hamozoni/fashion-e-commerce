"use server"
import fs from "fs/promises"
import {db} from "../../lip/db"

export const removeReviewAction = async (id,images)=> {

    if(images){
        try{
            for(let i = 0; i < images.length;i++) {
                await fs.unlink(images[i]?.imagePath)
            }
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