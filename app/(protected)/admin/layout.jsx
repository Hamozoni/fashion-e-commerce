import Header from "./_components/header/Header";

export const metadata = {
    title: "system shop",
    description: "store for all categories products",
  };
  
  export default function AdminLayout({ children }) {
    return (
          <div className="">
              <Header />
              {children}
          </div>
    );
  }