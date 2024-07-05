import Image from "next/image"
import Link from "next/link";

export const CategoryCard = ({category})=> {

    const {name,imagePath,linkPath} = category;
    return (
        <div className="bg-teal-50 p-3 rounded-md w-fit min-w-fit">
            <Link href={linkPath} >
                <div className="">
                <Image src={imagePath} width={150} height={150} alt={name}/>
                <h3 className="text-teal-950 text-lg capitalize text-center pt-2">{name}</h3>
                </div>
            </Link>
        </div>
    )
}