
import {z} from "zod";


export const registerSchema = z.object({
    name : z.string().min(3),
    email : z.email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
});

export const loginSchema = z.object({
    name : z.string().min(3),
    email : z.email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
})