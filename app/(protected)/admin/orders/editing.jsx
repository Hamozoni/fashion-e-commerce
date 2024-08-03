"use client";

import { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";

import {navStatus} from "./page";

export const Editing = ()=>{

    const [isEditing,setIsEditing] = useState(false);
    const [openedSection,setOpenedSection] = useState(null)

    return (
        <div className="absolute top-2 right-2">
            <button
                onClick={()=> setIsEditing(!isEditing)} 
                className="rounded-full border w-[30px] h-[30px] dark:border-teal-100  border-teal-900 text-teal-900 dark:text-teal-100 flex items-center justify-center ml-auto">
                <TfiMoreAlt size={18} />
            </button>
            {
                isEditing ? 
                <div className="mt-3">
                    <ul className="rounded-md border border-gray-200 dark:black bg-gray-100 dark:bg-stone-950">
                        <li 
                            onClick={()=> setOpenedSection('status')}
                            className="text-sm font-bold cursor-pointer text-teal-950 dark:text-teal-50 p-2 px-4"
                            >edit status
                            {
                                openedSection ===  'status' ?
                                <ul>
                                    {
                                        navStatus?.map(({name,Icon})=> {
                                            <li className="flex items-center gap-2" key={name}><Icon />{name}</li>
                                        })
                                    }
                                </ul>
                                 : null
                            }
                        </li>
                    </ul>
                </div>
                : null
            }

        </div>
    )
}