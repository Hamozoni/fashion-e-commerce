import Credentials from 'next-auth/providers/credentials';

import { loginSchema } from './validationSchemas/authSchemas';
import { findUserByEmail } from './lip/user';

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import bcrypt from 'bcryptjs';

export default { 
    providers: [
        Github({
            clientId : process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
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