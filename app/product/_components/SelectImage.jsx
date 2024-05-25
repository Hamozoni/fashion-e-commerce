
import Image from "next/image";

let imageColor = [];

function SelectImage({images,selectedColor,setSelectedColor}) {

  return (

    <section className=" py-4 border-b border-gray-100">
        <h5 className="flex items-center gap-3 pb-2 text-lg font-bold text-green-900"> 
            colors : 
        <p 
            style={{backgroundColor:selectedColor}} 
            className="w-[20px] h-[20px] rounded-full border-green-800 border"
            >

            </p>
        </h5>
        <section className="flex items-center gap-3">
            {
            images?.map((image)=> {

                if(!imageColor.includes(image.color)){
                    imageColor.push(image.color);
                    return (
                    <Image 
                        onClick={()=> setSelectedColor(image.color)}
                        className={`max-h-[50px] min-h-[50px] max-w-[50px] cursor-pointer ${image.color === selectedColor ? 'border border-green-600 rounded-md' : ''}`}
                        key={image.id} 
                        src={image?.imagePath.replace("public","")}
                        width={50} 
                        height={50}
                        />

                )

                }
            })
                
            }
        </section>
    </section>
  )
}

export default SelectImage