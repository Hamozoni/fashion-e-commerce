
import Link from "next/link";
import Image from "next/image";
// component
import getCurrency from "../../lip/getCurrency";
import AddToListBtn from "../../components/addToListBtn";

function ProductCard({product}) {

    const {id,name,priceInCent,images} = product;

   const className = {
        card: 'w-[220px] rounded-lg overflow-hidden border border-green-100 cursor-pointer hover:border-green-300 relative',
        image: 'w-[220px] max-h-[220px] max-w-[220px]',
        heart: 'absolute top-2 right-2',
   }

 let imagesPath = []

  return (
    <div className={className.card}>
        <Link href={`/product/${id}`}>
            <Image 
                className={className.image} 
                src={images[1].imagePath.replace("public",'')}
                alt={name}
                width={220}
                height={200}
               />
        </Link>
        <div className={className.heart}>
            <AddToListBtn product={product} />
        </div>
        <div className="p-3">
            <div className="text-center">
                <h2 className="text-xl font-medium text-green-950">
                    {getCurrency(priceInCent)}
                </h2>
                {/* <h3 
                    className="text-sl font-bold text-green-800"
                    > brand: <small> {brand}</small>
                </h3> */}
                <h4 
                    className="text-md font-bold text-green-950 pb-2"
                    >{name}
                </h4>
            </div>
            <ul className="flex justify-center gap-2 overflow-auto">
                {
                    images?.map((color)=> {
                        
                        if(!imagesPath.includes(color.color)){
                            imagesPath.push(color.color)
                            return (
                                <li 
                                    style={{backgroundColor: color.color }} 
                                    key={color.color}
                                    className="w-[25px] h-[25px] rounded-full border border-green-900"
                                    >
                                </li>
                            )
                        }

                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default ProductCard