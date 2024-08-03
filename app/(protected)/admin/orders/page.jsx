"use client";
import { useEffect, useState } from "react";

import { MdPendingActions } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { IoIosCloudDownload } from "react-icons/io";

import { fetchData } from "../../../../lip/fetchData";
import Loading from "../../../loading";
import {Error} from "../../../../ui/components/error";
import {OrdersHeader} from "../../orders/ordersHeader"
import { ButtonWithIcon } from "../../../../ui/buttons/buttons";
import Image from "next/image";
import { OrderPayment } from "../../orders/orderSummary";
 
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
    const [orders,setOrders] = useState();
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [page,setPage] = useState(1);

    const fetchOrders = ()=> {
        setError(null)
        setIsLoading(true);

        fetchData(`orders/byStatus?status=${status?.toUpperCase()}&page=${page}`)
        .then((data)=> {
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
    },[status,page]);

    return (
        <div className="p-3 lg:px-8">
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
            <div className="">
                {
                    isLoading ? <Loading /> : !!error ? <Error onClick={fetchOrders}/> :
                    orders?.map(({id,createdAt,products,status,customer,totalPaidInCent,deliveryFree})=> (
                        <div key={id} className="capitalize p-3 rounded-md bg-gray-50 mb-3 border border-gray-200">
                            <div className="">
                                
                                <div className="mt-3 flex items-start gap-5">
                                    <OrdersHeader data={{id,createdAt,status}} />
                                    <div className="">
                                        <div className="flex items-start gap-2 min-w-fit">
                                            <Image className="rounded-md" src={customer?.image} width={40} height={60} alt="customer"/>
                                            <div className="">
                                                <h5 className="text-sm">{customer?.name}</h5>
                                                <h6 className="text-xs lowercase">{customer?.email}</h6>
                                            </div>
                                        </div>

                                        <h6 className=''
                                            >order items: {products?.length}
                                        </h6>

                                    </div>
                                    <OrderPayment totalPaidInCent={totalPaidInCent} deliveryFree={deliveryFree} />

                                </div>

                            </div>
                        </div>
                    ))
                }
                <div className="max-w-[150px] mx-auto my-3">

                    <ButtonWithIcon 
                        text='load more'
                        type='save'
                        Icon={IoIosCloudDownload}
                        />
                </div>
            </div>

        </div>
    )
}