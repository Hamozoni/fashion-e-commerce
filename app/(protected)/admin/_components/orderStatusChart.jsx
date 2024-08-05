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
import { useContext } from "react";
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
    console.log(overviewData);

    const data = {
        labels : ["pending","prossing","compeleted","canceled"],
        datasets:[ {
            label: 'order status',
            data : [
                overviewData?.totalPendingOrder,
                overviewData?.totalProcessingOrder,
                overviewData?.totalCompletedOrder,
                overviewData?.totalCanceledOrder
            ],
            borderColor: "rgb(75,192,192)"
        }]
    };

    const option = {

    }


    return <Line options={option} data={data} />
}