"use client"
import Link from "next/link";
import {useCurrentUser} from "../../../hooks/useCurrentUser"
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";
import SignOut from "./signOut";
import Languages from "./languages"
import { useState } from "react";
import Overlay from "../../../components/Overlay";

function HeaderUserBar() {

    const [isAccount,setIsAccount] = useState(false)

    const currentUser = useCurrentUser();

    const className = {
        flex: 'flex items-center gap-4',
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
        ul: 'absolute top-10 left-[-15px] w-full min-w-fit z-50 bg-gray-100 rounded-md overflow-hidden',
        li: 'px-4 py-2 w-fit min-w-fit]'
    };
    
  return (
    <div className={className.flex} >
        <div className="relative">
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
                            <Link 
                                href="/orders" 
                                className={className.title}
                                >my orders
                            </Link>
                        </div>
                        <div className={className.li} >
                            <Languages />
                        </div>
                        <div className={className.li}>
                            <Link href='/setting'>setting</Link>
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