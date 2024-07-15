
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { db } from  "../../../../lip/db"
import { zProductShema } from '../../../../validationSchemas/newProductSchemas';

export async function POST (request) {

    const formData  = await request.formData();

    const data = Object.fromEntries(formData.entries());
    const informations = JSON.parse(data.informations);
    const sizes = JSON.parse(data.sizes);
    const specifications = JSON.parse(data.specifications);
    const details = JSON.parse(data.details);

    try {
        const existProduct = await db.product.findUnique({where : {
            serialNumber : details?.serialNumber
        }});
    
        if(!!existProduct){
            console.log(existProduct);
            return  NextResponse.json("Error the products already added before try another product", { status: 400 })
        }

    }
    catch {
        return  NextResponse.json("opss! something went wrong", { status: 500 })
    }
    finally {
        await db.$disconnect()
     };

//loading product images in public folder

//     let images = [];


//     const delateImages = (images)=> {

//         images?.map((image)=> {
//             image?.map(async({imagePath})=> {
//                 await fs.unlink(`public${imagePath}`)
//             });
    
//         });
//     }

//     try{
    
//         await fs.mkdir("public/products",{recursive: true});

//         informations?.map((info,index)=> {
//             let image = [];
//             const imageFiles = formData.getAll(`images ${index}`);

//             imageFiles?.map(async(imageFile)=> {

//                     const imagePath = `/products/${crypto.randomUUID()}-${imageFile.name}`;

//                     await fs.writeFile(`public${imagePath}`,Buffer.from(await imageFile.arrayBuffer()))

//                     image.push({imagePath});

//             });
//             images[index] = image;

//             info.images = {create: images[index]};
//             info.sizes = {create: sizes[index]};

//         });
//    }
//    catch (error){
//         delateImages(images);
//         return NextResponse.json('opps! somthing went wrong', { status: 500 })
//    }



    // creating new product in db

    console.log(informations)
    try {
         const product = await db.product.create({
               data : {
                   ...details,
                   specifications : {
                       create :specifications
                   },
                   informations : {
                    create : informations
                   }
               }});
           return NextResponse.json({product},{status: 200});
     }
     catch (error){
        delateImages(images);
        console.log(error)
        return NextResponse.json("something went wrong", { status: 500 })
     }
     finally {
        await db.$disconnect()
     };


};