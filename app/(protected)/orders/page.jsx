
import { OrdersContainer } from "./ordersContainer";
import { StatusNavbar } from "./statusNavbar";

async function orderPage() {

  return (
    <div className="p-3 md:px-8">
      <header className="flex items-center justify-between flex-wrap gap-3 capitalize mb-8 sticky top-[70px] left-0 z-20 bg-white dark:bg-black">
          <h4 className="text-teal-950 dark:text-teal-50 font-bold text-xl"
            >your orders
          </h4>
          <StatusNavbar />
      </header>
      <OrdersContainer />
    </div>
  )
}

export default orderPage