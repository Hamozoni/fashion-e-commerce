
import MainHeader from "./_ui/components/MainHeader";
import ReduxProvider from "./ReduxProvider"

import "./globals.css";

export const metadata = {
  title : "myh store shop",
  description: "store for all fashoin",
};

export default function RootLayout({ children }) {
  return (
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
  );
}
