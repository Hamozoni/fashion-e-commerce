
import { ratingSchema } from "../../validationSchemas/ratingSchema"

export const rateProduct = async(data)=> {

    const validateForm = ratingSchema.safeParse(data);

    if(validateForm.error) {
        return {error: "something went wrong"}
    };

    if(validateForm.success) {
        return {success: "review has been committed successfuly"}
    }



}