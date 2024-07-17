import { BiSolidError } from "react-icons/bi";
import ZodError from "../../../../components/zodError";

const className = {
  inputClass : 'w-full max-w-full text-teal-900 bg-gray-50 outline-none border-b-gray-200 border-b-2 rounded-tl-md rounded-tr-md  focus:border-teal-400  p-2 my-2',
  label: 'text-lg font-bold text-gray-500 group-hover:text-teal-500',
};

export function FormInput({name,label,type,placeHolder,errors,required = true,onClick}) {

  if(errors) {

    console.log(errors)

    errors?.map(({path})=> {

      console.log(JSON.stringify(path) === JSON.stringify(name),JSON.stringify(name),JSON.stringify(path));


  })

  }


    
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
        {
          errors &&
        <p className=" text-rose-500 text-sm font-medium capitalize flex items-center gap-3">
              <BiSolidError />
              {errors?.find(e=> JSON.stringify(e?.path) === JSON.stringify(name))?.message }
          </p>
        }
    </div>
  )
};

export const FormTextera = ({label,placeHolder,errors,required = true,onClick})=> {

  return (

    <div className="group pb-4 border-b border-gray-100 flex-grow w-full">
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
