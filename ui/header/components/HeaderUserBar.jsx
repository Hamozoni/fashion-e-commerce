"use client"
import Link from "next/link";
import {useCurrentUser} from "../../../hooks/useCurrentUser"
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";


function HeaderUserBar() {

    const currentUser = useCurrentUser();

    const className = {
        flex:  `flex items-center gap-4`,
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
    };
    
  return (
    <section className={className.flex} >
        <div className="">
            <div className="cursor-pointer">
                {
                    currentUser ? 
                    <div className="">
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
        <div className="">
            <Link 
                href="/orders" 
                className={className.title}
                >orders
            </Link>
        </div>
    </section>
  )
}

export default HeaderUserBar