"use server"
import {db} from "../../lip/db";

import { ref,deleteObject } from "firebase/storage";
import {storage} from "@/lip/firebase";


export const removeReviewAction = async (id,images)=> {

    if(images?.length > 0){
        try{
            for(let i = 0; i < images.length;i++) {
                const storageRef = ref(storage,images[i]?.imagePath);
                await deleteObject(storageRef);
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