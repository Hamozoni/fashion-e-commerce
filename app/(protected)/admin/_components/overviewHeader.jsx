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

    const overview = [
        {
            name: 'total revenue',
            Icon : BsBank2,
            data: getCurrency(overviewData?.totalRevenue)
        },
        {
            name: 'total orders',
            Icon : TbShoppingCartCheck,
            data: overviewData?.totalOrders + " orders"
        },
        {
            name: 'total customers',
            Icon : FaPeopleRoof,
            data: overviewData?.totalCustomers + ' customers'
        },
        {
            name: 'total admins',
            Icon : MdOutlineAdminPanelSettings,
            data: overviewData?.totalAdmins + " admins"
        },
        {
            name: 'total ordered products',
            Icon : MdOutlineProductionQuantityLimits,
            data:  overviewData?.totalOrderdProducts + " products"
        },
    ]


    return (
        <div className=" mb-3">
            <ul className="flex items-center gap-5 overflow-x-auto py-5">
                {
                    overview?.map(({name,Icon,data})=> (
                        <li className="min-w-fit flex-grow w-[150px] flex flex-col items-center justify-between cursor-pointer hover:scale-105 gap-3 rounded-md p-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                            <div className="flex items-center justify-center rounded-full w-[80px] h-[80px] bg-white shadow-sm dark:bg-black">
                                <Icon size={40} className="text-teal-700 dark:text-teal-400" />
                            </div>
                            <div className=" capitalize text-center">
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