import fs  from 'fs/promises';
import { redirect } from 'next/navigation';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function POST(request) {

    const data = await request.json();


    await prisma.product.create({data : data.products});
    await prisma.specifications.createMany({data : data.specifications});
    await prisma.productSizes.createMany({data : data.sizes});

    await fs.mkdir("pubilc/products",{recursive: true})

    for(let i = 0; i < data.images.length; i++){
        const imgPath = `pubilc/products/${crypto.randomUUID()}-${data.images[i].imagePath}`;

        await fs.writeFile(imgPath,Buffer.from(await data.images[i].imagePath.arrayBuffer()))

        data.images[i].imagePath = imgPath
    };

    await prisma.productImages.createMany({data : data.images});


    redirect('/admin/products');

  return new Response('hi')
}
