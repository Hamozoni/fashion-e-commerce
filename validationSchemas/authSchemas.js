
import {z} from "zod";


export const registerSchema = z.object({
    name : z.string().min(3,{ message: "name should be at Least 3 Character." }),
    email : z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password: z.string().min(6,{ message: "password should be at Least 6 Character." }),
    confirm_password: z.string().min(6,{ message: "should be match password you entered" }),
});

export const loginSchema = z.object({
    email : z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password: z.string(),
})