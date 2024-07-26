import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";



const protectedRoutes = [ '/checkout','api/products/new','/admin/products/new']
 
export default  async function middleware (req) {
  // req.auth

  const {pathname} = req.nextUrl;


  if(protectedRoutes.some(route=> pathname.startsWith(route))){

    const token = await getToken({req});

      if(!token){

        const url = req.nextUrl.clone();
        url.pathname = '/auth/login';
        url.searchParams.set('callbackUrl',req.nextUrl.href);
        return NextResponse.redirect(url)
      }

  }

     return NextResponse.next()

}
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [ '/checkout','api/products/new'],
}

// /((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)