import { OrdersContainer } from "./ordersContainer"

function orderPage() {

  return (
    <div className="p-3 md:px-8">
      <header>
          <h4 className="text-teal-950 dark:text-teal-50 font-bold text-xl capitalize mb-8"
            >your orders
          </h4>
      </header>
      <OrdersContainer />
    </div>
  )
}

export default orderPage