
export async function POST (requist) {

    const formData  = await requist.formData();

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
   };


   
   const color = formData.getAll("color");
   
   const images = [
       {color: '', images : {create : [{imagePath : ''}]}}
    ]
    
    await fs.mkdir("public/products",{recursive: true});

   for(let i = 0;i < color.length; i++){

        images[i].color = color[i];
        
        const imagesPath = formData.getAll(`imagePath-${color[i]}`);

        for(let p = 0; p < imagesPath.length; p++){

            const imageUrl = `/products/${crypto.randomUUID()}-${imagesPath[p].name}`;

            await fs.writeFile(imageUrl,Buffer.from(await imagesPath[p].Buffer()))
           
            images[i].images.create.push({imagePath : imageUrl })

        }
   }

    


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
                    ...images
                ]
            }
        }})

    return new Response(pro.json())

}