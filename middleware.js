import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

import NextAuth from "next-auth"
import authConfig from "./auth.config";
 
export const { auth: middleware } = NextAuth(authConfig)

export default async function auth (req) {

  const {pathname} = req.nextUrl

  const protectedRoutes = ['/checkout','/admin','/admin/products/new','/admin/products','/admin/orders','/admin/dashboard','/admin/sales'];

  if(protectedRoutes.some( route => pathname.startsWith(route))) {

    const token = await getToken({req,secret:process.env.AUTH_SECRET});

    if(!token) {

      let callback = pathname;
  
      if(req.nextUrl.search){
        callback += req.nextUrl.search;
      }
  
      const encodedCallbackUrl = encodeURIComponent(callback)
      return NextResponse.redirect(new URL(`/auth/login?callback=${encodedCallbackUrl}`,req.nextUrl));
    }

  }

  return null

}
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/checkout','/admin','/admin/products/new','/admin/products','/admin/orders','/admin/dashboard','/admin/sales']
}