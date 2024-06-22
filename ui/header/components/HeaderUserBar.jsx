"use client"
import Link from "next/link";
import {useCurrentUser} from "../../../hooks/useCurrentUser"
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";
import SignOut from "./signOut";
import Languages from "./languages"
import { useState } from "react";
import { IoSettingsOutline ,IoLanguageSharp} from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";

function HeaderUserBar() {

    const [isAccount,setIsAccount] = useState(false)

    const currentUser = useCurrentUser();

    const className = {
        flex: 'flex items-center gap-4',
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
        container:'fixed left-0 top-[100px] w-full h-dvh flex justify-between z-50',
        ul: ' min-w-fit bg-gray-100 rounded-md overflow-hidden py-2',
        li: 'px-4 py-2 w-[150px] min-w-[150px] hover:bg-green-100 flex items-center gap-2'
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
                <div onClick={(e)=> {
                    e.stopPropagation();
                    setIsAccount(false)

                }}
                className={className.container}
                >
                    <p></p>
                    <ul  className={className.ul} >
                        <li className={className.li}>
                            <BsCartCheck size={22} />
                            <Link 
                                href="/orders" 
                                className={className.title}
                                >my orders
                            </Link>
                        </li>
                        <li className={className.li} >
                           <IoLanguageSharp size={22} />  <Languages />
                        </li>
                        <li className={className.li}>
                            <IoSettingsOutline size={22} /> <Link href='/setting'>setting</Link>
                        </li>
                        <li className={className.li}>
                           <SignOut/>
                        </li>
                    </ul>
                </div>
                )
            }

        </div>
    </div>
  )
}

export default HeaderUserBar