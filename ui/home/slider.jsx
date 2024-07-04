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
        <div className="flex items-center min-w-fit h-lvh  max-h-lvh ">
            <Image 
                className="w-full object-cover h-lvh max-h-lvh  min-w-full " 
                src={slide9} 
                alt="slide image"
                />
        </div>
        <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="p-3 lg:px-8 max-w-full overflow-hidden">
                <div className="min-w-fit">
                    {
                        categories?.map(({name,desc})=> (
                            <section className="mi-w-full">
                                <h2>{name}</h2>
                                <span>{desc}</span>
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