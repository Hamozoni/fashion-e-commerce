import fs  from 'fs/promises';
import { redirect } from 'next/navigation';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function POST(request) {

    const data = await request.json();


    await fs.mkdir("pubilc/products",{recursive: true})

    for(let i = 0; i < data.images.length; i++){
        const imgPath = `pubilc/products/${crypto.randomUUID()}-${data.images[i].imagePath}`;

        await fs.writeFile(imgPath,Buffer.from(await data.images[i].imagePath.arrayBuffer()))

        data.images[i].imagePath = imgPath
    };


 const product =   await prisma.product.create({
        data : data.products,
        create : {
            specifications : [
                ...data.specifications
            ],
            sizes : [
                ...data.sizes
            ],
            images: [
                ...data.images
            ]

        }
    });






    redirect('/admin/products');

  return new Response(product.json())
}
