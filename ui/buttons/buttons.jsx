// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// loader
import { PulseLoader } from "react-spinners";

export const ButtonWithIcon = ({
    text,
    Icon,
    type,
    onClick,
    disabled = false
}) => {

    const className = {
        flex: 'flex items-center justify-center shadow-md hover:shadow-none gap-2 font-bold text-sm w-full py-2 px-4 border-2 capitalize rounded-full hover:scale-95',
        primary: 'bg-teal-200 dark:bg-teal-950  border-teal-400 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900 text-green-900 dark:text-teal-100',
        delete: 'border-rose-200 dark:border-rose-800 text-rose-700',
        save: 'border-teal-300 dark:border-teal-950 text-teal-600',
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
    nextPrevBtn : "absolute cursor-pointer hover:scale-110 border-gray-200 hover:border-teal-300 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center"
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

export const LoadMoreBtn = ({isLoadingMore,onClick})=> {
    return (

        isLoadingMore ? <PulseLoader color="#115e59"/> :
        <button
            onClick={onClick} 
            className=" capitalize text-xl text-teal-800 dark:text-teal-100 font-medium hover:scale-95"                                            >load more
        </button>
    )
}
