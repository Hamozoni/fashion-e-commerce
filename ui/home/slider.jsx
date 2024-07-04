import Image from "next/image";
import slide9 from "../../public/slide/slide9.jpg";

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

function Slider() {
  return (
    <div className="-translate-y-16 max-h-lvh relative">
        <div className="flex items-center min-w-fit h-lvh  max-h-lvh opacity-55 ">
            <Image 
                className="w-full object-cover h-lvh max-h-lvh  min-w-full" 
                src={slide9} 
                alt="slide image"
                />
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
                                <p className="text-2xl my-4">{desc}</p>
                                <button
                                    className="text-2xl uppercase"
                                    >start shopping
                                </button>
                            </section>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider