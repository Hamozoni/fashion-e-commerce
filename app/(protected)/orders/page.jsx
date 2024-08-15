import { OrdersContainer } from "./ordersContainer";

function orderPage() {

const orderStatus =  ["pending","prossing","completed","canceled"];
const className = {
  li: 'p-3 rounded-md text-sm font-bold text-teal-950 dark:text-teal-50 bg-gray-100 dark:bg-stone-900'
}

  return (
    <div className="p-3 md:px-8">
      <header className="flex items-center justify-between capitalize">
          <h4 className="text-teal-950 dark:text-teal-50 font-bold text-xl mb-8"
            >your orders
          </h4>
          <nav>
              <ul className="flex items-center gap-3">
                <li className={className?.li}>all</li>
                {
                  orderStatus?.map((status)=> (
                    <li 
                        className={className?.li}
                        key={status}>
                      {status}
                    </li>

                  ))
                }
              </ul>
          </nav>
      </header>
      <OrdersContainer />
    </div>
  )
}

export default orderPage