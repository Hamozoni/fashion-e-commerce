"use client";
import { useContext } from "react";
import { AppContext } from "../../../contextProvider";

function UserField({name}) {
    const {currentUser} = useContext(AppContext);

    if(!currentUser) return null
  return (
    <div className="flex gap-2">
        <h3>{name}: </h3>
        <div className="">
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
}

export default UserField