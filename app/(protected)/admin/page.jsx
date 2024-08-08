
import {OverviewContextProvider} from "./overviewContext";
import {OverviewHeader} from "./_components/overviewHeader";
import {RevenueSummary} from "./_components/revenueSummary";

// import dynamic from "next/dynamic";
// const {OrderStatusChart} = dynamic(()=> import("./_components/orderStatusChart",{ssr: false}));

import {OrderStatus} from "./_components/orderStatus"
import { ProductsChart } from "./_components/productsChart";

const  AdminPage =  () => {

  return (
    <div className="p-3 lg:px-8">
      <OverviewContextProvider >
        <OverviewHeader />
        <div className="">
            <OrderStatus />
            <RevenueSummary />
        </div>
        <ProductsChart />
      </OverviewContextProvider>
    </div>
  )
}

export default AdminPage