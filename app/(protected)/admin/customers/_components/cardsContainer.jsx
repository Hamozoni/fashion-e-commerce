"use client";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

import { CustomerCard } from "./customerCard";
import { useState } from "react";
import { fetchData } from "@/lip/fetchData";
import { ButtonWithIcon } from "@/ui/buttons/buttons";

export const CardsContainer = ({customers,count})=> {

    const [allCustomers,setAllCustomers] = useState(customers);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(null);
    const [page,setPage] = useState(1);

    const handleFetchMore = ()=> {
        setIsLoading(true);
        setIsError(null);

        fetchData(`admin/customers?page=${page + 1}`)
        .then((data)=> {
            setAllCustomers(prev=> [...prev,...data?.customers]);
            setPage(page + 1);
        })
        .catch(error=> {
            setIsError(error)
        })
        .finally(()=> {
            setIsLoading(false);
        })

    }


    return (
        <section className="">
            <h5 className="text-sm text-gray-400 font-bold mb-3 flex items-center capitalize">
               <TbAdjustmentsSearch /> all results: {count} 
            </h5>
            <div className="">
                {
                    allCustomers?.map((customer)=> (
                        <CustomerCard key={customer?.id} customer={customer} />
                    ))
                }
            </div>
            <div className="max-w-[150px] mx-auto my-5">
                {
                    count <= allCustomers?.length ?
                    <ButtonWithIcon
                       text={isError ? 'try again' : 'load more'}
                       Icon={isError ?MdOutlineReportGmailerrorred: LiaTruckLoadingSolid}
                       disabled={isLoading}
                       type={isError ? 'delete': 'save'}
                       onClick={handleFetchMore}
                     />
                    :null
                }
            </div>
        </section>
    )
}