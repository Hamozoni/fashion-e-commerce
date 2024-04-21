"use server";

// import {z} from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// import { object } from "zod";



// const fileSchema = z.instanceof(File,{message: 'Required'})

// const imagePath = fileSchema.refine(file => file.size === 0 || file.name.startsWith('image/'))

  // const addProtuctShema = z.object({
  //    title : z.string().min(1),
  //    price: z.coerce.number().int(1),
  //    description: z.string().min(3),
  //    category: z.string().min(2),
  //    subcategory: z.string().min(2),
  //    aboutThisItem: z.string().min(3),
  //    specifications: z.string().min(5),
  //    isAvailble: z.coerce.boolean(),
  //    count : z.coerce.number().int(1),
  //    serialNumber : z.number().min(10).max(10),
  //    imagePath: imagePath.refine(file => file.size > 0,'Required'),
  // });

export async function addProtuct(formData) {

  console.log(Object.fromEntries(formData))

  //  const data = addProtuctShema.safeParse(Object.fromEntries(formData.entries()))
  //  if(data.success === false) {
  //    return data.error.formErrors.fieldErrors
  //  }

   const product = Object.fromEntries(formData)

   await fs.mkdir("public/products",{recursive: true});

   const imageUrl = `public/products/${crypto.randomUUID()}-${product?.imagePath.name}`;

   await fs.writeFile(imageUrl,Buffer.from(await product?.imagePath.arrayBuffer()))

   const newProduct = await prisma.product.create({data : {
        name : product?.name,
        priceInCent: parseInt(product?.price),
        isAvailable: product?.isAvailble === 'true' ? true : false,
        description : product?.description,
        // specifications: product?.specifications,
        imagesPath: imageUrl,
        count: parseInt(product?.count) ,
        category: product?.category,
        subCategory: product?.subCategories,
        aboutThisItem: product?.aboutThisItem,
        serialNumber: parseInt(product?.serialNumber)

    }})

    console.log(newProduct,category)

    redirect('/admin/products')
}
 