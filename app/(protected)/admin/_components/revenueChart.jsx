"use client"
import {Bar} from "react-chartjs-2";

import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {useEffect, useRef} from "react";



ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const RevenueChart = ({revenueData})=> {

    const data = {
        labels : [revenueData[0]?.name,revenueData[1]?.name,revenueData[2]?.name,revenueData[3]?.name],
        datasets:[ 
            {
              label: 'revenue',
              data : [
                revenueData[0]?.revenue / 100 || 0,
                revenueData[1]?.revenue / 100 || 0,
                revenueData[2]?.revenue / 100 || 0,
                revenueData[3]?.revenue / 100 || 0,
              ],
              backgroundColor:["#6be1c67a",'#e16b967a','#6b94e17a','#e06be17a'],
              borderColor: "#7ee1dea1",
              borderWidth: '#7ee1dea1',
              color: '#7ee1dea1',
              borderRadius: 10
            }
        ],
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
        return ()=> window.removeEventListener('resize',handleResize);

    },[]);

    return (
        <div className="relative w-full h-full p-3 bg-white dark:bg-black rounded-md mt-3">
            <Bar 
                ref={chartRef} 
                options={options} 
                data={data}
                 />
        </div>
    )
};