"use client";
import {useCurrentUser} from "../../../hooks/useCurrentUser";
import { useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Overlay  from "../../../components/Overlay"
import AddressMap from "../../../components/AddressMap";
import { AppContext } from "../../../app/contextProvider";

function UserAddress() {

    const {innerWidth} = useContext(AppContext)

    const [isMapOpen,setIsMapOpen] = useState(false);
    const [isUpdateAddress,setIsUpdateAddress] = useState(false);
    const user = useCurrentUser();
    
    const className = {
        delivery: 'flex items-center text-sm font-medium cursor-pointer hover:text-gray-700 hover:font-medium line-clamp-1'
    }

  return (
      <>
        <div >
            <div className="">
                {
                    user?.address ? 
                    <button className={className.delivery} onClick={()=> setIsUpdateAddress(true)}> 
                        <IoLocationOutline size={22} />
                        {innerWidth < 500 ? user?.address?.city.slice(0,7) + '...' : user?.address?.city}
                    </button>
                    :
                    <button className={className.delivery} onClick={()=> setIsMapOpen(true)}> 
                        <IoLocationOutline size={22} /> delivery to ?
                    </button>
                }
            </div>
            {
               ( user?.address && isUpdateAddress) &&
                <>
                    <Overlay onClick={()=> setIsUpdateAddress(false)}/>
                    <ul className=" z-50 absolute left-0 top-8 min-w-[fit-content] p-3 bg-green-100 rounded-md">
                        <li>
                            <address className="flex items-center mb-4">
                                <IoLocationOutline size={22} />
                                {user?.address?.formatedAddress}
                            </address>
                        </li>
                        <li>
                            <button 

                                onClick={()=> setIsMapOpen(true)}
                                className="bg-green-400 py-1  rounded-md text-green-50 w-full"
                                >update addres
                            </button>
                        </li>
                    </ul>
                </>
            }
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