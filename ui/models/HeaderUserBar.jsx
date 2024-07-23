"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
// icons
import {IoLanguageSharp,IoCartOutline} from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart  } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { LuUserX2 } from "react-icons/lu";
// components
import {SignOut} from "../buttons/signOut";
import {Overlay} from "./Overlay";
import {ThemeModel} from "./themeModel";
import {UserAddress} from "../header/components/userAddress";
// hooks
import {AppContext} from "../../app/contextProvider"

export function HeaderUserBar() {

    const [isAccount,setIsAccount] = useState(false)
    const {currentUser} = useContext(AppContext);
    
    const className = {
        flex: 'flex items-center gap-4',
        title: 'text-md font-medium text-teal-900 capitalize cursor-pointer',
        container:'fixed left-0 top-0 w-full h-dvh flex justify-between z-50',
        ul: 'border border-teal-100 fixed top-[70px] right-3 lg:right-8 min-w-[300px] max-h-fit bg-gray-50 rounded-md  py-2 z-50 ',
        li: 'px-4 py-3 capitalize hover:bg-gray-200 flex items-center gap-3 text-lg font-medium text-teal-950 cursor-pointer'
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
            {  isAccount &&(
                <>
                <Overlay onClick={()=> setIsAccount(false)} />
                    <div className={className.ul}>
                        <header className="p-4 mb-4 border-b border-teal-100">
                            <h3 className="mb-3 text-teal-800 cursor-pointer">
                                <GiTireIronCross/>
                            </h3>
                            <div className="flex">
                                <div className="">
                                    {
                                        currentUser?.image ?
                                        <Image src={currentUser?.image} width={50} height={50} className="rounded-full" />
                                        :<FaUserLarge />
                                    }
                                </div>
                                <div className="">
                                    <h4 className="text-teal-950 font-bold text-lg pl-3">{currentUser?.name}</h4>
                                    <p className="text-teal-800 font-bold text-sm pl-3"> {currentUser?.email}</p>
                                    <UserAddress />
                                </div>
                            </div>
                        </header>
                        <ul  >
                            <li className={className.li}>
                                <BsCartCheck size={24} />
                                <Link 
                                    href="/orders" 
                                    className={className.title}
                                    >my orders
                                </Link>
                            </li>
                            <li className={className.li} >
                            <IoCartOutline size={24} />  <Link href='/cart'>cart</Link>
                            </li>
                            <li className={className.li} >
                            <FaRegHeart size={24} />  <Link href='/likedList'>my wistList</Link>
                            </li>
                            <ThemeModel />
                            <li className={className.li}>
                                <LuUserX2  size={24} /> delete my account
                            </li>
                            
                            <li className={className.li}>
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