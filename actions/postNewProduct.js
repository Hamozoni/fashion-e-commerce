"use server";




const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function postNewPoduct(formData) {


    console.log(formData)




    // await fs.mkdir("public/products",{recursive: true})

    
    // const imgPath = `/products/${crypto.randomUUID()}-${data.images[0].imagePath.name}`;

    // await fs.writeFile(imgPath,Buffer.from(await data.images[0].imagePath.Buffer()))


    //   data.images[0].imagePath = imgPath;
    // for(let i = 0; i < data.images.length; i++){
    // };


//   const pro = await prisma.product.create({
//         data : {...data.products,
//             specifications : {
//                 create :[
//                     ...data.specifications
//                 ]
//             },
//             sizes : {
//                 create :[
//                     ...data.sizes
//                 ]
//             },
//             images : {
//                 create :[
//                     ...data.images
//                 ]
//             }
//         },
//     });







}