
import { OrdersContainer } from "./ordersContainer";
import { StatusNavbar } from "./statusNavbar";

async function orderPage() {

  return (
    <div className="p-3 md:px-8">
      <header className="flex items-center justify-between flex-wrap gap-3 capitalize mb-8 sticky top-[80px] left-0 z-20 bg-teal-50 dark:bg-stone-700 p-3 rounded-md shadow-md">
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