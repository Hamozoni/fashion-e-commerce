import { BiError } from "react-icons/bi";
import { IoMdCheckmarkCircle } from "react-icons/io";

export function ErrorSucces({error,success}) {

    const className = {
        general: "w-full p-2 my-3 font-medium capitalize rounded-md flex items-center justify-center ",
        succes: 'bg-teal-200 text-teal-950 ',
        error: 'bg-rose-200 text-rose-700 ',

    }
  return (

      error || success ?
    
        <div className={`${className.general} ${error ? className.error : className.succes}`}> 
           {
            error ? 
            <h4 className="flex items-center font-bold ">
                <BiError size={24} /> {error}
            </h4>
            : success && 
            <h4 className="flex items-center font-bold">
                <IoMdCheckmarkCircle size={24} /> {success}
            </h4>
           }
        </div>

        :''
  )
}

 