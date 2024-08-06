"use client"
import {OverviewContextProvider} from "./overviewContext";
import {OverviewHeader} from "./_components/overviewHeader";

// import dynamic from "next/dynamic";
// const {OrderStatusChart} = dynamic(()=> import("./_components/orderStatusChart",{ssr: false}));

import {OrderStatus} from "./_components/orderStatus"

const  AdminPage =  () => {

  return (
    <div className="p-3 lg:px-8">
      <OverviewContextProvider >
        <OverviewHeader />
        <div className="">
            <OrderStatus />
        </div>
      </OverviewContextProvider>
    </div>
  )
}

export default AdminPage