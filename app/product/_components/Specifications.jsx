
function Specifications({specifications}) {

  return (

    <section className="py-4 border-b border-gray-100 capitalize">
        <h4  className="pb-2 text-lg font-bold text-green-950">product specifications</h4>
        <ul>
            {
                specifications?.map((specif)=> (

                    <li 
                        className="flex items-center gap-4"
                        key={specif?.id}
                        >
                        <span 
                            className="font-bold text-md text-green-900 flex-1">
                                {specif?.key} : 
                        </span>
                        <span 
                            className="text-sm text-green-600"
                            >{specif?.value}
                        </span>
                    </li>

                ))
            }
        </ul>
    </section>
  )
}

export default Specifications