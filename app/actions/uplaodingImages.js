"use server"



export default async function uplaodingImages(images) {

    

    for(let i = 0; i < data.images.length; i++){

        await fs.mkdir("public/products",{recursive: true})

    
        const imgPath = `/products/${crypto.randomUUID()}-${data.images[0].imagePath.name}`;
    
        await fs.writeFile(imgPath,Buffer.from(await data.images[0].imagePath.Buffer()))

          data.images[0].imagePath = imgPath;
    };

    return images;
}
