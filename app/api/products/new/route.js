
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { db } from  "../../../../lip/db"
import { zProductShema } from '../../../../validationSchemas/newProductSchemas';
import { create } from 'domain';

export async function POST (request) {

    const formData  = await request.formData();

    const data = Object.fromEntries(formData.entries());
    const informations = JSON.parse(data.informations);
    const sizes = JSON.parse(data.sizes);
    const specifications = JSON.parse(data.specifications);
    const details = JSON.parse(data.details);

    console.log(data);

    const productId = crypto.randomUUID()



    try {
        const existProduct = await db.product.findMany({where : {
            serialNumber : details?.serialNumber
        }});
    
        if(!!existProduct?.length){
            console.log(existProduct);
            return new NextResponse("Error the products already added before try another product", { status: 400 })
        }

    }
    catch {
        return new NextResponse("opss! something went wrong", { status: 500 })
    }
    finally {
        await db.$disconnect()
     };
     

     console.log('after',data);



//loading product images in public folder

let images = [];

try{
    
        await fs.mkdir("public/products",{recursive: true});
        
            for(let i = 0;i < informations.length; i++){

                const id = crypto.randomUUID();
                informations[i].id = id;
                informations[i].productId = productId;
                sizes[i].infoId = id

                const imagesPaths = formData.getAll(`images ${i}`);
                for(let index = 0; index < imagesPaths.length; index++){

                    const imagePath = `public/products/${crypto.randomUUID()}-${imagesPaths[index].name}`;
                    await fs.writeFile(imagePath,Buffer.from(await imagesPaths[index].arrayBuffer()))

                    images.push({imagePath,infoId:id});

                }
            };

   }
   catch {
        images?.map(async({imagePath})=> {
            await fs.unlink(imagePath)
        })
    return new NextResponse({error: 'opps! somthing went wrong'}, { status: 500 })
   }


//     // creating new product in db
    try {

        informations.push({images: {create : images}});
        informations.push({sizes: {create : sizes}});
         const product = await db.product.create({
               data : {
                   ...details,
                   id: productId,
                   specifications : {
                       create :[
                           ...specifications
                       ]
                   }
               }});

        const productInformation = await db.productInformation.createMany({
            data: [...informations],
            images: {
                create: [...images]
            },
            sizes: {
                create: [
                    ...sizes
                ]
            }
        })
           return new NextResponse.json({product,productInformation},{status: 200});
     }
     catch (error){
        images?.map(async({imagePath})=> {
            await fs.unlink(imagePath)
        })
        console.log(error)
        return new NextResponse.json("smoething went wrong", { status: 500 })
     }
     finally {
        await db.$disconnect()
     };


};