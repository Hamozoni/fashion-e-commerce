import Image from "next/image"


function subCategoryCards({sub}) {
  return (
    <div className="">
        <div className="">
             <Image src={sub.image} alt={sub.name} width={100} height={100}/>
             <div className="">
                {sub.name}
             </div>
        </div>
        <h5 className="">
            {sub.name}
        </h5>
    </div>
  )
}

export default subCategoryCards