import {Footer} from "../ui/footer/footer"
import {MainHeader} from "../ui/header/mainHeader";
import ReduxProvider from "./ReduxProvider";
import ContexProvider from "./contextProvider"
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";

import "./globals.css";

export const metadata = {
  title : "myh store shop",
  description: "store for all fashoin",
};

export default async function RootLayout({ children }) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
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
