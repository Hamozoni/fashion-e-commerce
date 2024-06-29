"use client";
import {useCurrentUser} from "../../../hooks/useCurrentUser";
import { useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Overlay  from "../../../components/Overlay"
import AddressMap from "../../../components/AddressMap";
import { AppContext } from "../../../app/contextProvider";
import { ButtonWithIcon } from "../../../components/buttons";

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
                    <ul className=" z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full p-3 bg-green-100 rounded-md ">
                        <li>
                            <p className="flex justify-center">
                              <IoLocationOutline size={30} />
                            </p>
                            <address className=" mb-4">
                                {user?.address?.formatedAddress}
                            </address>
                        </li>
                        <li>
                            <ButtonWithIcon
                               text='update addres'
                               type='primary'
                               Icon={IoLocationOutline}
                               onClick={()=> setIsMapOpen(true)}
                            />
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