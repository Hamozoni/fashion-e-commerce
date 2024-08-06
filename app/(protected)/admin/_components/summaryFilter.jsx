"use client";


export const SummaryFilter = ({setFilteredBy,filteredBy,title})=> {
    
    const now = new Date();
    const orderSummaryNav = [
        {
            name: 'week',
            date: new Date(now.getFullYear(),now.getMonth(),now.getDay() - 7)
        },
        {
            name: 'month',
            date: new Date(now.getFullYear(),now.getMonth() - 1,now.getDay())
        },
        {
            name: 'year',
            date: new Date(now.getFullYear() - 1,now.getMonth(),now.getDay())
        }
    ];
    return (
        <header className=" capitalize flex items-center justify-between" >
            <h4 className=" text-lg font-bold text-teal-950 dark:text-teal-50">
                {title} for a {filteredBy?.name}
            </h4>
            <nav>
                <ul className="flex items-center gap-1 bg-gray-100 dark:bg-stone-900 p-1 rounded-md">
                {
                    orderSummaryNav?.map(({name,date})=> (
                        <li 
                            key={name}
                            onClick={()=> setFilteredBy({name,date})}
                            className={`${filteredBy?.name == name ? 'bg-white dark:bg-black' :'hover:bg-gray-50 dark:hover:bg-stone-950'} text-sm font-bold text-teal-900 dark:text-teal-100 px-4 cursor-pointer py-1 rounded-md`}>
                            {name}
                        </li>
                    ))
                }
                </ul>
            </nav>
        </header>
    )
}