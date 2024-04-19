import Header from "./_components/header/header";

export const metadata = {
    title: "myh store shop",
    description: "store for all categories products",
  };
  
  export default function AdminLayout({ children }) {
    return (
      <html lang="en">
        <body >
            <Header />
            {children}
        </body>
      </html>
    );
  }