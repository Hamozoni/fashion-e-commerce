import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {poblicRoutes,authRoutes,apiAuthPrefix,DEFAULT_LOGIN_REDIRECT} from "./routes";


const { auth } = NextAuth(authConfig)
 
export default auth((req) => {
  // req.auth
  
  const isLogined = !!req.auth;
  const {pathname} = req.nextUrl

  const isApiAuthRoute = pathname?.startsWith(apiAuthPrefix);
  const isPublicRoute = poblicRoutes?.includes(pathname);
  const isAuthRoute = authRoutes?.includes(pathname);

  if(isApiAuthRoute){
    return null
  };

  if(isAuthRoute){
    if(isLogined){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,req.nextUrl))
    }
    return null
  }

  if(!isLogined && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login",req.nextUrl))
  }
  return null

})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}