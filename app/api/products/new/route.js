
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };
export async function POST (requist) {


    const formData  = await requist.formData();

    // const h = new Headers(requist.headers);



    // console.log(h);
    console.log(formData);

   const specifKeys = formData.getAll("specifKey");
   const specifValues = formData.getAll("specifValue");

   const specifications = []

   for(let i = 0 ;i < specifKeys.length; i++){

    let specification = {key : specifKeys[i], value : specifValues[i]}

    specifications.push(specification)
   }


   const sizeName = formData.getAll("sizeName");
   const sizeDesc = formData.getAll("sizeDesc");

   const sizes = []

   for(let i = 0 ;i < sizeName.length; i++){

    let specification = {name : sizeName[i], description : sizeDesc[i]}

    sizes.push(specification)
   }





    
    await fs.mkdir("public/products",{recursive: true})

    
    const imgPath = `/products/${crypto.randomUUID()}-${data.images[0].imagePath.name}`;

    await fs.writeFile(imgPath,Buffer.from(await data.images[0].imagePath.Buffer()))



  const pro = await prisma.product.create({
        data : {
            name: formData.get("name"),
            priceInCent: Number(formData.get("priceInCent")),
            isAvailable: formData.get("isAvailable") === "true" ? true : false,
            description : formData.get("description"),
            count : Number(formData.get("count")),
            category: formData.get("category"),
            subCategory: formData.get("subCategory"),
            aboutThisItem: formData.get("aboutThisItem"),
            serialNumber: formData.get("serialNumber"),
            specifications : {
                create :[
                    ...specifications
                ]
            },
            sizes : {
                create :[
                    ...sizes
                ]
            },
            images : {
                create :[
                    ...data.images
                ]
            }
        }})

    return new Response(pro.json())

}