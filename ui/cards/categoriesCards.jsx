
import Image from "next/image";
import { categoriesData } from "../data/category";
import Link from "next/link";


function CategoriesCards() {

  return (
    <div className="">
        <div className=" p-4 lg:px-8 ">
            {
                categoriesData?.map((cate)=> (
                    <div className="border mt-14 border-green-200 bg-gray-100 my-4 rounded-lg" key={cate.name}>
                            <div className="">
                                <div className="w-fit translate-y-[-70px] mx-auto relative overflow-hidden rounded-xl border border-lime-200 cursor-pointer hover:scale-105 my-5">
                                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-80 flex items-center  justify-center ">
                                       <h4 className='text-5xl font-bold mt-5 uppercase text-lime-200'>
                                          {cate.name} section
                                      </h4>
\                                  </div>
                                    <Image 
                                        className="max-h-[230px]"  
                                        src={cate.image} alt={cate.name} 
                                        height="230" 
                                        width='550'
                                    />
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap justify-center overflow-x-auto translate-y-[-200px] mb-[-150px]  p-10 max-h-full gap-4">
                                {
                                    cate.subName.map((sub)=> (
                                        <Link 
                                            href={`/${cate.name}?sub=${sub.name.replace(' & '," ")}`} 
                                            className="hover:scale-110 border border-green-200 rounded-lg min-w-[150px] bg-white flex flex-col items-center justify-center">
                                                <div className="translate-y-[-10px]">
                                                    <Image 
                                                        src={sub.image} 
                                                        alt={sub.name} 
                                                        width={100} 
                                                        height={100} 
                                                        className='rounded-full h-[150px] w-[150px] border border-green-200'
                                                        />
                                                </div>
                                                <h5 className="text-sm p-2 pb-0 translate-y-[-10px] font-medium text-green-900">
                                                    {sub.name}
                                                </h5>
                                        </Link>
                                    ))
                                }
                            </div>
                    </div>
                ))
            }


        </div>
       

    </div>
  )
}

export default CategoriesCards