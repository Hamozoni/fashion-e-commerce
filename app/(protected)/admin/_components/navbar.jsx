"use client"

import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdOutlineLocalOffer,MdOutlinePropane,MdShoppingCartCheckout } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";

import { ThemeModel } from "@/ui/models/themeModel";
import { SignOut } from "@/ui/buttons/signOut";
import {AdminAccount} from "./adminAccount"

import { Overlay } from "@/ui/models/overlay";
import { AppContext } from "../../../contextProvider";

const navData = [
  {name: 'overview',link: '/admin',Icon: LuLayoutDashboard},
  {name: 'products',link: '/admin/products?category=all&subcategory=all',Icon: MdOutlinePropane},
  {name: 'add new product',link: '/admin/products/new',Icon: IoMdAdd},
  {name: 'customers',link: '/admin/customers',Icon: GoPeople},
  {name: 'orders',link: '/admin/orders',Icon: MdShoppingCartCheckout},
  {name: 'offers',link: '/admin/offers?category=all&subcategory=all',Icon: MdOutlineLocalOffer},
]

export const Navbar = () => {

  const pathname = usePathname();

  const [isMenu,setIsMenu] = useState(false);
  const {innerWidth} = useContext(AppContext);

  const className = {
     link: 'capitalize m-0 px-3 lg:px-8 py-2 text-sm font-bold dark:text-teal-100  hover:text-black-500 flex items-center rounded-tr-full rounded-br-full gap-2 w-fit min-w-[250px]',
  };

  return (
    <>
        {
          (isMenu && innerWidth < 768) ? <Overlay onClick={()=> setIsMenu(false)} /> : 
          <button
              onClick={()=> setIsMenu(true)} 
              className=" text-teal-400 fixed top-[15px] md:-left-full left-[15px] z-[70] w-[60px]"
              >
              <TiThMenuOutline size={40} />
          </button>
        }

      
      <section className={`${isMenu ? '' : '-translate-x-full md:translate-x-0'} border-t-4 border-t-teal-300 w-[250px] z-[70] fixed md:sticky left-0 bg-white top-0 h-screen min-w-fit dark:bg-black flex flex-col justify-between pb-4`}>
        <div className="max-h-full overflow-y-auto">
             <AdminAccount />
            <nav className="flex flex-col gap-5 mt-3">

              {
                navData?.map(({name,link,Icon})=> (

                <Link 
                    key={link}
                    href={link} 
                    className={`${className.link} ${link.startsWith(pathname) ? 'bg-teal-400 text-teal-50 dark:bg-teal-950' : 'hover:bg-gray-100 dark:hover:bg-teal-800'}`}>
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
    </>
  )
};