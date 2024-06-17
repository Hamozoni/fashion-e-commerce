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
        ul: 'absolute bottom-7 left-0 w-full min-w-fit z-50 bg-gray-100 rounded-md overflow-hidden',
        li: 'px-4 py-2 min-w-fit block'
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
                        <div>
                            <Link 
                                href="/orders" 
                                className={className.title}
                                >my orders
                            </Link>
                        </div>
                        <div>
                            <Languages />
                        </div>
                        <div>
                            <Link href='/setting'>setting</Link>
                        </div>
                        <div>
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