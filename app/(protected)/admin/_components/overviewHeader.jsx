"use client"

import { useContext } from "react";
import {OverviewContext} from "../overviewContext";
import {BsBank2 } from "react-icons/bs";
import { TbShoppingCartCheck } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {getCurrency} from "../../../../lip/getCurrency"

export const OverviewHeader = ()=> {

    const { overviewData} = useContext(OverviewContext);

    console.log(overviewData)

    // const {
    //     totalOrders,
    //     totalCustomers,
    //     totalAdmins
    // } = overviewData;

    // const  {
    //     totalPaidInCent,
    //     totalProductsQuantity
    // } =  totalRevenue

    const overview = [
        {
            name: 'total revenue',
            Icon : BsBank2,
            data: getCurrency(overviewData?.totalRevenue?._sum?.totalPaidInCent)
        },
        {
            name: 'total orders',
            Icon : TbShoppingCartCheck,
            data: overviewData?.totalOrders
        },
        {
            name: 'total customers',
            Icon : FaPeopleRoof,
            data: overviewData?.totalCustomers
        },
        {
            name: 'total admins',
            Icon : MdOutlineAdminPanelSettings,
            data: overviewData?.totalAdmins
        },
        {
            name: 'total ordered products',
            Icon : MdOutlineProductionQuantityLimits,
            data:  overviewData?.totalRevenue?._sum?.totalProductsQuantity
        },
    ]


    return (
        <div className="">
            <ul className="flex items-center gap-5 overflow-x-auto">
                {
                    overview?.map(({name,Icon,data})=> (
                        <li className="flex min-w-fit items-center gap-3 rounded-md p-4 bg-teal-50 dark:bg-stone-900 border border-gray-200 dark:border-stone-700">
                            <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-white dark:bg-black">
                                <Icon size={40} className="text-teal-400" />
                            </div>
                            <div className=" capitalize flex justify-between h-full flex-col">
                                <h3 className="text-lg font-bold text-teal-950 dark:text-teal-50">{data}</h3>
                                <h5 className="text-xs font-bold text-teal-900 dark:text-teal-100">{name}</h5>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}