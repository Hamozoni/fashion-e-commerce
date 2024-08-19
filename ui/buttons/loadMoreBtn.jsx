import { BiErrorAlt } from "react-icons/bi"
import { ButtonWithIcon } from "./buttons"
import { LiaTruckLoadingSolid } from "react-icons/lia"

export const LoadMoreBtn = ({isError,isLoading,onClick})=> {
    return (
        <div className="max-w-[150px] mx-auto my-4">
            <ButtonWithIcon
                text={isError ? 'try againg' : 'load more'}
                Icon={isError ? BiErrorAlt :LiaTruckLoadingSolid}
                type={isError ? 'delete' : 'save'}
                disabled={isLoading}
                
                onClick={onClick}
            />
        </div>
    )
}