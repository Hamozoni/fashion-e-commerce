"use client";

import { useContext } from "react";
import {AppContext} from "../../../contextProvider";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";

export const AdminAccount = ()=> {

    const {currentUser} = useContext(AppContext);

    const userAvatar =  currentUser?.image ?  <Image 
                src={currentUser?.image} 
                width={50} height={50} 
                alt="admin avatar"
                className="rounded-full"
                />
                :<FaUserLarge
                    size={40} 
                    className="text-teal-900 dark:text-teal-100 rounded-full border border-teal-900 dark:border-teal-100" 
                />
    return (

        <div className="flex items-center gap-2 borer-b border-b-gray-100">
            {userAvatar}
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