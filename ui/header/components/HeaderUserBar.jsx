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
        flex:  `flex items-center gap-4 relative`,
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
        ul: ' absolute left-0 top-10 min-w-fit z-50 bg-gray-100'
    };
    
  return (
    <section className={className.flex} >
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
                <ul className={className.ul}>
                    <li>
                        <Link 
                            href="/orders" 
                            className={className.title}
                            >orders
                        </Link>
                    </li>
                    <li>
                        <Languages />
                    </li>
                    <li>
                        <Link href='/setting'>setting</Link>
                    </li>
                    <li>
                    <SignOut/>
                    </li>
                </ul>
            </>
            )
        }
    </section>
  )
}

export default HeaderUserBar