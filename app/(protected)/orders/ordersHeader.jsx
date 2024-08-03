

export const OrdersHeader = ({data : {id,createdAt,status}})=> {

    const className = {
        title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold",
        title_2: "text-teal-900 dark:text-teal-100 text-[16px] font-bold",
    };

    return (
        <header>
            <div >
                <div className="flex flex-wrap items-center gap-4">
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