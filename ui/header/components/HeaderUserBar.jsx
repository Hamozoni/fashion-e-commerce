"use client"
import Link from "next/link";
import {useCurrentUser} from "../../../hooks/useCurrentUser"
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";
import SignOut from "./signOut";
import Languages from "./languages"
import { useState } from "react";
import Overlay from "../../../components/Overlay";
import { IoSettingsOutline ,IoLanguageSharp} from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";

function HeaderUserBar() {

    const [isAccount,setIsAccount] = useState(false)

    const currentUser = useCurrentUser();

    const className = {
        flex: 'flex items-center gap-4',
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
        // ul: 'fixed top-20 right-20 w-full min-w-fit z-50 bg-gray-100 rounded-md overflow-hidden py-2',
        li: 'px-4 py-2 w-[150px] min-w-[150px] hover:bg-green-100 flex items-center gap-2'
    };
    
  return (
    <div className={className.flex} >
        <div >
            <div className="">
                <div className="cursor-pointer">
                    {
                        currentUser ? 
                        <div className="" onClick={()=> setIsAccount(true)}>
                            {
                                currentUser?.image ?
                                <Image src={currentUser?.image} width={30} height={30} className="rounded-full" />
                                :<FaUserLarge />
                            }
                        </div>
                        :
                        <Link 
                            href="/auth/login" 
                            className={className.title}
                            >sign in
                        </Link>
                    }
                </div>
            </div>
            {  isAccount &&(
                <>
                <Overlay onClick={()=> setIsAccount(false)}/>
                    <div className={className.ul}>
                        <div className={className.li}>
                            <BsCartCheck size={22} />
                            <Link 
                                href="/orders" 
                                className={className.title}
                                >my orders
                            </Link>
                        </div>
                        <div className={className.li} >
                           <IoLanguageSharp size={22} />  <Languages />
                        </div>
                        <div className={className.li}>
                            <IoSettingsOutline size={22} /> <Link href='/setting'>setting</Link>
                        </div>
                        <div className={className.li}>
                           <SignOut/>
                        </div>
                    </div>
                </>
                )
            }

        </div>
    </div>
  )
}

export default HeaderUserBar