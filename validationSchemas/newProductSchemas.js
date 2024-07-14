import {z} from "zod";


const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
];


const IMAGES = z.object({
  name: z.string(),
  size: z.number().min(50000).max(5000000),
  type: z.string().refine(type => ACCEPTED_IMAGE_TYPES.includes(type),{message:'invalid file type! must be an image'})
});

const SIZES = z.object({
    name: z.string().min(3),
    shortName: z.string().min(1),
    stackQuantity: z.number().min(1)
});


const PRODUCT_INFO = z.object({
  colorName: z.string().min(3),
  color: z.string().min(3),
  princeInHalala : z.number().min(100),
  images:  z.any(IMAGES),
  sizes: z.array(SIZES)
});

export const SPECIFICATUINS = z.object({
  name:  z.string().min(3),
  value: z.string().min(3),
});


export const zProductShema =  z.object({
  name : z.string().min(3),
  brand: z.string().min(3),
  serialNumber : z.string().min(10).max(10),
  category : z.string().min(3),
  subcategory: z.string().min(3),
  describtion: z.string().min(10),
  specifications: z.array(SPECIFICATUINS) ,
  informations : z.array(PRODUCT_INFO)
});