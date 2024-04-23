
export default function FormInput({value,setvalue,title,type,placeHolder,errors}) {

    const className = {
        inputsDev: 'pb-4 mb-3  border-b border-slate-100',
        inputClass : 'w-full max-w-full  text-gray-900 border-slate-200 border  focus:border-slate-400 rounded-lg p-2 my-2',
        label: 'text-xl font-bold text-slate-700',
        sumBtn: 'w-full max-w-full  rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md '
    };
    
  return (
    <div className={className.inputsDev}>
        <label className={className.label}  htmlFor={title}>{title} : </label>
        <input 
            onChange={e=> setvalue(e.target.value)}
            className={className.inputClass} 
            type={type} 
            id={type} 
            placeholder={placeHolder}
            required
        />
          {
              (errors && errors.find((e=> e.path[0] === value)) !== undefined) ? 
              <p>{errors.find((e=> e.path[0] === value)).message}</p>
              :''
          } 
    </div>
  )
}
