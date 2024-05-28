

export function AuthInput({type,name,Icon}) {

    const className = {
        inputContainer : "flex items-center rounded-md overflow-hidden border border-gray-100 mb-2",
        input: 'w-full p-2 focus:bg-green-50',
        inputIcon: 'bg-green-900 p-2 text-green-100',
    }
  return (
    <div className={className.inputContainer}>
        <div className={className.inputIcon}>
            <Icon size={22}/>
        </div>
        <input 
            className={className.input} 
            required
            type={type}
            name={name}
            placeholder={name}/>
            
    </div>
  )
}

 