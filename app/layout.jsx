import {Footer} from "@/ui/footer/footer"
import {MainHeader} from "@/ui/header/mainHeader";
import ReduxProvider from "./ReduxProvider";
import ContexProvider from "./contextProvider"
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import "./globals.css";

export default async function RootLayout({ children }) {
  const session = await auth();
  
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
            <title>fashon home page</title>
            <link 
              rel="shortcut icon" 
              href="/favicon.ico" 
              type="image/x-icon"
               />
        </head>
       <ContexProvider session={session?.user}>
          <body className="dark:bg-black">
            <ReduxProvider>
              <main>
                  <MainHeader />
                  {children}
                  <Footer />
              </main>
            </ReduxProvider>
          </body>
       </ContexProvider>
    </html>

    </SessionProvider>
  );
}
