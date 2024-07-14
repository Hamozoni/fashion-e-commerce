
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


    console.log("11111",sizes)
    console.log("11111",specifications)
    console.log("11111",informations)
    console.log("11111",details)
    console.log("11111",data)
    



    try {
        const existProduct = await db.product.findMany({where : {
            serialNumber : details?.serialNumber
        }});
    
        if(!!existProduct){
            console.log(existProduct);
            return new NextResponse.json("Error the products already added before try another product", { status: 400 })
        }

    }
    catch {
        return new NextResponse.json("opss! something went wrong", { status: 500 })
     }



//loading product images in public folder

let images = [];

try{
    
        await fs.mkdir("public/products",{recursive: true});
        
            for(let i = 0;i < informations.length; i++){

                const id = crypto.randomUUID();
                informations[i].id = id

                const imagesPaths = formData.getAll(`images ${i}`);

                let newImages = []

                for(let index = 0; index < imagesPaths.length; index++){

                    const imagePath = `/products/${crypto.randomUUID()}-${imagesPaths[index].name}`;
                    await fs.writeFile(`public${imagePath}`,Buffer.from(await imagesPaths[index].arrayBuffer()))

                    newImages.push({imagePath,infoId:id});

                }

                images.push(newImages);
            };

   }
   catch {
    images?.map(({image})=> {
        image?.map(async({imagePath})=> {
            await fs.unlink(imagePath)
        })
    })
    return new NextResponse.json({error: 'opps! somthing went wrong'}, { status: 500 })
   }


//     // creating new product in db
    try {
         const product = await db.product.create({
               data : {
                   ...details,
                   specifications : {
                       create :[
                           ...specifications
                       ],
                       images: {
                        create: [
                            ...images
                        ]
                       }
                   },
                   informations : {
                    create : [
                        ...informations
                    ]
                   }
               }})
           return new NextResponse.json(product,{status: 200});
     }
     catch (error){
        images?.map(({image})=> {
            image?.map(async({imagePath})=> {
                await fs.unlink(imagePath)
            })
        })
        return new NextResponse.json("smoething went wrong", { status: 500 })
     }
     finally {
        await db.$disconnect()
     };


};