"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
// icons
import {IoCartOutline} from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart  } from "react-icons/fa";
import { LuUserX2 } from "react-icons/lu";
// components
import {SignOut} from "../buttons/signOut";
import {Overlay} from "./overlay";
import {ThemeModel} from "./themeModel";
import {UserAddress} from "../header/components/userAddress";
// hooks
import {AppContext} from "../../app/contextProvider"

export function HeaderUserBar() {

    const [isAccount,setIsAccount] = useState(false)
    const {currentUser} = useContext(AppContext);
    
    const className = {
        flex: 'flex items-center gap-4',
        title: 'text-md font-medium text-teal-900 dark:text-teal-100 capitalize cursor-pointer',
        container:'fixed left-0 top-0 w-full h-dvh flex justify-between z-50',
        ul: 'fixed top-0 right-0  min-w-[300px] max-h-screen h-screen bg-gray-50 dark:bg-black py-2 z-50 ',
        li: 'px-4 py-3 capitalize hover:bg-gray-200 dark:hover:bg-teal-950 flex items-center gap-3 text-sm font-medium text-teal-950 dark:text-teal-100 cursor-pointer'
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
                                <Image src={currentUser?.image} width={40} height={40} className="rounded-full" />
                                :<FaUserLarge />
                            }
                        </div>
                        :
                        <Link 
                            href="/auth/login" 
                            className={className?.title}
                            >sign in
                        </Link>
                    }
                </div>
            </div>
            {  (isAccount && currentUser) &&(
                <>
                <Overlay onClick={()=> setIsAccount(false)} />
                    <div className={className.ul}>
                        <header className="p-4 mb-4 border-b border-teal-100 dark:border-teal-950">
                            <div className="flex">
                                <div className="">
                                    {
                                        currentUser?.image ?
                                        <Image src={currentUser?.image} width={50} height={50} className="rounded-full" />
                                        :<FaUserLarge />
                                    }
                                </div>
                                <div className="">
                                    <h4 className="text-teal-950 dark:text-teal-50 font-bold text-lg pl-3">{currentUser?.name}</h4>
                                    <p className="text-teal-800 dark:text-teal-100 font-bold text-sm pl-3"> {currentUser?.email}</p>
                                </div>
                            </div>
                        </header>
                        <ul  className="max-h-full overflow-y-auto">
                            <li onClick={()=> setIsAccount(false)} className={className.li}>
                                <BsCartCheck size={24} />
                                <Link 
                                    href="/orders" 
                                    className={className.title}
                                    >my orders
                                </Link>
                            </li>
                            <li onClick={()=> setIsAccount(false)} className={className.li} >
                            <IoCartOutline size={24} />  <Link href='/cart'>cart</Link>
                            </li>
                            <li onClick={()=> setIsAccount(false)} className={className.li} >
                            <FaRegHeart size={24} />  <Link href='/likedList'>my wistList</Link>
                            </li>
                            <ThemeModel />
                            <li onClick={()=> setIsAccount(false)} className={className.li}>
                                  <UserAddress />
                            </li>
                            <li onClick={()=> setIsAccount(false)} className={className.li}>
                                <LuUserX2  size={24} /> delete my account
                            </li>
                            
                            <li onClick={()=> setIsAccount(false)} className={className.li}>
                            <SignOut/>
                            </li>
                        </ul>
                    </div>
    
                </>
                )
            }

        </div>
    </div>
  )
};