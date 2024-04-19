
import "./globals.css";

export const metadata = {
  title: "myh store shop",
  description: "store for all categories products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body >{children}</body>

    </html>
  );
}
