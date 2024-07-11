import ZodError from "../../../../components/zodError";

const className = {
  inputClass : 'w-full max-w-full text-teal-900 bg-gray-50 outline-none border-b-gray-200 border-b-2 rounded-tl-md rounded-tr-md  focus:border-teal-400  p-2 my-2',
  label: 'text-lg font-bold text-gray-400 group-hover:text-teal-500',
};

export function FormInput({name,label,type,placeHolder,errors,required = true}) {

    
  return (
    <div className="group pb-4 border-b border-gray-100 w-[300px] flex-grow">
        <label 
            className={className.label} 
            htmlFor={name}
            >{label} * 
        </label>
        <input 
            name={name}
            className={className.inputClass}
            type={type} 
            id={name} 
            placeholder={placeHolder}
            required={required}
        />
        <ZodError error={errors} field={name} />
    </div>
  )
};

export const FormTextera = ({label,name,placeHolder,errors,required = true})=> {

  return (

    <div className="group pb-4 border-b border-gray-100 w-full">
      <label className={className.label}  htmlFor="description">{label}* </label>
      <textarea 
          name={name}  
          className={`${className.inputClass} h-20 min-h-16`}  
          id={name} 
          placeholder={placeHolder} 
          required={required}
          >
          
      </textarea>
      <ZodError error={errors} field='description' />
  </div>
  )
}
