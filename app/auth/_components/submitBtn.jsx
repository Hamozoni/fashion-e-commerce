
import { PulseLoader } from "react-spinners";
export function SubmitBtn({isLoading,text}) {

    const className = {
        submitbtn: 'flex justify-center items-center w-full text-center p-2 capitalize mb-4 rounded-md border border-green-50 shadow-md bg-slate-800 text-green-50 hover:bg-slate-700'
    }

  return (

    
    <button 
        disabled={isLoading} 
        className={className.submitbtn}>
        {isLoading ? < PulseLoader size={20} color="#fff"/>: text}
    </button>
    )
}
