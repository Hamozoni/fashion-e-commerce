
import Image from "next/image";


function SelectImage({images,selectedColor,setSelectedColor}) {

    const groupBy = (images, key) => images.reduce(
        (result,item) => ({
          ...result,[item[key]]: [...(result[item[key]] || []),item,],}), 
        {},
      );

    console.log(Object.entries(groupBy(images,"color")))

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
            Object.entries(groupBy(images,"color"))?.map(([color,image])=> (
                <Image 
                    onClick={()=> setSelectedColor(color)}
                    className={`max-h-[50px] min-h-[50px] max-w-[50px] cursor-pointer ${color === selectedColor ? 'border border-green-600 rounded-md' : ''}`}
                    key={image[0].id} 
                    src={image[0]?.imagePath.replace("public","")}
                    width={50} 
                    height={50}
                    />
            ))
                
            }
        </section>
    </section>
  )
}

export default SelectImage;