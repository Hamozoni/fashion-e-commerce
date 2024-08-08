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


export const BarChart = ({chartData,labels,text,bgColors})=> {

    const data = {
        labels : labels,
        datasets:[ 
            {
              label: text,
              data : chartData,
              backgroundColor:bgColors,
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
            text,
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