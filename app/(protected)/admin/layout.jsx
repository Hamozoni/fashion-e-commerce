import {Navbar} from "./_components/navbar";

export const metadata = {
    title: "admin",
    description: "admid page for hamozoni fashion store",
  };
  
  export default function AdminLayout({ children }) {
    return (
          <div className="md:flex items-start">
            <Navbar />
            <aside className="min-w-full md:min-w-0" style={{width: 'calc(100% - 250px)'}}>
              {children}
            </aside>
          </div>
    );
  }