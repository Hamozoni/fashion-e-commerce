import ZodError from "../../../../components/zodError";

export default function FormInput({name,label,type,placeHolder,errors,required}) {

  const className = {
    inputsDev: 'pb-4 mb-3  border-b border-slate-100',
    inputClass : 'w-full max-w-full  text-teal-900 border-gray-200 border-2  focus:border-teal-400 rounded-lg p-2 my-2',
    label: 'text-lg font-bold text-teal-900',
};
    
  return (
    <div className={className.inputsDev}>
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
}
