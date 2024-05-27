
import Image from "next/image";


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
            Object.entries(images)?.map(([color,image])=> (
                <Image 
                    onClick={()=> setSelectedColor(color)}
                    className={`max-h-[60px] min-h-[60px] max-w-[60px] rounded-md border border-gray-100 shadow-md cursor-pointer ${color === selectedColor ? 'border border-green-600 rounded-md' : ''}`}
                    key={image[0].id} 
                    src={image[0]?.imagePath.replace("public","")}
                    width={60} 
                    height={60}
                    />
            ))
                
            }
        </section>
    </section>
  )
}

export default SelectImage;