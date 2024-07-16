import ZodError from "../../../../components/zodError";

const className = {
  inputClass : 'w-full max-w-full text-teal-900 bg-gray-50 outline-none border-b-gray-200 border-b-2 rounded-tl-md rounded-tr-md  focus:border-teal-400  p-2 my-2',
  label: 'text-lg font-bold text-gray-500 group-hover:text-teal-500',
};

export function FormInput({name,label,type,placeHolder,errors,required = true,onClick}) {

    
  return (
    <div className="group pb-4 flex-grow">
        <label 
            className={className.label} 
            >{label} * 
        </label>
        <input 
            onChange={onClick}
            className={type !== 'color' ? className.inputClass : 'flex mt-3 rounded-full'}
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

    <div className="group pb-4 border-b border-gray-100 flex-grow w-full">
      <label className={className.label}  htmlFor="description">{label}* </label>
      <textarea  
          onClick={onClick}
          className={`${className.inputClass} h-20 min-h-16`}  
          placeholder={placeHolder} 
          required={required}
          >
          
      </textarea>
      <ZodError error={errors} field='description' />
  </div>
  )
}
