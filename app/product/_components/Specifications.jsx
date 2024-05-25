
function Specifications({specifications}) {

  return (
    
    <section className="py-4 border-b border-gray-100">
        <h4  className="pb-2 text-lg font-bold text-green-900">product specifications</h4>
        <ul>
            {
                specifications?.map((specif)=> (

                    <li 
                        className="flex items-center gap-4"
                        key={specif?.id}
                        >
                        <span className="font-bold text-md text-green-900">{specif?.key}</span>
                        <span className="text-sm text-green-800">{specif?.value}</span>
                    </li>

                ))
            }
        </ul>
    </section>
  )
}

export default Specifications