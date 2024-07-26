import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

 
export default async function middleware (req) {

  const {pathname} = req.nextUrl

  const protectedRoutes = ['/api/products/new','/checkout'];

  if(protectedRoutes.some(route=> pathname.startsWith(route))) {

    const token = getToken({req,secret:process.env.AUTH_SECRET});

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
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/api/products/new','checkout'],
}