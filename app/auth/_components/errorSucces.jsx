import { BiError } from "react-icons/bi";
import { IoMdCheckmarkCircle } from "react-icons/io";

export function ErrorSucces({error,sucess}) {

    const className = {
        general: "w-full p-2 my-3 font-medium capitalize rounded-md text-green-900 flex items-center justify-center ",
        succes: 'bg-green-300',
        error: 'bg-rose-200',

    }
  return (

      error || sucess ?
    
        <div className={`${className.general} ${error ? className.error : className.succes}`}> 
           {
            error ? 
            <h4 className="flex items-center">
                <BiError size={22} /> {error}
            </h4>
            : sucess && 
            <h4 className="flex items-center">
                <IoMdCheckmarkCircle size={22} /> {sucess}
            </h4>
           }
        </div>

        :''
  )
}

 