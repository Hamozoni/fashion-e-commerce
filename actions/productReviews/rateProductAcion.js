"use server";
import fs from 'fs/promises';
import { db } from "../../lip/db";
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
    
    console.log(data)
    const validateForm = ratingSchema.safeParse(data);

    if(validateForm.error) {
        return {error: "something went wrong"}
    };
    
    if(validateForm.success) {

        if(data.reviewImage.size > 200){
            try{
                await fs.mkdir('public/reviewsImages',{recursive: true});
                const imagepath = `public/reviewsImages/${crypto.randomUUID()}_${data?.reviewImage?.name}`;

                await fs.writeFile(imagepath,Buffer.from(await data?.reviewImage?.arrayBuffer()))

                data.reviewImage = imagepath;

            }
            catch {
                return {error: "images something went wrong"}
            }
        }else {
            data.reviewImage = null;
        }

        try {

        const review = await db.reviews.create({data:{
                ...data
            }})


            return {review: review}
        }
        catch {
            return {error: "something went wrong"}
        }
        finally {
            await db.$disconnect()
        }
    }



}