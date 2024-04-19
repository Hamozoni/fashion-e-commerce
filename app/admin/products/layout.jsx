
export const metadata = {
    title: "myh store shop",
    description: "store for all categories products",
  };
  
  export default function ProductLayout({ children }) {
    return (
      <html lang="en">
        <body >
            {children}
        </body>
      </html>
    );
  }