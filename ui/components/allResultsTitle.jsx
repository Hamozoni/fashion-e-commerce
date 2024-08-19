import { TbAdjustmentsSearch } from "react-icons/tb"


export const AllResultsTitle = ({count}) => {
    return (
        <h5 className='text-sm font-bold text-gray-500 capitalize flex items-center gap-2'>
            <TbAdjustmentsSearch size={24} /> all results {count}
        </h5>
    )
}