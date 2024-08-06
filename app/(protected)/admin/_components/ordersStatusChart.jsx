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
import {useEffect, useRef, useState } from "react";



ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const OrdersStatusChart = ({ordersData})=> {

    const data = {
        labels : ["pending","prossing","compeleted","canceled"],
        datasets:[ {
            label: 'Order Status',
              data : [
                ordersData?.pendingOrders,
                ordersData?.processingOrders,
                ordersData?.completedOrders,
                ordersData?.canceledOrders
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

    return (
        <div className=" relative w-full h-full">
            <Line ref={chartRef} options={options} data={data} />
        </div>
    )
}