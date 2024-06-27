import {z} from "zod";

export const ratingSchema = z.object({
    rateText     : z.string().min(3),
    productId: z.string(),
    autherId : z.string(),
    rating   : z.number(),
    rateTitle    : z.string().min(3)
})