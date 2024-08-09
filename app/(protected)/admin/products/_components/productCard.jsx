import Image from "next/image"

export const ProductCard = ({product})=> {
    const {imagePath,brand,name,colors,size} = product
    return (
        <div className="">
            <div className="">
                <Image  
                    src={imagePath} 
                    width={80} height={80} 
                    alt="product image"
                    />
            </div>
            <div className="">
                <div className="">
                    <h4>{brand}</h4>
                    <h3>{name}</h3>
                </div>
                <div className="">
                    {
                        colors?.map(({color,colorName,priceInHalala})=> (
                            <div key={color} className="" >
                                <h5>{colorName}</h5>
                                {
                                    size?.map(({colorName : color})=> (
                                        colorName === color ?
                                        <div className="">

                                        </div>
                                        : null
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}