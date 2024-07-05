import Image from "next/image"
import Link from "next/link";

export const CategoryCard = ({category})=> {

    const {name,imagePath,linkPath} = category;
    return (
        <div className="bg-teal-50 p-3 rounded-md min-w-fit w-full">
            <Link href={linkPath} >
                <div className="">
                    <div className="overflow-hidden rounded-md relative group">
                        <Image 
                            className="hover:scale-110 group-hover:rotate-2 "
                            src={imagePath} 
                            width={300} 
                            height={300} 
                            alt={name}
                            />
                        <h3 
                            className="text-teal-950 hover:text-teal-800 text-xl capitalize text-center pt-2 absolute left-0 bottom-0 translate-y-full group-hover:translate-y-0 w-full bg-teal-50"
                            >{name}
                       </h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}