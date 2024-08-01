import { MdRunningWithErrors } from "react-icons/md";
import { ButtonWithIcon } from "../buttons/buttons";

export const Error = ({onClick})=> {
    return (
        <div className="h-screen flex items-center justify-center capitalize">
            <div className="">
                <p className="text-lg font-bold uppercase text-teal-950 dark:text-teal-50 text-center mb-5">
                    opps! something went wrong place don't close the page and try agian
                </p>

                <ButtonWithIcon 
                    text='try again' 
                    Icon={MdRunningWithErrors} 
                    onClick={onClick}
                    type='save'
                    />
            </div>
        </div>
    )
}