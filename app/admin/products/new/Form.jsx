
export default function Form({}) {
  return (
    <div className={className.inputsDev}>
        <label className={className.label}  htmlFor="image-path">image : </label>
        <input 
            className={className.inputClass} 
            type="file" 
            id="image-path" 
            required
            />
    </div>
  )
}
