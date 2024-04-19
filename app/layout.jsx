// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';



import "./globals.css";

export const metadata = {
  title: "myh store shop",
  description: "store for all categories products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
{/* +        <AppRouterCacheProvider> */}
             {children}
{/* +        </AppRouterCacheProvider> */}
    </body>
  </html>
  );
}
