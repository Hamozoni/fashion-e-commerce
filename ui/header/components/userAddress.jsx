"use client";

import { useContext, useState } from "react";
// icons
import { IoLocationOutline } from "react-icons/io5";
// overlay model
import {Overlay}  from "../../models/overlay";
// map model
import {AddressMap} from "../../models/addressMap";
// app context
import { AppContext } from "../../../app/contextProvider";
// component
import { ButtonWithIcon } from "../../buttons/buttons";
import { usePathname, useRouter } from "next/navigation";

export function UserAddress() {

    const {currentUser} = useContext(AppContext)

    const [isMapOpen,setIsMapOpen] = useState(false);
    const [isUpdateAddress,setIsUpdateAddress] = useState(false);
    
    const className = {
        delivery: 'flex items-center gap-3 text-sm font-medium cursor-pointer  border-teal-50 text-teal-900 dark:text-teal-100 hover:text-teal-700 dark:hover:text-teal-50 line-clamp-1'
    };

    const router = useRouter();
    const pathname = usePathname()

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
                        <IoLocationOutline size={24} />
                        {currentUser?.address?.neighborhood}
                    </button>
                    :
                    <button 
                        className={className.delivery} 
                        onClick={()=> {
                            if(!!currentUser) {
                                setIsMapOpen(true);
                            }else {
                                router.push(`/auth/login?callback=${pathname}`)
                            }
                            }}> 
                        <IoLocationOutline size={24} /> delivery to ?
                    </button>
                }
            </div>
            {
               ( currentUser?.address && isUpdateAddress) &&
                <>
                    <Overlay 
                        onClick={()=> setIsUpdateAddress(false)}
                    />
                    <ul 
                        className=" z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[700px] max-w-full p-3 bg-gray-100 dark:bg-stone-950 
                        rounded-md shadow-md border border-gray-200 dark:border-stone-800"
                        >
                        <li>
                            <p className="flex justify-center">
                              <IoLocationOutline size={30} />
                            </p>
                            <address className="mb-4 text-sm text-center text-teal-950 dark:text-teal-50 font-bold">
                                {currentUser?.address?.formatedAddress}
                            </address>
                        </li>
                        <li className="max-w-[180px] mx-auto">
                            <ButtonWithIcon
                               text='update addres'
                               type='save'
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