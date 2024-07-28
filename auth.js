
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import {db} from "./lip/db";
import { findUserAddressByEmail, findUserById } from "./lip/user";

 
export const { handlers, auth,signIn,signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  secret: process.env.AUTH_SECRET,
  events : {
    async linkAccount({user}){
      await db.user.update({
        where: {
          id: user.id
        },
        data: {
          emailVerified: new Date()
        }
      })
    }

  },
  callbacks : {

    async signIn({user,account}){

      if(account?.provider !== "credentials") return user 
      
      const existingUser = await findUserById(user.id);

      if(existingUser?.emailVerified !== null) return user;

      return false

    },


    async session({token,session}){
  
      if(session.user) {
        session.user.role = token.role;
        session.user.id = token.id ;
        session.user.image = token.image;
        
              if(token.address){
                session.user.address = token.address;
              }
        
      };
      

      return session;
    },
    async jwt({token,user}){

      if(!token.sub) return token;

      const existingUser = await findUserById(token.sub);

      
      if(!existingUser) return token;

      const existingAddress = await findUserAddressByEmail(token.email);

      console.log(existingAddress)
      if(user) {
        token.role = existingUser?.role;
        token.id = existingUser?.id;
        token.image = existingUser?.image;
      }
      token.address = existingAddress

  
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})