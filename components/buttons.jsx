import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { PulseLoader } from "react-spinners";

export const ButtonWithIcon = ({
    text,
    Icon,
    type,
    onClick,
    disabled = false
}) => {

    const className = {
        flex: 'flex items-center justify-center shadow-md hover:shadow-none gap-2 font-bold text-sm w-full py-2 px-4 border capitalize rounded-full hover:scale-95',
        primary: 'bg-teal-700  border-teal-400 hover:bg-teal-600 text-green-50',
        delete: 'bg-rose-100  border-rose-200 hover:bg-rose-50 text-rose-700',
        save: 'bg-teal-100  border-teal-200 hover:bg-teal-50 text-teal-900',
    }

  return (
    <button 
        onClick={onClick}
        className={`${className.flex} ${className[type]}`}
        disabled={disabled}
        >
          {
            disabled ?
              <PulseLoader size={10} className=" opacity-50"/>
            :
            <>
              <Icon size={16}/>
              {text}
            </>
          }
    </button>
  )
};

const className = {
    nextPrevBtn : "absolute cursor-pointer hover:scale-110 hover:border-teal-300 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center"
};

export const ScrollLeftBtn = ({onClick,leftScroll})=> {
    return (

        leftScroll === 0 ? null :
        <botton
            onClick={onClick} 
            className={`${className.nextPrevBtn} left-0 border-l-teal-300`}
            >
            <IoIosArrowBack size={24} color='#5eead4'/>
        </botton>
    )
};

export const ScrollRightBtn = ({onClick,leftScrollEnds})=> {
     return (
        leftScrollEnds <= 1 ? null :
        <botton 
            onClick={onClick}
            className={`${className.nextPrevBtn} right-0 border-r-teal-300`}>
           <IoIosArrowForward size={24} color='#5eead4'/>
        </botton>
     )
};

export const LoadMoreBtn = ({isMoreData,isLoadingMore,onClick})=> {
    return (

            isMoreData ? 
            <div className="min-w-[200px] min-h-full flex items-center justify-center">
                {
                    isLoadingMore ? <PulseLoader color="#115e59"/> :
                    <button
                        onClick={onClick} 
                        className=" capitalize text-xl text-teal-800 font-medium hover:scale-95"                                            >load more
                    </button>
                }
            </div>
            : null
    )
}
