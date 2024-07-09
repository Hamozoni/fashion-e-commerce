import {PulseLoader} from "react-spinners"

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
}
