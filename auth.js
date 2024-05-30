
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import {db} from "./lip/db"

 
export const { handlers, auth,signIn,signOut } = NextAuth({
  callbacks : {

    async session({token,session}){
      console.log(session,token)
      return session;
    },
    async jwt({token,user}){
      // console.log(user)
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})