"use client";

import { useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Overlay  from "../../../components/Overlay"
import AddressMap from "../../../components/AddressMap";
import { AppContext } from "../../../app/contextProvider";
import { ButtonWithIcon } from "../../../components/buttons";

function UserAddress() {

    const {innerWidth,currentUser} = useContext(AppContext)

    const [isMapOpen,setIsMapOpen] = useState(false);
    const [isUpdateAddress,setIsUpdateAddress] = useState(false);
    
    const className = {
        delivery: 'flex items-center text-sm font-medium cursor-pointer rounded-full border border-teal-50 p-2 text-teal-900 hover:text-teal-700 hover:bg-teal-50 hover:font-medium line-clamp-1'
    }

  return (
      <>
        <div >
            <div className="">
                {
                    currentUser?.address ? 
                    <button 
                        className={className.delivery} 
                        onClick={()=> setIsUpdateAddress(true)}
                        > 
                        <IoLocationOutline size={22} />
                        {currentUser?.address?.neighborhood}
                    </button>
                    :
                    <button className={className.delivery} onClick={()=> setIsMapOpen(true)}> 
                        <IoLocationOutline size={22} /> delivery to ?
                    </button>
                }
            </div>
            {
               ( currentUser?.address && isUpdateAddress) &&
                <>
                    <Overlay 
                        onClick={()=> setIsUpdateAddress(false)}
                        />
                    <ul className=" z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full p-3 bg-green-100 rounded-md ">
                        <li>
                            <p className="flex justify-center">
                              <IoLocationOutline size={30} />
                            </p>
                            <address className=" mb-4">
                                {currentUser?.address?.formatedAddress}
                            </address>
                        </li>
                        <li>
                            <ButtonWithIcon
                               text='update addres'
                               type='primary'
                               Icon={IoLocationOutline}
                               onClick={()=>{
                                  setIsMapOpen(true);
                                  setIsUpdateAddress(false)
                               }}
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