import { getCurrency } from "@/lip/getCurrency";

const className = {
    title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold mb-2",
    title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold mb-2",
};

export const OrderPayment = ({totalPaidInCent,deliveryFree})=> {
    return (
        <section className="">
            <h5 className={className.title_1}>order summary</h5>
            <div className="">
                <div className="flex items-center justify-between">
                    <h6 className={className.title_2}>subtotal:</h6>
                    <h5 className={className.title_2}>
                        {getCurrency(totalPaidInCent - (totalPaidInCent / 100) * 15)}
                    </h5>
                </div>
                <div className="flex items-center justify-between">
                    <h6 className={className.title_2}>delivery fee:</h6>
                    <h5 className={className.title_2}>
                        {deliveryFree === 0 ? 'free': getCurrency(deliveryFree)}
                    </h5>
                </div>
                <div className="flex items-center justify-between">
                    <h6 className={className.title_2}>tax:</h6>
                    <h5 className={className.title_2}>{getCurrency((totalPaidInCent / 100) * 15)}</h5>
                </div>
                <div className="flex items-center justify-between">
                    <h6 className={className.title_1}>totla:</h6>
                    <h5 className={className.title_1}>{getCurrency(totalPaidInCent)}</h5>
                </div>
            </div>
        </section>
    )
}

export const OrderSummary = ({address,data:{deliveryFree,totalPaidInCent}})=> {

    return (
        <div className=" capitalize bg-gray-50 dark:bg-stone-950 shadow-md p-3 flex-[50%] lg:flex-[35%] rounded-md sticky top-[100px] mb-8">
            <section className=" mb-4">
                <h5 className={className.title_1} >delivery </h5>
                <div className="">
                    <h5 className={className.title_2}> 
                        address:
                    </h5>
                    <small>
                        <address className={className.title_2}>
                        {address?.formatedAddress}
                        </address>
                    </small>
                </div>
                <p className={className.title_2}
                    >delivery fee: {deliveryFree === 0 ? 'free': getCurrency(deliveryFree)}
                </p>
            </section>
           <OrderPayment deliveryFree={deliveryFree} totalPaidInCent={totalPaidInCent}/>
        </div>
    )
}