"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

import { LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdOutlineLocalOffer,MdOutlinePropane,MdShoppingCartCheckout } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import { ThemeModel } from "../../../../ui/models/themeModel";
import { SignOut } from "../../../../ui/buttons/signOut";

const navData = [
  {name: 'dashboard',link: '/admin/dashboard',Icon: LuLayoutDashboard},
  {name: 'products',link: '/admin/products',Icon: MdOutlinePropane},
  {name: 'add new product',link: '/admin/products/new',Icon: IoMdAdd},
  {name: 'customers',link: '/admin/customers',Icon: GoPeople},
  {name: 'orders',link: '/admin/orders',Icon: MdShoppingCartCheckout},
  {name: 'sales',link: '/admin/sales',Icon: MdOutlineLocalOffer},
]

export const Navbar = () => {

  const pathname = usePathname()

  const className = {
     link: 'capitalize m-0 px-3 lg:px-8 py-2 text-sm font-bold dark:text-teal-100  hover:text-black-500 flex items-center rounded-tr-full rounded-br-full gap-2 w-fit min-w-[250px]',
  }
  return (
    <section className="border-t-4 border-t-teal-300 h-full flex flex-col justify-between pb-4">
      <div className="max-h-full overflow-y-auto">
        <h4 className="p-3 py-4 lg:px-8 mb-6">
          <Link href={`/`} className="text-3xl font-bold uppercase text-teal-400">
              system
          </Link>

        </h4>
          <nav className="flex flex-col gap-5 mt-3">

            {
              navData?.map(({name,link,Icon})=> (

              <Link 
                  key={link}
                  href={link} 
                  className={`${className.link} ${pathname === link ? 'bg-teal-400 text-teal-50 dark:bg-teal-950' : 'hover:bg-gray-100 dark:hover:bg-teal-800'}`}>
                  <Icon size={24}/>  {name}
              </Link>
              ))
            }
            <div >
              <ThemeModel />
            </div>
          </nav>
          <footer className="p-3 lg:px-8 text-teal-950 dark:text-teal-100">
              <p>&copy; {new Date().getFullYear()}  <a href="hamozoni.com">hamozoni</a></p>
          </footer>
      </div>
      <div className=" px-3 lg:px-5 py-2 text-sm font-bold text-teal-950 dark:text-teal-100 hover:bg-gray-100 dark:hover:bg-teal-800 rounded-tr-full rounded-br-full">
          <SignOut />
      </div>
    </section>
  )
};