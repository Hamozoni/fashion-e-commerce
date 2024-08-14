
import { CartItemsCard } from "@/ui/cards/cartItemsCard";
import { OrderSummary } from "./orderSummary";

const className = {
    title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold mb-2",
    title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold mb-2",
}


export const OrdersHeader = ({data : {id,createdAt,status}})=> {

    const className = {
        title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold",
        title_2: "text-teal-900 dark:text-teal-100 text-[16px] font-bold",
    };

    return (
        <header>
            <div >
                <div className="flex flex-wrap items-center gap-4 gap-y-0">
                    <h4 className={className.title_2}
                        >order ID : <small>{id}</small>
                    </h4>
                    <h4 className={className.title_2}
                        >status : <small>{status}</small>
                    </h4>
                    <h6 className={className.title_2}
                        > order date :  
                        <small>{ "  " + new Date(createdAt).toDateString()}</small>
                    </h6>
                    <h6 className={className.title_2}>stimated dilevry : 
                        <small>
                            {new Date(new Date(createdAt).setDate(new Date(createdAt).getDate() + 3)).toDateString()}
                        </small>
                    </h6>
                </div>
             </div>
        </header>
    )
}

export const OrderCard = ({order,address})=> {

    const {id,createdAt,products, deliveryFree,totalPaidInCent,status} = order;

    return (
        <div className=" capitalize mb-8 rounded-md p-3 border-b dark:border-stone-800 bg-gray-50 dark:bg-stone-950">
            <div className="md:flex items-start gap-5 ">
                <div className="flex-[50%]  lg:flex-[60%] max-w-[50%] lg:max-w-[60%]">
                    <OrdersHeader data={{id,createdAt,products,status}}/>
                    <h6 className={className.title_1}
                        >items: {products?.length}
                    </h6>
                    <div className="flex items-center max-w-full gap-3 overflow-x-auto">
                        {
                            products.map((product)=> (
                                <div key={product.cartId} className="min-w-[350px]">
                                    <CartItemsCard 
                                        product={product} 
                                        isOrdered={true} 
                                        />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <OrderSummary 
                    address={address} 
                    data={{deliveryFree,totalPaidInCent}} 
                    />
            </div>
        </div>
    )
}