import Image from "next/image"
import Link from "next/link";

export const SubcategoryCard = ({sub})=> {

    const {name,imagePath,linkPath} = sub;
    return (
        <div className="bg-gray-50 p-1 rounded-md shadow-md">
            <Link href={linkPath} >
                <div className="">
                    <div className="overflow-hidden rounded-md relative group">
                        <Image 
                            className="rotate-2 group-hover:rotate-0 group-hover:scale-110 "
                            src={imagePath} 
                            width={240} 
                            height={240} 
                            alt={name}
                            />
                        <h3 
                            className="text-teal-950 hover:text-teal-800 text-xl capitalize text-center pt-2 absolute left-0 bottom-0 w-full bg-gray-50 group-hover:translate-y-full"
                            >{name}
                       </h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}