"use client";
import { useEffect, useState } from "react";

import { MdPendingActions } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";

import { fetchData } from "../../../../lip/fetchData";
import Loading from "../../../loading";
import {Error} from "../../../../ui/components/error"
 
const navStatus = [
    {name: 'pending',Icon: MdPendingActions},
    {name: 'complated',Icon: GrCompliance},
    {name: 'cancelled',Icon: GiReturnArrow},
];

// PENDING
// PROCESSING
// COMPLETED
// CANCELLED

const className = {
    li: 'relative flex items-center gap-2 before:absolute before:-bottom-2  before:left-1 before:w-0 hover:before:w-full before:h-[1px]'
}


export default function ordersPage () {

    const [status,setStatus] = useState('pending');
    const [orders,setOrders] = useState({});
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const fetchOrders = ()=> {
        setError(null)
        setIsLoading(true);

        fetchData(`orders/byStatus?status=${status?.toUpperCase()}`)
        .then((data)=> {

            console.log(data);
            setOrders(data);
        })
        .catch((error)=> {

            setError(error);
            console.log(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    }

    useEffect(()=> {
        fetchOrders();
    },[status]);

    return (
        <div className="">
            <nav className="p-3 my-5">
                <ul className="flex items-center justify-center cursor-pointer gap-4 text-teal-950 dark:text-teal-50 text-[16px] font-bold capitalize">
                {
                    navStatus?.map(({name,Icon})=> (
                        <li 
                            onClick={()=> setStatus(name)}
                            key={name} 
                            className={`${status === name ? 'text-teal-300 before:w-full before:bg-teal-300' : 'before:bg-teal-950 dark:before:bg-teal-50'} ${className.li}`}>
                            <Icon size={22}/> {name}
                       </li>

                    ))
                }
                </ul>
            </nav>
            {
                isLoading ? <Loading /> : !!error ? <Error onClick={fetchOrders}/> : ''
            }

        </div>
    )
}