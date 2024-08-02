"use client"

import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdOutlineLocalOffer,MdOutlinePropane } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { ThemeModel } from "../../../../ui/models/themeModel";
import { usePathname } from "next/navigation";

const navData = [
  {name: 'dashboard',link: '/admin/dashboard',Icon: LuLayoutDashboard},
  {name: 'products',link: '/admin/products',Icon: MdOutlinePropane},
  {name: 'add new product',link: '/admin/products/new',Icon: IoMdAdd},
  {name: 'customers',link: '/admin/customers',Icon: GoPeople},
  {name: 'sales',link: '/admin/sales',Icon: MdOutlineLocalOffer},
]

export const Navbar = () => {

  const pathname = usePathname()

  const className = {
     link: 'capitalize m-0 px-3 lg:px-5 py-2 text-sm font-bold dark:text-teal-100 hover:bg-gray-100 dark:hover:bg-teal-950 hover:text-black-500 flex items-center rounded-tr-full rounded-br-full gap-2 w-fit min-w-[250px]',
  }
  return (
    <section className="border-t-4 border-t-teal-300">
      <h4 className="p-3 py-4 lg:px-5 mb-6 border-r-4 border-r-teal-300 rounded-full">
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
                className={`${className.link} ${pathname === link ? 'bg-teal-400 text-teal-50 dark:bg-teal-950' : ''}`}>
                <Icon size={24}/>  {name}
            </Link>
            ))
          }
          <div >
            <ThemeModel />
          </div>
        </nav>
    </section>
  )
};