import {Navbar} from "./_components/navbar";
import {Header} from "./_components/header"


export const metadata = {
    title: "system shop",
    description: "store for all categories products",
  };
  
  export default function AdminLayout({ children }) {
    return (
          <div className="flex items-start">
            <aside className="bg-white dark:bg-black sticky top-0 h-screen min-w-fit flex-[250px] max-w-[250px]">
              <Navbar />
            </aside>
            <aside style={{width: 'calc(100% - 250px)'}}>
              <Header />
              {children}
            </aside>
          </div>
    );
  }