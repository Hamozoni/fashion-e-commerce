"use client"

import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdOutlineLocalOffer,MdOutlinePropane } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { ThemeModel } from "../../../../../ui/models/themeModel";

const Header = () => {

  const className = {
     link: 'capitalize m-0 py-3 px-4 text-md font-medium text-slate-200 hover:bg-gray-600 hover:text-black-500 flex items-center gap-2 w-fit min-w-[200px]',
  }
  return (
    <header className=" bg-gray-800">
      <h4 className="p-3">
        <Link href={`/`} className="text-2xl font-bold uppercase text-slate-100">
             system
        </Link>

      </h4>
        <nav className="flex flex-col gap-5 mt-3 sticky top-0 left-0 h-screen">
            <Link 
                 href={`/admin/dashboard`} className={className.link}>
                <LuLayoutDashboard size={24}/>  dashboard
            </Link>
            <Link href={`/admin/products`} className={className.link} >
               <MdOutlinePropane size={24} /> products
            </Link>
            <Link href={`/admin/products/new`} className={className.link} >
               <IoMdAdd size={24} /> add new product
            </Link>
            <Link href={`/admin/customers`} className={className.link} >
                <GoPeople size={24}/>  customers
              </Link>
            <Link href={`/admin/customers`} className={className.link} >
               <MdOutlineLocalOffer size={24} /> sales
            </Link>
            <div >
              <ThemeModel />
            </div>
        </nav>
    </header>
  )
}

export default Header