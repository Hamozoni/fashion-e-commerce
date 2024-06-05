
import MainHeader from "../ui/header/MainHeader";
import ReduxProvider from "./ReduxProvider";
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
        <body>
          <ReduxProvider>
            <main>
                <MainHeader />
                {children}
            </main>
          </ReduxProvider>
        </body>
    </html>

    </SessionProvider>
  );
}
