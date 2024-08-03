

export const OrdersHeader = ({data : {id,createdAt,products,status}})=> {

    const className = {
        title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold mb-2",
        title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold mb-2",
    };

    return (
        <header>
            <div className="md:flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h4 className={className.title_2}
                        >order ID : <small>{id}</small>
                    </h4>
                    <h4 className={className.title_2}
                        >status : <small>{status}</small>
                    </h4>
                </div>
                <div className=" flex items-center gap-4">
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
             <h6 className={className.title_1}
                >items: {products?.length}
            </h6>
        </header>
    )
}