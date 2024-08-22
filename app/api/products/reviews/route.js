
import { db } from "@/lip/db";
import { ratingSchema } from "@/validationSchemas/ratingSchema";
import {ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { storage } from '@/lip/firebase';


import { NextResponse } from 'next/server';

export async function POST (request) {

    const formData  = await request.formData();;

    const reviewImages = formData.getAll('reviewImage');

    const data = Object.fromEntries(formData.entries());

    data.rating = Number(data.rating);

    const validateForm = ratingSchema.safeParse(data);

    if(validateForm.error) {
        return NextResponse.json({massage: 'values not acceptable'},{status:406})
    };

    delete data.reviewImage

    let images = [];
    const firebaseURL = 'https://firebasestorage.googleapis.com/v0/b/e-commrerce.appspot.com/o/'
    
    if(validateForm.success) {

        if(reviewImages.length > 0){

            const imagesLength = reviewImages.length
            try{

                for (let i = 0; i < imagesLength; i++) {

                    const storageRef = ref(storage,`images/reviews/${reviewImages[i]?.name}`);
                    const snapshot = await uploadBytesResumable(storageRef,reviewImages[i]);
                    const imagePath = await getDownloadURL(snapshot.ref);
        
                    images.push({imagePath: imagePath.replace(firebaseURL,''),id: crypto.randomUUID()})
                
                }


            }
            catch {
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
            return NextResponse.json({...review},{status:200})
        }
        catch (error){
            return NextResponse.json('something went wrong',{status:400})
        }
        finally {
            await db.$disconnect()
        }
    }


}