import { auth } from "@/auth";
import { Header } from "./_components/header";
import {Navbar} from "./_components/navbar";
import { redirect } from "next/navigation";

export const metadata = {
    title: "admin",
    description: "admid page for hamozoni fashion store",
  };
  
  export default async function AdminLayout({ children }) {

    const session = await auth();

    if(!session?.user) {
      return redirect(`/auth/login?callback=admin`)
    }
    return (
          <div className="md:flex items-start">
            <Navbar />
            <aside className="min-w-full md:min-w-0" style={{width: 'calc(100% - 250px)'}}>
              <Header />
              {children}
            </aside>
          </div>
    );
  }