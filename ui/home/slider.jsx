import Image from "next/image";
import slide9 from "../../public/slide/slide9.jpg";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const categories = [
    {
        name: 'Men Fashion',
        desc : 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    },
    {
        name: 'women Fashion',
        desc : 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    },
    {
        name: 'kidds Fashion',
        desc : 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    },
]

const className = {
   prevNextBtn: ' absolute top-1/2  -translate-y-1/2 flex justify-center items-center p-3 rounded-full bg-white hover:scale-110'
}

function Slider() {

  return (
    <div className="-translate-y-16 max-h-lvh relative">
        <div className="flex items-center min-w-fit h-lvh  max-h-lvh ">
            <Image 
                className="w-full object-cover h-lvh max-h-lvh  min-w-full" 
                src={slide9} 
                alt="slide image"
                />
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-transparent" ></div>
        </div>
        <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="p-3 lg:px-8 max-w-full overflow-hidden">
                <div className="min-w-fit flex">
                    {
                        categories?.map(({name,desc})=> (
                            <section className="min-w-full p-4 font-extrabold lg:p-8 capitalize text-center text-green-950 ">
                                <h2 
                                    className="text-5xl"
                                    >{name}
                                </h2>
                                <p className="text-2xl my-4 max-w-[580px] mx-auto">{desc}</p>
                                <button
                                    className="text-xl  p-2 px-5 capitalize rounded-md border border-green-900 hover:scale-105"
                                    >start shop
                                </button>
                            </section>
                        ))
                    }
                </div>
            </div>
        </div>
        <button className={`${className.prevNextBtn} right-3 lg:right-8`}>
            <IoIosArrowForward size={20}/>
        </button>
        <button className={`${className.prevNextBtn} left-3 lg:left-8`}>
            <IoIosArrowBack size={20} />
        </button>
    </div>
  )
}

export default Slider