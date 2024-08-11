"use client"
import { useState } from "react";
import Image from "next/image";

import { OrdersHeader } from "../../../orders/ordersHeader";
import { OrderPayment } from "../../../orders/orderSummary";
import { CartItemsCard } from "../../../../../ui/cards/cartItemsCard";
import {Editing} from "./editing";

import { RiArrowDownWideLine,RiArrowUpWideFill } from "react-icons/ri";

const className = {
    li: 'relative flex items-center gap-2 before:absolute before:-bottom-2  before:left-1 before:w-0 hover:before:w-full before:h-[1px]',
    title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold mb-2",
    title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold mb-2",
}

export const OrderCard = ({data,setOrders,index,setOrdersNum})=> {

    const {
        id,createdAt,
        products,
        status,
        customer,
        totalPaidInCent,
        deliveryFree,
        userId,paymentClientSecret
    } = data;

    const [isProducts,setIsProducts] = useState(false)

    return (
        <div className="capitalize relative p-3 rounded-md bg-gray-50 dark:bg-stone-950 mb-8 border border-gray-200 shadow-md dark:border-stone-700">
            <Editing 
                clientSecret={paymentClientSecret} 
                status={status} 
                setOrders={setOrders}
                setOrdersNum={setOrdersNum} 
                />
            <p className=" w-8 h-8 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full text-lg text-teal-50 dark:text-teal-950 bg-teal-500 dark:bg-teal-50  flex justify-center items-center">{index + 1}</p>
            <div className="">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className=" flex-[33%]">
                        <h5 className={className.title_1}>order info</h5>
                        <OrdersHeader data={{id,createdAt,status}} />
                    </div>
                    <div className="sm:flex items-start gap-5 flex-[67%] ">
                        <div className="flex-[50%]">
                            <OrderPayment 
                                totalPaidInCent={totalPaidInCent}
                                deliveryFree={deliveryFree} 
                                />
                        </div>
                        <div className="flex-[50%]">
                            <h5 className={className.title_1}>customer info</h5>
                            <h6 className={className.title_2}
                                >user ID: <small>{userId}</small> 
                            </h6> 
                            <div className="flex items-start gap-2 min-w-fit">
                                <Image className="rounded-md" src={customer?.image} width={50} height={80} alt="customer"/>
                                <div className="">
                                    <h5 className={className.title_1}>{customer?.name}</h5>
                                    <h6  className={`${className.title_2} line-clamp-1 lowercase`}>
                                        <small>{customer?.email}</small>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                

                </div>

            </div>
            <div className="max-w-full mt-2">
                <button 
                    className={`${className.title_1} text-center w-full flex justify-center items-center gap-5 capitalize`}
                    onClick={()=> setIsProducts(!isProducts)}
                    >
                    <h6 className={className.title_1}
                         >order items: <small>{products?.length} products</small>
                    </h6>
                    {
                        isProducts ? 
                        <RiArrowDownWideLine  size={24}/>
                        : <RiArrowUpWideFill   size={24}/>
                    }
                </button>
                <div className=" max-w-full overflow-x-auto">
                    {
                        isProducts ? 
                        <div className="flex gap-3 min-w-fit">
                            {
                                products?.map((item)=> (
                                    <div key={item?.cartId} className="w-[380px] min-w-[380px]">
                                        <CartItemsCard product={item} isOrdered={true}/>
                                    </div>
                                ))
                            }
                        </div> : null
                    }

                </div>
            </div>
        </div>
    )
};
