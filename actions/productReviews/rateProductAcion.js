"use server";
// import fs from 'fs/promises';
// import { db } from "../../lip/db";
// import { ratingSchema } from "../../validationSchemas/ratingSchema"

// export const rateProduct = async(formData)=> {

//    const reviewImages = formData.getAll('reviewImage');

//    console.log(reviewImages)

//   let images = []

//     const data = {
//         rating: +formData.get('rating'),
//         productId: formData.get('productId'),
//         autherId: formData.get('autherId'),
//         rateText: formData.get('rateText'),
//         rateTitle: formData.get('rateTitle'),
//     }
    
//     console.log(data)
//     const validateForm = ratingSchema.safeParse(data);

//     if(validateForm.error) {
//         return {error: "something went wrong"}
//     };
    
//     if(validateForm.success) {

//         if(reviewImages.length > 0){

//             const imagesLength = reviewImages.length
//             try{

//                 for (let i = 0; i < imagesLength; i++) {
//                     if(reviewImages[i].size > 200) {
//                         await fs.mkdir('public/reviewsImages',{recursive: true});
//                         const imagePath = `public/reviewsImages/${crypto.randomUUID()}_${reviewImages[i]?.name}`;
    
//                         await fs.writeFile(imagePath,Buffer.from(await reviewImages[i]?.arrayBuffer()))
        
//                         images.push({imagePath,id: crypto.randomUUID()})
//                     }
//                 }


//             }
//             catch {
//                 return {error: "images something went wrong"}
//             }
//         }else {
//             images = null
//         }
        
//         try {

//             console.log(images)

//         const review = await db.reviews.create({data:{
//                 ...data,
//                 images: {
//                     create : [...images]
//                 }
//             }});
//             review.images = images
//             console.log(review)
//             return {review: review}
//         }
//         catch (error){
//             console.log(error)
//             return {error: "something went wrong"}
//         }
//         finally {
//             await db.$disconnect()
//         }
//     }



// }