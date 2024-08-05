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

    const { overviewData: 
        {
            totalRevenue : {_sum :{
                totalPaidInCent,
                totalProductsQuantity
            }},
            totalOrders,
            totalCustomers,
            totalAdmins
        }
    } = useContext(OverviewContext);

    const overview = [
        {
            name: 'total revenue',
            Icon : BsBank2,
            data: getCurrency(totalPaidInCent)
        },
        {
            name: 'total orders',
            Icon : TbShoppingCartCheck,
            data: totalOrders
        },
        {
            name: 'total customers',
            Icon : FaPeopleRoof,
            data: totalCustomers
        },
        {
            name: 'total admins',
            Icon : MdOutlineAdminPanelSettings,
            data: totalAdmins
        },
        {
            name: 'total ordered products',
            Icon : MdOutlineProductionQuantityLimits,
            data: totalProductsQuantity
        },
    ]


    return (
        <div className="">
            <ul className="flex items-center gap-5">
                {
                    overview?.map(({name,Icon,data})=> (
                        <li className="flex items-center gap-3 rounded-md p-4 bg-gray-100 dark:bg-stone-900 border border-gray-200 dark:border-stone-700">
                            <div className="flex items-center justify-center rounded-full w-[100px] h-[100px] bg-white dark:bg-black">
                                <Icon size={40} className="text-teal-950 dark:text-teal-50" />
                            </div>
                            <div className="text-teal-950 dark:text-teal-50">
                                <h3>{data}</h3>
                                <h5>{name}</h5>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}