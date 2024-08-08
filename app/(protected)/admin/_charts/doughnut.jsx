"use client"
import {Doughnut} from "react-chartjs-2";

import { 
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Title,
    Legend
} from "chart.js";
import {useEffect, useRef} from "react";



ChartJs.register(
    ArcElement,
    Tooltip,
    Legend,
    Title
);

export const DoughnutChart = ({labels,chartData,bgColors,text})=> {

    const data = {
        labels : labels,
        datasets:[ {
            label:text,
            data :chartData,
            backgroundColor: bgColors,
            borderColor: bgColors
        }]
    };
    const options = {
        responsive: true,
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

    const textCenterPlugin = {
        id: 'textCenter',
        beforeDraw : (chart)=> {

            const {ctx,width,height} = chart;
            ctx.restore();
            // const fontSize = (height / 114).toFixed(2);
             ctx.font = `20px sans-serif`;
             ctx.textBaseLine = 'middle';

             const textX = Math.round((width - ctx.measureText(text).width) / 2);
             const textY = (height / 2) + 10;

             ctx.fillText(text,textX,textY);

             ctx.save()
        }
    }
    
    return (
        <div className=" relative w-full h-full p-3 bg-white dark:bg-black  rounded-md mt-3">
            <Doughnut ref={chartRef} options={options} data={data} plugins={[textCenterPlugin]} />
        </div>
    )
}