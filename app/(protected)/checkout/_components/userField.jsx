"use client";
import { useContext } from "react";
import { AppContext } from "../../../contextProvider";
import {UserAddress} from "@/ui/header/components/userAddress";

export function UserField({name}) {
    const {currentUser} = useContext(AppContext);

    if(!currentUser) return null
  return (
    <div className="flex items-center mb-3 gap-2 p-3 rounded-md bg-gray-50 dark:bg-black">
        <h3 className="text-md font-bold text-teal-950 dark:text-teal-50 capitalize">{name}: </h3>
        <div className="text-teal-900 dark:text-teal-100 text-sm">
            {
                name === "address" ? 
                <address>
                    {currentUser?.address ? currentUser?.address?.formatedAddress : <UserAddress />}
                </address>
                :
                <h5>{currentUser[name]}</h5>
            }
        </div>
    </div>
  )
};