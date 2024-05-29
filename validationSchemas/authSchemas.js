
import {z} from "zod";


export const registerSchema = z.object({
    name : z.string().min(3),
    email : z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
});

export const loginSchema = z.object({
    name : z.string().min(3),
    email : z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
})