
function SelectSize({sizes,selectedSize,setSelectedSize}) {

  return (
    <section className="py-4 border-b border-gray-100 lg:flex gap-3">
        <h5 className="pb-2 capitalize text-lg font-bold text-green-900">sizes : </h5>
        <ul className="flex items-center gap-1">
            {
              sizes?.map((size)=> (
                <li 
                    className={`${selectedSize === size?.name ? " border-green-600  bg-green-200": ""} min-w-[50px] uppercase text-center hover:bg-green-100 border rounded-lg p-3 py-1 hover:scale-105 cursor-pointer text-green-800`}
                    onClick={()=> setSelectedSize(size?.name)}
                    key={size.id}
                    >
                    { size?.name }
                </li>

            ))
            }
        </ul>
    </section>
  )
}

export default SelectSize