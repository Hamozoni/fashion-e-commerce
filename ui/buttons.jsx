import React from 'react'

export const ButtonWithIcon = ({
    text,
    Icon,
    type,
    onClick
}) => {

    const className = {
        flex: 'flex items-center justify-center gap-2 font-medium text-lg w-full p-2 border capitalize rounded-md',
        primary: 'bg-green-600  border-green-400 hover:bg-green-700 text-green-50',
        delete: 'bg-rose-100  border-rose-200 hover:bg-rose-50 text-rose-700',
        save: 'bg-green-100  border-green-200 hover:bg-green-50 text-green-900',
    }

  return (
    <button 
        onClick={onClick}
        className={`${className.flex} ${className[type]}`}
        >
        <Icon size={22}/>
        {text}
    </button>
  )
}
