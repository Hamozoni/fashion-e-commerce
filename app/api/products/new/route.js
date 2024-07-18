
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { db } from  "../../../../lip/db"

export async function POST (request) {

    const formData  = await request.formData();

    const data = Object.fromEntries(formData.entries());
    const colors = JSON.parse(data.colors);
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

        let images = [];

        for(let index = 0;index < colors?.length; index++){
            await fs.mkdir("public/products",{recursive: true});
            const imageFiles = formData.getAll(`images_${index}`);

            console.log(imageFiles)

            for(let i = 0; i < imageFiles?.length; i++){

                const imagePath = `/products/${crypto.randomUUID()}-${imageFiles[i]?.name}`;

                await fs.writeFile(`public${imagePath}`,Buffer.from(await imageFiles[i]?.arrayBuffer()))

                images.push({imagePath,colorName: colors[index]?.colorName});

                if(index === 0 && i === 0) {
                    details.imagePath = imagePath
                };

            }
        }
        
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

            for(let i = 0; i < images.length; i++){
                await fs.unlink(`public${images[i]?.imagePath}`)
            }
           console.log(error)
           return NextResponse.json("something went wrong", { status: 500 })
        }
        finally {
           await db.$disconnect()
        };

};