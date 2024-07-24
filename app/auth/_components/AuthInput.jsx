import { BiError } from "react-icons/bi";

export function AuthInput({type,name,Icon,isLoading,error}) {

    const className = {
        inputContainer : "flex items-center rounded-md overflow-hidden border border-gray-200 dark:border-stone-800 hover:hover:border-teal-300 mb-2",
        input: 'w-full p-2 text-teal-950 dark:text-teal-50 bg-transparent',
        inputIcon: 'bg-teal-100 dark:bg-stone-950 p-2 text-teal-950 dark:text-teal-50',
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

 