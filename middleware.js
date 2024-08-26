import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function Middleware (req) {

  const {pathname} = req.nextUrl

  const protectedRoutes = ['/checkout','/admin','/orders'];

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

  return NextResponse.next()

}
 
export const config = {
  matcher: ['/checkout','/admin','/orders']
}