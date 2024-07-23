"use client";

import { useContext, useState } from "react";
// icons
import { IoLocationOutline } from "react-icons/io5";
// overlay model
import {Overlay}  from "../../models/Overlay";
// map model
import {AddressMap} from "../../models/addressMap";
// app context
import { AppContext } from "../../../app/contextProvider";
// component
import { ButtonWithIcon } from "../../buttons/buttons";

export function UserAddress() {

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
                    <ul className=" z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full p-3 bg-gray-100 rounded-md shadow-md border border-gray-200">
                        <li>
                            <p className="flex justify-center">
                              <IoLocationOutline size={30} />
                            </p>
                            <address className="mb-4 text-sm md:text-lg text-teal-950 font-bold">
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
};