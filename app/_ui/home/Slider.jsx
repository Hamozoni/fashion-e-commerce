import Image from "next/image";



import img1 from "../../../public/categories/men/men.webp"
import img2 from "../../../public/categories/women/women.jpg"
import img3 from "../../../public/categories/kids/kids.jpg"

const sliderImages  = [
    img1,
    img2,
    img3,
]

function Slider() {
  return (
    <div className="relative">
        <div className=" w-screen max-w-full">
            {
                sliderImages?.map((img)=> (
                    <div className="" key={img}>
                        <Image className="min-w-full max-h-screen "  src={img} alt="category"  width="100vw" height="100vh" />
                    </div>
                ))
            }


        </div>
            <div className="absolute top-0 left-0 w-full h-[100%] bg-black opacity-90"></div>

    </div>
  )
}

export default Slider