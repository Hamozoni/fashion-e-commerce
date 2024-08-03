import {Navbar} from "./_components/navbar";
import {Header} from "./_components/header"


export const metadata = {
    title: "system shop",
    description: "store for all categories products",
  };
  
  export default function AdminLayout({ children }) {
    return (
          <div className="md:flex items-start">
            <aside className="fixed left-0 z-50  bg-white dark:bg-black top-0 h-screen min-w-fit flex-[250px] max-w-[250px]">
              <Navbar />
            </aside>
            <aside className="min-w-full md:min-w-0" style={{width: 'calc(100% - 250px)'}}>
              <Header />
              {children}
            </aside>
          </div>
    );
  }