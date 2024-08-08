"use client"
import {Doughnut} from "react-chartjs-2";

import { 
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import {useEffect, useRef} from "react";



ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);

export const DoughnutChart = (labels,chartData,bgColors)=> {

    const data = {
        labels : labels,
        datasets:[ {
            label: 'Order Status',
            data :chartData,
            backgroundColor: bgColors
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
        <div className=" relative w-full h-full p-3 bg-white dark:bg-black  rounded-md mt-3">
            <Doughnut ref={chartRef} options={options} data={data} />
        </div>
    )
}