"use client";

import { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";

export const Editing = ()=>{

    const [isEditing,setIsEditing] = useState(false);

    return (
        <div className="absolute top-2 right-2">
            <button
                onClick={()=> setIsEditing(!isEditing)} 
                className="rounded-full border w-[30px] h-[30px] dark:border-teal-100  border-teal-900 text-teal-900 dark:text-teal-100 flex items-center justify-center ml-auto">
                <TfiMoreAlt size={18} />
            </button>
            {
                isEditing ? 
                <div className="mt-5">
                    <ul className="p-3 rounded-md border border-gray-200 dark:border-stone-800 bg-gray-100 dark:bg-stone-950">
                        <li className="text-sm font-bold text-teal-950 dark:text-teal-50 p-2 px-4">edit status</li>
                    </ul>
                </div>
                : null
            }

        </div>
    )
}