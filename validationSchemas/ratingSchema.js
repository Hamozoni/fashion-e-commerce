import {z} from "zod";

const allowedImageTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
];


const imageSchema = z.object({
    name: z.string(),
    size: z.number().min(100),
    type: z.string().refine(type => allowedImageTypes.includes(type),{message:'invalid file type! must be an image'})
});


export const ratingSchema = z.object({
    rateText     : z.string().min(3),
    productId: z.string(),
    autherId : z.string(),
    rating   : z.any(),
    rateTitle    : z.string().min(3),
    images : z.array(imageSchema).optional(),
})