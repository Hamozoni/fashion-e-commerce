import Image from "next/image";
import slide1 from "../../public/slide/slide1.webp";
import slide2 from "../../public/slide/slide2.webp";
import slide3 from "../../public/slide/slide3.jpg";
import slide4 from "../../public/slide/slide4.webp";
import slide5 from "../../public/slide/slide5.jpg";
import slide6 from "../../public/slide/slide6.jpg";
import slide7 from "../../public/slide/slide7.jpg";
import slide8 from "../../public/slide/slide8.jpg";
import slide9 from "../../public/slide/slide9.jpg";

const slide = [slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9];

function Slider() {
  return (
    <div className="snap-x snap-mandatory overflow-auto m-4 lg:mx-8 rounded-lg border border-green-300 ">
        <div className="min-w-fit flex items-center  ">
            {
                slide?.map((image)=> (
                    <div key={image} className="relative snap-always snap-center w-full h-[250px] min-w-full  max-h-[250px]">
                        <Image className="min-w-full h-[250px] min-h-[250px] w-full max-h-[250px]" src={image} alt="slide image"/>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                    </div>
                ))

            }

        
        </div>
    </div>
  )
}

export default Slider