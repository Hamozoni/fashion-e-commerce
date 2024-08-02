"use client"

import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdOutlineLocalOffer,MdOutlinePropane } from "react-icons/md";

const Header = () => {

  const className = {
     link: 'capitalize text-md font-medium text-slate-200 hover:text-black-500 flex items-center gap-2 w-fit min-w-fit',
  }
  return (
    <header className=" bg-gray-600 p-6 lg:px-10">
        <Link href={`/`} className="text-2xl font-bold uppercase text-slate-100">
          system Admin
        </Link>
        <nav className="flex flex-col gap-5">
            <Link 
                 href={`/admin/dashboard`} className={className.link}>
                <LuLayoutDashboard />  dashboard
            </Link>
            <Link href={`/admin/products`} className={className.link} >
               <MdOutlinePropane /> products
            </Link>
            <Link href={`/admin/products/new`} className={className.link} >
               <MdOutlinePropane /> add new products
            </Link>
            <Link href={`/admin/customers`} className={className.link} >
                <GoPeople />  customers
              </Link>
            <Link href={`/admin/customers`} className={className.link} >
               <MdOutlineLocalOffer /> sales
              </Link>
        </nav>
    </header>
  )
}

export default Header