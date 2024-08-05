"use Client"

import { useContext } from "react";
import {overviewContext} from "../overviewContext";
import {BsBank2 } from "react-icons/bs";
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
    } = useContext(overviewContext);

    const overview = [
        {
            name: 'total revenue',
            Icon : BsBank2,
            data: getCurrency(totalPaidInCent)
        },
    ]


    return (
        <div className="">
            <ul>
                <li>
                    <div className="">

                    </div>
                </li>
            </ul>
        </div>
    )
}