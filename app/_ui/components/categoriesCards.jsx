import Image from "next/image";
import { categoriesData } from "../../_data/category";


function CategoriesCards() {
  return (
    <div className="">
        <div className=" p-4 lg:px-8 ">
            {
                categoriesData?.map((cate)=> (
                    <div className="border border-green-200 bg-gray-100 my-4 rounded-lg" key={cate.name}>
                            <div className="">
                                <div className="w-fit mx-auto relative overflow-hidden rounded-xl border border-lime-200 cursor-pointer hover:scale-105 my-5">
                                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-80 flex items-center justify-center ">
                                       <h4 className='text-2xl uppercase text-lime-200'>
                                          {cate.name} section
                                      </h4>
\                                  </div>
                                    <Image 
                                        className="max-h-[330px]"  
                                        src={cate.image} alt={cate.name} 
                                        width="850" 
                                        height="330" 
                                    />
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap justify-center overflow-x-auto translate-y-[-200px] mb-[-150px]  p-10 max-h-full gap-4">
                                {
                                    cate.subName.map((sub)=> (
                                        <div className="hover:scale-110 min-w-[150px]">
                                                <div className="">
                                                    <Image 
                                                        src={sub.image} 
                                                        alt={sub.name} 
                                                        width={150} 
                                                        height={150} 
                                                        className='rounded-lg h-[150px] w-[150px] border border-green-200'
                                                        />
                                                </div>
                                                <h5 className="text-sm font-medium text-green-900">
                                                    {sub.name}
                                                </h5>
                                        </div>
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