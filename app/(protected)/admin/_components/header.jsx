"use client";

import { useContext } from "react";
import { AppContext } from "../../../contextProvider";
import { usePathname } from "next/navigation";

export const Header = ()=> {
    const {currentUser} = useContext(AppContext);
    const pathname = usePathname();

    return (
        <header className="bg-teal-50 dark:bg-stone-950 p-3 lg:px-8">
            <div className=" capitalize">
                <h3 className="text-xl text-teal-950 dark:text-teal-50 font-bold">
                    {pathname === '/admin/products/new' ? 'add new product' :pathname?.replace('/admin/','')}
                </h3>
            </div>
        </header>
    )
}