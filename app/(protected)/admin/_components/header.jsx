"use client";

import { useContext } from "react";
import { AppContext } from "../../../contextProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = ()=> {
    const {currentUser} = useContext(AppContext);
    const pathname = usePathname();

    return (
        <header className="bg-teal-50 dark:bg-stone-900 p-3 lg:px-8 sticky top-0 border-t-4 border-t-teal-300">
            <div className=" capitalize flex items-center justify-between">
                <h3 className="text-xl text-teal-950 dark:text-teal-50 font-bold">
                    {pathname === '/admin/products/new' ? 'add new product' :pathname?.replace('/admin/','')}
                </h3>
                <div className="">
                    <Image className="rounded-full" src={currentUser.image} width={60} height={60} alt="admin avatar" />
                </div>
            </div>
        </header>
    )
}