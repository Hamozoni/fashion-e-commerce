
import MainHeader from "./_components/MainHeader"

import "./globals.css";

export const metadata = {
  title : "myh store shop",
  description: "store for all fashoin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
       <MainHeader />
      <main>
          {children}
      </main>

    </body>
  </html>
  );
}
