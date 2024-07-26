import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {poblicRoutes,authRoutes,DEFAULT_LOGIN_REDIRECT} from "./routes";
import { getSession } from "next-auth/react";


const { auth } = NextAuth(authConfig);

const protectedRoutes = [ '/checkout','api/products/new']
 
export default  async function auth (req) {
  // req.auth
  
  const isLogined = !!req.auth;
  const {pathname} = req.nextUrl;


  if(protectedRoutes.includes(pathname)){

    const session = await getSession({req});

      if(!session){
        return Response.redirect(new URL('/auth/login',req.nextUrl))
      }
      return null

  }



  if(!isLogined) {

    let callback = pathname;
    if(req.nextUrl.search){
      callback += req.nextUrl.search
    }

    const encodedCallbackUrl = encodeURIComponent(callback)
    return Response.redirect(new URL(`/auth/login?callback=${encodedCallbackUrl}`,req.nextUrl))
  }

  return null

})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [ '/checkout','api/products/new'],
}

// /((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)