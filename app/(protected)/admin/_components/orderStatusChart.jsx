"use client"
import {Bar} from "react-chartjs-2";

import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    // PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { useContext, useEffect, useRef } from "react";
import { OverviewContext } from "../overviewContext";

ChartJs.register(
    CategoryScale,
    LinearScale,
    // PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const OrderStatusChart = () => {

    const {overviewData} = useContext(OverviewContext);
    console.log(overviewData);

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


    return (
        <div className=" relative w-full h-full">
            <Bar ref={chartRef} options={options} data={data} />
        </div>
    )
}