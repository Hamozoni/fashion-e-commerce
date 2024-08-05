"use client"
import {Line} from "react-chartjs-2";

import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { useContext, useEffect, useRef, useState } from "react";
import { OverviewContext } from "../overviewContext";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const OrderStatusChart = () => {

    const {overviewData} = useContext(OverviewContext);
    const [orderSortedBy,setOrderSortedBy] = useState('month')

    const data = {
        labels : ["pending","prossing","compeleted","canceled"],
        datasets:[ {
            label: 'Order Status',
            data : [
                overviewData?.totalPendingOrder,
                overviewData?.totalProcessingOrder,
                overviewData?.totalCompletedOrder,
                overviewData?.totalCanceledOrder
            ],
            borderColor: "rgb(75,192,192)"
        }]
    };

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Orders Status'
        }

    };

    const chartRef = useRef(null)

    useEffect(()=> {
        const handleResize = ()=> {
            const chart = chartRef?.current;
            if(chart) {
                chart.resize()
            }
        };

        window.addEventListener('resize',handleResize);

        return ()=> window.removeEventListener('resize',handleResize)
    },[]);

    const orderSummaryNav = ['3 days','week','month'];
    const ordersStatusSammary = [
        {
            name: 'pending',
            data: overviewData?.totalPendingOrder,
        },
        {
            name: 'prossing',
            data: overviewData?.totalProcessingOrder
        },
        {
            name: 'compeletaed',
            data:  overviewData?.totalCompletedOrder,
        },
        {
            name: 'canceled',
            data:  overviewData?.totalCanceledOrder
        },
    ]


    return (
        <section className="mt-5">
            <header className=" capitalize flex items-center justify-between" >
               <h4 className=" text-lg font-bold text-teal-950 dark:text-teal-50">
                    orders summary
                </h4>
               <nav>
                   <ul className="flex items-center gap-1 bg-gray-100 dark:bg-stone-900 p-1 rounded-md">
                      {
                        orderSummaryNav?.map((name)=> (
                            <li 
                                 key={name}
                                onClick={()=> setOrderSortedBy(name)}
                                className={`${orderSortedBy == name ? 'bg-white dark:bg-black' :'hover:bg-gray-50'} text-sm font-bold text-teal-900 dark:text-teal-100 px-4 cursor-pointer py-1 rounded-md`}>
                                {name}
                            </li>
                        ))
                    }
                   </ul>
               </nav>
            </header>
            <ul className="flex items-center gap-3 capitalize my-4 overflow-x-auto">
                {
                    ordersStatusSammary?.map(({name,data})=> (
                        <li 
                            className={`${name === 'canceled' ? 'bg-rose-200 text-rose-900' : name === 'pending' ? 'bg-yellow-100 text-yellow-900' : name === 'compeletaed' ? 'bg-green-100 text-green-900' : 'bg-blue-100 text-blue-900'} text-center text-lg font-bold flex-grow p-3 rounded-md cursor-pointer hover:scale-105`}
                            key={name}>
                            {data + " " + name}
                        </li>
                    ))
                }
            </ul>
            <div className=" relative w-full h-full">
                <Line ref={chartRef} options={options} data={data} />
            </div>

        </section>
    )
}