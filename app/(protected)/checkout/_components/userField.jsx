"use client";
import { useContext } from "react";
import { AppContext } from "../../../contextProvider";

export function UserField({name}) {
    const {currentUser} = useContext(AppContext);

    if(!currentUser) return null
  return (
    <div className="flex items-center mb-3 gap-2 p-3 rounded-md capitalize bg-gray-50">
        <h3 className="text-md font-bold text-teal-950">{name}: </h3>
        <div className="text-teal-900 text-sm">
            {
                name === "address" ? 
                <address>
                    {currentUser?.address?.formatedAddress}
                </address>
                :
                <h5>{currentUser[name]}</h5>
            }
        </div>
    </div>
  )
};