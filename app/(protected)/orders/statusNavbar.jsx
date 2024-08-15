"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const StatusNavbar = ({st})=> {

    const searchParams = useSearchParams();
    const status = searchParams.get('status');
    const router = useRouter()

    const orderStatus =  ["pending","prossing","completed","canceled"];

    const className = {
        li: 'text-teal-950 dark:text-teal-50 bg-gray-50 hover:bg-white dark:hover:bg-black dark:bg-stone-900'
      }

    return (

    <nav className="px-3 py-1 bg-gray-100 dark:bg-stone-950 overflow-x-auto rounded-md">
        <ul className="flex items-center gap-3 ">
          <li 
              onClick={()=> router.push(`/orders`)} 
              className={`${!status ? 'bg-teal-400 text-teal-950' : className?.li} px-4 py-2 rounded-md text-sm font-bold cursor-pointer `}
          >all</li>
          {
            orderStatus?.map((st)=> (
                <li
                    onClick={()=> router.push(`/orders?status=${st}`)} 
                    className={`${status === st ? 'bg-teal-400 text-teal-950' : className?.li} px-4 py-2 rounded-md text-sm font-bold cursor-pointer `}
                    key={st}>
                    {st}
                 </li>
            ))
          }
        </ul>
    </nav>
    )
}