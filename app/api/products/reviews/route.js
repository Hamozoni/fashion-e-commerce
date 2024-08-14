import fs from 'fs/promises';
import { db } from "@/lip/db";
import { ratingSchema } from "@/validationSchemas/ratingSchema";

import { NextResponse } from 'next/server';

export async function POST (request) {

    const formData  = await request.formData();;

    const reviewImages = formData.getAll('reviewImage');

    console.log(formData);


    const data = Object.fromEntries(formData.entries());

    data.rating = Number(data.rating);

    console.log(data);


    
    const validateForm = ratingSchema.safeParse(data);

    if(validateForm.error) {
        return NextResponse.json({massage: 'values not acceptable'},{status:406})
    };

    delete data.reviewImage

    let images = []
    
    if(validateForm.success) {

        if(reviewImages.length > 0){

            const imagesLength = reviewImages.length
            try{

                for (let i = 0; i < imagesLength; i++) {
                    if(reviewImages[i].size > 200) {
                        await fs.mkdir('public/reviewsImages',{recursive: true});
                        const imagePath = `public/reviewsImages/${crypto.randomUUID()}_${reviewImages[i]?.name}`;
    
                        await fs.writeFile(imagePath,Buffer.from(await reviewImages[i]?.arrayBuffer()))
        
                        images.push({imagePath,id: crypto.randomUUID()})
                    }
                }


            }
            catch {
                for(let i = 0; i < images.length;i++) {
                    await fs.unlink(images[i]?.imagePath)
                }
                return NextResponse.json({massage: 'something went wrong'},{status:422})
            }
        }else {
            images = null
        }
        
        try {


        const review = await db.reviews.create({data:{
                ...data,
                images: {
                    create : [...images]
                }
            }});
            review.images = images
            console.log(review)
            return NextResponse.json({...review},{status:200})
        }
        catch (error){
            for(let i = 0; i < images.length;i++) {
                await fs.unlink(images[i]?.imagePath)
            }
            return NextResponse.json('something went wrong',{status:400})
        }
        finally {
            await db.$disconnect()
        }
    }


}