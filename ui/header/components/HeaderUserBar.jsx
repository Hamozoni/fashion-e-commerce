"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
// icons
import { IoSettingsOutline ,IoLanguageSharp,IoCartOutline} from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
// components
import SignOut from "../../../components/signOut";
import Languages from "./languages";
import Overlay from "../../../components/Overlay";
// hooks
import {AppContext} from "../../../app/contextProvider"

function HeaderUserBar() {

    const [isAccount,setIsAccount] = useState(false)
    const {currentUser} = useContext(AppContext);
    
    const className = {
        flex: 'flex items-center gap-4',
        title: 'text-md font-medium text-teal-900 capitalize cursor-pointer',
        container:'fixed left-0 top-0 w-full h-dvh flex justify-between z-50',
        ul: ' fixed top-20 right-5 min-w-fit max-h-fit bg-teal-50 rounded-md  py-2 z-50 ',
        li: 'px-4 py-2 hover:bg-teal-100 flex items-center gap-3 text-lg font-medium text-teal-800 cursor-pointer'
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
                <Overlay onClick={()=> setIsAccount(false)} />
                    <div className={className.ul}>
                        <header className="p-3 mb-3 border-b border-teal-100">
                            <h3 className="mb-3 text-teal-800 cursor-pointer">
                                <GiTireIronCross/>
                            </h3>
                            <div className="flex gap-2 items-center">
                                <div className="">
                                    {
                                        currentUser?.image ?
                                        <Image src={currentUser?.image} width={40} height={40} className="rounded-full" />
                                        :<FaUserLarge />
                                    }
                                </div>
                                <div className="">
                                    <h4 className="text-teal-950 font-bold text-lg">{currentUser?.name}</h4>
                                    <p className="text-teal-800 font-bold text-sm"> {currentUser?.email}</p>
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
                            <li className={className.li} >
                            <IoLanguageSharp size={24} />  <Languages />
                            </li>
                            <li className={className.li}>
                                <IoSettingsOutline size={24} /> <Link href='/setting'>setting</Link>
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
}

export default HeaderUserBar