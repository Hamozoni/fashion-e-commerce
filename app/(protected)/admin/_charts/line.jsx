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
import {useEffect, useRef} from "react";



ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const LineChart = ({ChartData,labels,bgColors,text})=> {

    const data = {
        labels : labels,
        datasets:[ {
            label: text,
              data : ChartData,
            backgroundColor: bgColors,
            borderColor: "rgb(75,192,192)",
            tenstion: 0.4
        }]
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

        return ()=> window.removeEventListener('resize',handleResize)
    },[]);

    return (
        <div className=" relative w-full h-full p-3 bg-white dark:bg-black  rounded-md mt-3">
            <Line ref={chartRef} options={options} data={data} />
        </div>
    )
};