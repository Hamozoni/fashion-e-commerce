import Image from "next/image"


function SubCategoryCards({sub}) {
  return (
    <div className="">
        <div className="">
             <Image src={sub.image} alt={sub.name} width={250} height={250}/>
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

export default SubCategoryCards