
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import {db} from "./lip/db";
import { findUserById } from "./lip/user";

 
export const { handlers, auth,signIn,signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
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

    async session({token,session}){
      console.log(session,token)
      if(token.sub && session.user){
        session.user.id = token.sub 
      }

      if(session.user && token.role){
        session.user.role = token.role
      }

      return session;
    },
    async jwt({token,user}){

      if(!token.sub) return token;

      const existingUser = await findUserById(token.sub);

      if(!existingUser) return token;

      token.role = existingUser.role
  
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})