import {z} from "zod";

export const ratingSchema = z.object({
    text     : z.string().min(3),
    productId: z.string(),
    autherId : z.string(),
    rating   : z.number(),
    title    : z.string().min(3)
})