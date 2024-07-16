
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { db } from  "../../../../lip/db"
import { zProductShema } from '../../../../validationSchemas/newProductSchemas';
let images = [];
let sizes = [];
export async function POST (request) {

    const formData  = await request.formData();

    const data = Object.fromEntries(formData.entries());
    const colors = JSON.parse(data.colors);
    const sizesArrays = JSON.parse(data.sizes);
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


    const delateImages = (images)=> {
        images?.map(async({imagePath})=> {
            await fs.unlink(`public${imagePath}`)
        });
    }

    try{
    
        await fs.mkdir("public/products",{recursive: true});

        colors?.map(({colorName},index)=> {
            const imageFiles = formData.getAll(`images_${index}`);

            imageFiles?.map(async(imageFile)=> {

                    const imagePath = `/products/${crypto.randomUUID()}-${imageFile.name}`;

                    await fs.writeFile(`public${imagePath}`,Buffer.from(await imageFile.arrayBuffer()))

                    images.push({imagePath,colorName});

                    if(index === 0) {
                        details.imagePath = imagePath
                    };

            });

            sizesArrays[index].map((size)=> {
                sizes.push(size)
            })
        });
   }
   catch (error){
        delateImages(images);
        return NextResponse.json('opps! somthing went wrong', { status: 500 })
   };

   
   console.log(details);



    // creating new product in db
    try {
         const product = await db.product.create({
               data : {
                   ...details,
                   specifications : {
                       create :specifications
                   },
                   sizes : {
                    create : [...sizes]
                   },
                   colors: {
                      create : [...colors]
                   },
                   images: {
                    create : [...images]
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