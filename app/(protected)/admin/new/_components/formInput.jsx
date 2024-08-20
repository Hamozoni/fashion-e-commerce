import {ZodError} from "@/ui/components/zodError";

const className = {
  inputClass : 'w-full text-sm max-w-full text-teal-950 dark:text-teal-50 bg-whitw dark:bg-stone-950 outline-none border-b-gray-200 dark:border-b-stone-700 border-b-2 rounded-tl-md rounded-tr-md  focus:border-teal-400 dark:focus:border-teal-400 p-2 my-1',
  label: 'text-sm font-bold text-gray-500 dark:text-stone-300 group-hover:text-teal-500',
};

export function FormInput({name,label,type,placeHolder,errors,required = true,onClick}) {

    
  return (
    <div className="group pb-2 flex-grow">
        <label 
            className={className.label} 
            >{label} * 
        </label>
        <input 
            onChange={onClick}
            className={type === 'color' ? 'w-full max-w-full h-[45px] rounded-md overflow-hidden' : className.inputClass}
            type={type} 
            placeholder={placeHolder}
            required={required}
        />
         <ZodError error={errors} field={name} />
    </div>
  )
};

export const FormTextera = ({label,placeHolder,errors,required = true,onClick})=> {

  return (

    <div className="group border-b border-gray-100 dark:border-stone-700 flex-grow w-full">
      <label className={className.label}  htmlFor="description">{label}* </label>
      <textarea  
          onChange={onClick}
          className={`${className.inputClass} h-20 min-h-16`}  
          placeholder={placeHolder} 
          required={required}
          >
          
      </textarea>
      <ZodError error={errors} field='description' />
  </div>
  )
}
