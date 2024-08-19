
import { OrderStatus } from "../_components/orderStatus"
import { OverviewHeader } from "../_components/overviewHeader"
import { ProductsChart } from "../_components/productsChart"
import { RevenueSummary } from "../_components/revenueSummary"
import { OverviewContextProvider } from "../overviewContext"

export default function  overviewPage  () {

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
};