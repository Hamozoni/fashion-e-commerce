"use server";
import fs from 'fs/promises';
import { db } from "../../lip/db";
import { ratingSchema } from "../../validationSchemas/ratingSchema"

export const rateProduct = async(formData)=> {

   const reviewImages = formData.getAll('reviewImage');

   console.log(reviewImages)

    const data = {
        rating: +formData.get('rating'),
        productId: formData.get('productId'),
        autherId: formData.get('autherId'),
        rateText: formData.get('rateText'),
        rateTitle: formData.get('rateTitle'),
        images : []
    }
    
    console.log(data)
    const validateForm = ratingSchema.safeParse(data);

    if(validateForm.error) {
        return {error: "something went wrong"}
    };
    
    if(validateForm.success) {

        if(reviewImages[0].size > 200){

            const imagesLength = reviewImages.length
            try{

                for (let i = 0; i < imagesLength; i++) {
                    await fs.mkdir('public/reviewsImages',{recursive: true});
                    const imagePath = `public/reviewsImages/${crypto.randomUUID()}_${reviewImages[i]?.name}`;

                    await fs.writeFile(imagePath,Buffer.from(await reviewImages[i]?.arrayBuffer()))
    
                    data.images[i] = {imagePath}
                }


            }
            catch {
                return {error: "images something went wrong"}
            }
        }else {
            data.images = null
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