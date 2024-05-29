import NextAuth from "next-auth";
import authConfig from "./auth.config"

const { auth } = NextAuth(authConfig)
 
export default auth((req) => {
  // req.auth
  
  const isLogined = !!req.auth;

  console.log("isLogined",isLogined);
  console.log("url",req.nextUrl);
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}