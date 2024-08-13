import Credentials from 'next-auth/providers/credentials';

import { loginSchema } from './validationSchemas/authSchemas';
import { findUserByEmail } from './lip/user';

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import bcrypt from 'bcryptjs';
// process.env.GITHUB_CLIENT_ID
// process.env.GITHUB_CLIENT_SECRET

export default { 
    providers: [
        Github({
            clientId : 'Ov23liqg6EGli5xB9ohm',
            clientSecret: '968ac1e1c737c625f717e9d98a16e965b31e4f42'
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {

                const validatedFields = loginSchema.safeParse(credentials);

                if(validatedFields.success){
                    const {email,password} = validatedFields.data;

                    const user = await findUserByEmail(email);

                    if(!user || !user.password) return null;

                    const passwordMatch = await bcrypt.compare(password,user.password)

                    if(passwordMatch) return user;
                }

                return null;

            }
        })
    ] ,
    trustHost: true,
}