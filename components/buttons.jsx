import {SyncLoader} from "react-spinners"

export const ButtonWithIcon = ({
    text,
    Icon,
    type,
    onClick,
    disabled = false
}) => {

    const className = {
        flex: 'flex items-center justify-center shadow-lg hover:shadow-none gap-2 font-medium text-sm w-full p-1 px-4 border capitalize rounded-md hover:scale-95',
        primary: 'bg-green-800  border-green-400 hover:bg-green-600 text-green-50',
        delete: 'bg-rose-100  border-rose-200 hover:bg-rose-50 text-rose-700',
        save: 'bg-green-100  border-green-200 hover:bg-green-50 text-green-900',
    }

  return (
    <button 
        onClick={onClick}
        className={`${className.flex} ${className[type]}`}
        disabled={disabled}
        >
          {
            disabled ?
              <SyncLoader />
            :
            <>
              <Icon size={16}/>
              {text}
            </>
          }
    </button>
  )
}
