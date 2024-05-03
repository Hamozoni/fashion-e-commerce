import Image from "next/image";



import img1 from "../../../public/categories/men/men.webp"
import img2 from "../../../public/categories/women/women.png"
import img3 from "../../../public/categories/kids/kids.jpg"

const sliderImages  = [
    img1,
    img2,
    img3,
]

function Slider() {
  return (
    <div className="">
        <div className="w-screen h-screen">
            {
                sliderImages?.map((img)=> (
                    <div className="" key={img}>
                        <Image className="min-w-full max-h-screen "  src={img} alt="category"  width="100vw" height="100vh" />
                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Slider