"use client";
import { MdPendingActions } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { useState } from "react";

const navStatus = [
    {name: 'pending',Icon: MdPendingActions},
    {name: 'complated',Icon: GrCompliance},
    {name: 'returned',Icon: GiReturnArrow},
]


export default function ordersPage () {

    const [status,setStatus] = useState('pending');

    return (
        <div className="">
            <nav className="p-3 my-5">
                <ul className="flex items-center justify-center cursor-pointer gap-4 text-teal-950 dark:text-teal-50 text-[18px] font-bold capitalize">
                {
                    navStatus?.map(({name,Icon})=> (
                        <li key={name} className={`${status === name ? '' : ''} flex items-center gap-2 before:top-1  before:left-1 before:w-full before:h-2 before:bg-slate-600`}>
                            <Icon size={22}/> {name}
                       </li>

                    ))
                }
                </ul>
            </nav>

        </div>
    )
}