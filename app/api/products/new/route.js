import fs from 'fs/promises';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function POST(request) {

    const {data} = await request.json();

    console.log(data.products)


    await fs.mkdir("public/products",{recursive: true})
    
    for(let i = 0; i < data.images.length; i++){
        const imgPath = `/products/${crypto.randomUUID()}-${data.images[i].imagePath.name}`;

        await fs.writeFile(imgPath,Buffer.from(await data.images[i].imagePath.arrayBuffer()))

        data.images[i].imagePath = imgPath
    };


  const pro = await prisma.product.create({
        data : {...data.products,
            specifications : {
                create :[
                    ...data.specifications
                ]
            },
            sizes : {
                create :[
                    ...data.sizes
                ]
            },
            images : {
                create :[
                    ...data.images
                ]
            }
        },
    });






  return new Response()
}
