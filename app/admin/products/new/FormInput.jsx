
export default function FormInput({value,setvalue,title,type,placeHolder,errors,className}) {

    
  return (
    <div className={className.inputsDev}>
        <label className={className.label}  htmlFor={title}>{title} : </label>
        <input 
            onChange={e=> setvalue( type === 'number' ? +e.target.value : e.target.value)}
            className={className.inputClass} 
            type={type} 
            id={type} 
            placeholder={placeHolder}
            required
        />
          {
              (errors && errors.find((e=> e.path[0] === value)) !== undefined) ? 
              <p className={className.error}>{errors?.find((e=> e.path[0] === value))?.message}</p>
              :''
          } 
    </div>
  )
}
