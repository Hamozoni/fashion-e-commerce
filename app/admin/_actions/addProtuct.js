"use server";

import {z} from "zod";

export async function addProtuct(formData) {

  const fileSchema = z.instanceof(File,{message: 'Required'})

  const imagePath = fileSchema.refine(file => file.size === 0 || file.name.startsWith('image/'))

    z.object({
       title : z.string().min(1),
       price: z.coerce.number().int(1),
       description: z.string().min(3),
       category: z.string().enum(['men','women','kids']),
       subcategory: z.string().enum(['t-shirt','shirt','pants']),
       aboutThisItem: z.string().min(3),
       specifications: z.string().min(5),
       isAvailble: z.coerce.boolean(),
       count : z.coerce.number().int(1),
       serialNumber : z.coerce.number().count(10),
       imagePath: imagePath,
    })
}
 