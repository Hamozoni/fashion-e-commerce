import {Navbar} from "./_components/navbar";
import {Header} from "./_components/header"


export const metadata = {
    title: "system shop",
    description: "store for all categories products",
  };
  
  export default function AdminLayout({ children }) {
    return (
          <div className="flex items-start">
            <aside className="bg-white dark:bg-black sticky top-0 left-0 h-screen">
              <Navbar />
              <footer className="p-3 lg:px-8">
                  <p>&copy; {new Date().getFullYear()}  <a href="hamozoni.com">hamozoni</a></p>
              </footer>
            </aside>
            <aside className="w-full">
              <Header />
              {children}
            </aside>
          </div>
    );
  }