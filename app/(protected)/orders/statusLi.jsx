"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const StatusLi = ({st})=> {

    const searchParams = useSearchParams();
    const status = searchParams.get('status');
    const router = useRouter()

    const className = {
        li: 'p-3 rounded-md text-sm font-bold text-teal-950 dark:text-teal-50 bg-gray-100 dark:bg-stone-900 cursor-pointer'
      }

    return (
        <li
            onClick={()=> router.push(`/order?status=${st}`)} 
            className={`${status === st ? 'bg-teal-400 text-teal-950' : ''} ${className?.li}`}
            key={st}>
             {st}
        </li>
    )
}