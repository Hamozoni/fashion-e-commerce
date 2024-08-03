"use client"
import Image from "next/image";
import { OrdersHeader } from "../../orders/ordersHeader";
import { OrderPayment } from "../../orders/orderSummary";
import { RiArrowDownWideLine,RiArrowUpWideFill } from "react-icons/ri";
import { TfiMoreAlt } from "react-icons/tfi";
import { useState } from "react";
import { CartItemsCard } from "../../../../ui/cards/cartItemsCard";

const className = {
    li: 'relative flex items-center gap-2 before:absolute before:-bottom-2  before:left-1 before:w-0 hover:before:w-full before:h-[1px]',
    title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold mb-2",
    title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold mb-2",
}

export const OrderCard = ({data})=> {

    const {id,createdAt,products,status,customer,totalPaidInCent,deliveryFree,userId} = data;

    const [isProducts,setIsProducts] = useState(false)

    return (
        <div className="capitalize relative p-3 rounded-md bg-gray-50 dark:bg-stone-950 mb-3 border border-gray-300 dark:border-stone-700">
            <button className=" absolute top-2 right-2 w-[35px] h-[35px] rounded-full border dark:border-teal-100  border-teal-900 text-teal-900 dark:text-teal-100 flex items-center justify-center">
                <TfiMoreAlt size={22} />
            </button>
            <div className="">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className=" flex-[33%]">
                        <h5 className={className.title_1}>order info</h5>
                        <OrdersHeader data={{id,createdAt,status}} />
                    </div>
                    <div className="flex items-start gap-5 flex-[67%] ">
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
                                    <div key={item?.cartId} className="w-[300px] min-w-[300px]">
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
