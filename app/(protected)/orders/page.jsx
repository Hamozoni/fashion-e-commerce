
import { OrdersContainer } from "./ordersContainer";
import { StatusLi } from "./statusLi";

async function orderPage({searchParams}) {

const  status = searchParams.status;

const orderStatus =  ["pending","prossing","completed","canceled"];

const className = {
  li: 'p-3 rounded-md text-sm font-bold text-teal-950 dark:text-teal-50 bg-gray-100 dark:bg-stone-900 cursor-pointer'
}

  return (
    <div className="p-3 md:px-8">
      <header className="flex items-center justify-between flex-wrap capitalize mb-8">
          <h4 className="text-teal-950 dark:text-teal-50 font-bold text-xl"
            >your orders
          </h4>
          <nav>
              <ul className="flex items-center justify-center gap-3">
                <li className={className?.li}>all</li>
                {
                  orderStatus?.map((st)=> (
                    <StatusLi key={st} st={st} />
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