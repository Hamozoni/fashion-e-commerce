import { TbWorldSearch } from "react-icons/tb";

export const NoResults = () => {
    return (
        <div className="min-h-[300px] flex items-center justify-center capitalize text-gray-400">
            <div className="text-center">
               <TbWorldSearch size={60} />
               <h5 className="text-lg font-bold mt-3">no results found</h5>
            </div>
        </div>
    )
}