"use client";
import {useCurrentUser} from "../../../hooks/useCurrentUser";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Overlay  from "../../../components/Overlay"
import AddressMap from "../../../components/AddressMap";

function UserAddress() {

    const [isMapOpen,setIsMapOpen] = useState(false);
    const user = useCurrentUser();
    
    const className = {
        delivery: 'flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-gray-700 hover:font-medium'
    }

  return (
      <>
        <div >
            <button className={className.delivery} onClick={()=> setIsMapOpen(true)}> 
               <IoLocationOutline size={22} />
               {user?.address ? user?.address?.city  :"delivering to ..."}
            </button>
            <ul className=" absolute left-0 top-4 min-w-[fit-content]">
                <li><address>{user?.address?.formatedAddress}</address></li>
                <li><button>update addres</button></li>
            </ul>
        </div>
        {
            isMapOpen && 
            <>

                <Overlay onClick={()=> setIsMapOpen(false)}/>
                <AddressMap onClick={()=> setIsMapOpen(false)}/>
            </>
        }
    </>
  )
}

export default UserAddress