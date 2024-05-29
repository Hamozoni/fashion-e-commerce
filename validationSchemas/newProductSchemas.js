import {z} from "zod";

export const productZSchema  =  z.object({
    name : z.string().min(3),
    priceInCent : z.coerce.number().int().min(100),
    isAvailable: z.boolean(),
    description: z.string().min(5),
    count: z.coerce.number().int().min(1),
    category: z.enum(["men", "women", "kids"]),
    subCategory: z.string(),
    aboutThisItem: z.string().min(5),
    serialNumber: z.string().min(10).max(10),
});

export const sizesZSchema = z.object({
    name: z.string(),
    description: z.string().min(3),
});

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const imagesZSchema = z.object({
    imagePath: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE,` Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
      color: z.string(),
  });

  
export const specifZSchema = z.object({
    key:  z.string().min(3),
    value: z.string().min(3),
})