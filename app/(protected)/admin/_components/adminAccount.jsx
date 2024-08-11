"use client";

import { useContext } from "react";
import {AppContext} from "../../../contextProvider";
import Image from "next/image";

export const AdminAccount = ()=> {

    const {currentUser} = useContext(AppContext)
    return (

        <div className="flex items-center gap-2 py-5 px-3 md:px-8 borer-b border-b-gray-100">
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
    )
}