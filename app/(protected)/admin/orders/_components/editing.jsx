"use client";

import { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";

import {navStatus} from "../page";
import {updateData } from "@/lip/fetchData";
import { Loading } from "@/ui/models/Loading";

export const Editing = ({clientSecret,status,setOrders,setOrdersNum})=>{

    const [isEditing,setIsEditing] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [openedSection,setOpenedSection] = useState(null);

    const className = {
        li : 'flex items-center gap-2 text-teal-950 py-1 dark:text-teal-50 hover:text-teal-800 hover:dark:text-teal-200'
    };

    const handleUpdateStatus = (status)=> {
        setIsLoading(true)
        updateData(`orders/updateStatus?status=${status.toUpperCase()}&clientSecret=${clientSecret}`)
        .then((data)=> {
            setOrders(prev => {
               const newOrders =  prev.filter(e=> e.id !== data.id);

                return [...newOrders]
            });
            setOrdersNum(prev => prev - 1)
            setIsLoading(false)
            console.log(data)
        })
        .catch((error)=> {
            console.log(error)
        })

    }
    
    return (
        <div className="absolute top-2 right-2">
            {
                isLoading ? <Loading /> : null
            }
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
                                <ul className="mt-2">
                                    {
                                        navStatus?.map(({name,Icon})=> (
                                            status.toLowerCase() !== name  &&
                                            <li 
                                                onClick={()=> handleUpdateStatus(name)}
                                                className={className.li}
                                                key={name}><Icon />{name}
                                            </li>
                                        ))
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