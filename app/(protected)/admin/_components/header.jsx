"use client";

import { useContext } from "react";
import { AppContext } from "../../../contextProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = ()=> {
    const {currentUser} = useContext(AppContext);
    const pathname = usePathname();

    return (
        <header className="bg-white dark:bg-black p-3 lg:px-8 sticky z-[60] top-0 border-b-4 border-b-teal-300">
            <div className=" capitalize flex items-center justify-between">

                <div className="pl-[50px] md:pl-0 flex items-center gap-2">
                     <Image 
                        className="rounded-full border-2 border-teal-300" 
                        src={currentUser?.image} 
                        width={50} 
                        height={50} 
                        alt="admin avatar" 
                        />
                    <div className="">
                        <h5 className="text-xs sm:text-sm font-bold text-teal-950 dark:text-teal-50">
                            {currentUser?.name}
                        </h5>
                        <h6 className="text-xs font-bold text-teal-900 dark:text-teal-100">
                            {currentUser?.role}
                        </h6>
                    </div>

                </div>
                <h3 className="text-xl text-teal-950 dark:text-teal-50 font-bold">
                    {pathname === '/admin/products/new' ? 'add new product' : pathname === '/admin' ? 'overview' : pathname?.replace('/admin/','')}
                </h3>
            </div>
        </header>
    )
}