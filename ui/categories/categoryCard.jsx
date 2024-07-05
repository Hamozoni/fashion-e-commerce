import Image from "next/image"
import Link from "next/link";

export const CategoryCard = ({category})=> {

    const {name,imagePath,linkPath} = category;
    return (
        <div className="bg-teal-50 p-3 rounded-md w-fit min-w-fit">
            <Link href={linkPath} >
                <div className="">
                    <div className="overflow-hidden rounded-md ">
                        <Image 
                            className="hover:scale-110 hover:rotate-2 "
                            src={imagePath} 
                            width={200} 
                            height={200} 
                            alt={name}
                            />
                    </div>
                <h3 
                    className="text-teal-950 hover:text-teal-800 text-lg capitalize text-center pt-2"
                    >{name}
                </h3>
                </div>
            </Link>
        </div>
    )
}