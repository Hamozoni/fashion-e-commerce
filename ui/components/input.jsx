import ZodError  from "./zodError";

export function Input({
    title,
    type,
    name,
    isLoading,
    error,
    placeholder,
    required=false
   }) {

    const className = {
        inputContainer : "flex items-center rounded-md overflow-hidden border border-gray-100 mb-2",
        input: 'w-full p-2 focus:bg-teal-50',
        inputIcon: 'bg-teal-900 p-2 text-teal-50',
    };

  return (
    <div className="">
      <div className={className.inputContainer}>
          <label htmlFor={title}/>
          <input
              disabled={isLoading} 
              className={className.input} 
              required={required}
              type={type}
              name={name}
              placeholder={placeholder}
            />
              
      </div>
      {
        error && 
        <ZodError />
      }
    </div>
  )
}