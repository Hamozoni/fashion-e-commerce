export const metadata = {
    title: "admin",
    description: "admin page",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body >{children}</body>
      </html>
    );
  }