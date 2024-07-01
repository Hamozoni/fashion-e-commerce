
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

      if(account?.provider !== "credentials") return true 
      
      const existingUser = await findUserById(user.id);

      if(existingUser?.emailVerified !== null) return true;

      return false

    },

    async signOut(){

    } ,

    async session({token,session}){

      if(token.sub && session.user){
        session.user.id = token.sub 
      };

      if(session.user && token.role){
        session.user.role = token.role
      };

      if(session.user) {
        if(token.address){
          session.user.address = token.address;
        };
      };

      return session;
    },
    async jwt({token}){

      if(!token.sub) return token;

      const existingUser = await findUserById(token.sub);

      
      if(!existingUser) return token;

      const existingAddress = await findUserAddressByEmail(existingUser.email);

      token.role = existingUser.role;

      if(existingAddress) {
        token.address = existingAddress
      };
  
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})