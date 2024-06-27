"use server";
import { ratingSchema } from "../../validationSchemas/ratingSchema"

export const rateProduct = async(formData)=> {

    const data = {
        rating: +formData.get('rating'),
        productId: formData.get('productId'),
        autherId: formData.get('autherId'),
        rateText: formData.get('rateText'),
        rateTitle: formData.get('rateTitle'),
        reviewImage: formData.get('reviewImage'),
    }

    const validateForm = ratingSchema.safeParse(data);

    if(validateForm.error) {
        return {error: "something went wrong"}
    };
    
    if(validateForm.success) {
        console.log(data);
        return {success: "review has been committed successfuly"}
    }



}