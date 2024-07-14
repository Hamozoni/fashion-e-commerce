
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import { db } from  "../../../../lip/db"
import { zProductShema } from '../../../../validationSchemas/newProductSchemas';

export async function POST (request) {

    const formData  = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const informations = JSON.parse(data.informations)

    console.log("11111",informations[0]?.sizes)
    console.log("11111",formData)
    return NextResponse.json('done',{status: 200})



//     try {
//         const exestProduct = await db.product.findMany({where : {
//             serialNumber : formData.get("serialNumber")
//         }});
    
//         if(exestProduct.length > 0){
//             console.log(exestProduct);
//             return new NextResponse("Error the products already added before try another product", { status: 400 })
//         }

//     }
//     catch {
//         return new NextResponse("Error the products already added before try another product", { status: 500 })
//      }
//      console.log("2",formData)
//    const specifKeys = formData.getAll("specifKey");
//    const specifValues = formData.getAll("specifValue");

//    const specifications = []

//    for(let i = 0 ;i < specifKeys.length; i++){

//     let specification = {key : specifKeys[i], value : specifValues[i]}

//     specifications.push(specification)
//    }


//    const sizeName = formData.getAll("sizeName");
//    const sizeDesc = formData.getAll("sizeDesc");

//    const sizes = []

//    for(let i = 0 ;i < sizeName.length; i++){

//     let specification = {name : sizeName[i], description : sizeDesc[i]}

//     sizes.push(specification)
//    };

//    console.log("3",formData)


// //loading product images in public folder
// const images = []
// const color = formData.getAll("color");
// try{
    
//         await fs.mkdir("public/products",{recursive: true});
        
//             for(let i = 0;i < color.length; i++){
//                 const imagesPath = formData.getAll(`imagePath-${color[i]}`);
//                 for(let p = 0; p < imagesPath.length; p++){
//                     const imageUrl = `public/products/${crypto.randomUUID()}-${imagesPath[p].name}`;
//                     await fs.writeFile(imageUrl,Buffer.from(await imagesPath[p].arrayBuffer()))
//                     images.push({color: color[i] , imagePath : imageUrl}) 
//                 };
        
//             };

//    }
//    catch {
//     return new NextResponse.json({error: 'opps! somthing went wrong'}, { status: 500 })
//    }

//    console.log("4",formData)

//     // creating new product in db
//     try {
//          const product = await db.product.create({
//                data : {
//                    name: formData.get("name"),
//                    priceInCent: Number(formData.get("priceInCent")),
//                    isAvailable: formData.get("isAvailable") === "true" ? true : false,
//                    description : formData.get("description"),
//                    category: formData.get("category"),
//                    subCategory: formData.get("subCategory"),
//                    serialNumber: formData.get("serialNumber"),
//                    brand: formData.get("brand"),
//                    specifications : {
//                        create :[
//                            ...specifications
//                        ]
//                    },
//                    sizes : {
//                        create :[
//                            ...sizes
//                        ]
//                    },
//                    images : {
//                        create : [...images]
//                    }
//                }})

//                console.log("5",formData)
//            return new NextResponse(product);
//      }
//      catch (error){
//         if(images.length > 0 ){
//             images?.forEach(async({imagePath})=> {
//                 await fs.unlink(imagePath)
//             })
//         }
//          console.log(JSON.parse(error))
//         return new NextResponse("smoething went wrong", { status: 500 })
//      }
//      finally {
//         await db.$disconnect()
//      };


};