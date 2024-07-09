import { BiError } from "react-icons/bi";

export function AuthInput({type,name,Icon,isLoading,error}) {

    const className = {
        inputContainer : "flex items-center rounded-md overflow-hidden border border-gray-200 mb-2",
        input: 'w-full p-2 focus:bg-teal-50',
        inputIcon: 'bg-teal-100 p-2 text-teal-950',
    }
  return (
    <div className="">
      <div className={className.inputContainer}>
          <div className={className.inputIcon}>
              <Icon size={22}/>
          </div>
          <input
              disabled={isLoading} 
              className={className.input} 
              required
              type={type}
              name={name}
              placeholder={name}/>
              
      </div>
      {
        error && 
        <h5 
          className="p-2 pt-0 text-rose-500 font-medium capitalize flex items-center justify-center"
          ><BiError size={20} /> {error?.message}
        </h5>
      }
    </div>
  )
}

 