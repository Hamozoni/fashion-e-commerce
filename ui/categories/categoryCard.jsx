import Image from "next/image"

export const CategoryCard = ({category})=> {

    const {name,imagePath,linkPath} = category;
    return (
        <div className="bg-gray-50 p-3 rounded-md  text-center">
            <Link href={linkPath} className="">
              <Image src={imagePath} width={150} height={150} alt={name}/>
              <h3>{name}</h3>
            </Link>
        </div>
    )
}