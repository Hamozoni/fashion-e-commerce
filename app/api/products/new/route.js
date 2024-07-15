
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

    // console.log(data);



    // try {
    //     const existProduct = await db.product.findUnique({where : {
    //         serialNumber : details?.serialNumber
    //     }});
    
    //     if(!!existProduct){
    //         console.log(existProduct);
    //         return  NextResponse.json("Error the products already added before try another product", { status: 400 })
    //     }

    // }
    // catch {
    //     return  NextResponse.json("opss! something went wrong", { status: 500 })
    // }
    // finally {
    //     await db.$disconnect()
    //  };
     

     console.log('after',informations);



//loading product images in public folder

let images = [];

try{
    
        // await fs.mkdir("public/products",{recursive: true});
        
            for(let i = 0;i < informations.length; i++){

                let image = []

                const imagesPaths = formData.getAll(`images ${i}`);
                for(let index = 0; index < imagesPaths.length; index++){

                    // const imagePath = `/products/${crypto.randomUUID()}-${imagesPaths[index].name}`;

                    // await fs.writeFile(`public${imagePath}`,Buffer.from(await imagesPaths[index].arrayBuffer()))

                    image.push({imagePath:'[['});

                }

                images[i].push(image)

                informations[i].images = {create: images[i]}
                informations[i].sizes = {create: sizes[i]}
            };

            console.log(informations)
   }
   catch {

    const delateImages = ()=> {

        images?.map((image)=> {
            image?.map(async({imagePath})=> {
                await fs.unlink(imagePath)
            });
    
        });
    }

    delateImages()

    return NextResponse.json('opps! somthing went wrong', { status: 500 })
   }


//     // creating new product in db
    // try {

    //      const product = await db.product.create({
    //            data : {
    //                ...details,
    //                specifications : {
    //                    create :specifications
    //                },
    //                informations : {
    //                 create : informations
    //                }
    //            }});
    //        return NextResponse.json({product},{status: 200});
    //  }
    //  catch (error){
    //     images?.map((image)=> {
    //         image?.map(async({imagePath})=> {
    //             await fs.unlink(imagePath)
    //         });
    
    //     });
    //     console.log(error)
    //     return NextResponse.json("smoething went wrong", { status: 500 })
    //  }
    //  finally {
    //     await db.$disconnect()
    //  };


};