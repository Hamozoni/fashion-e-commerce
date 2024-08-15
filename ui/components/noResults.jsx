import { TbWorldSearch } from "react-icons/tb";

export const NoResults = () => {
    return (
        <div className="min-h-[300px] flex w-full capitalize text-gray-400">
            <div className="flex items-center justify-center  flex-col gap-5 mx-auto">
               <TbWorldSearch size={60} />
               <h5 className="text-lg font-bold mt-3">no results found</h5>
            </div>
        </div>
    )
}