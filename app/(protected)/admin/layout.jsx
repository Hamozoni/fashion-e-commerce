import Header from "./_components/header/Header";

export const metadata = {
    title: "system shop",
    description: "store for all categories products",
  };
  
  export default function AdminLayout({ children }) {
    return (
          <div className="flex items-start">
            <aside className="bg-teal-50 dark:bg-stone-950 sticky top-0 left-0 h-screen">
              <Header />

            </aside>
            <aside>

              {children}
            </aside>
          </div>
    );
  }