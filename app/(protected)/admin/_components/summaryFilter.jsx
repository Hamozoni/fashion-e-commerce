"use client";


export const SummaryFilter = ({data,setFilteredBy,filteredBy,title})=> {
    
    return (
        <header className=" capitalize flex items-center justify-between flex-wrap gap-3" >
            <h4 className=" text-lg font-bold text-teal-950 dark:text-teal-50">
                {title} for a {filteredBy?.name}
            </h4>
            <nav>
                <ul className="flex items-center gap-1 bg-gray-100 dark:bg-stone-900 p-1 rounded-md border border-white dark:border-stone-950">
                {
                    data?.map(({name,date})=> (
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