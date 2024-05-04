import Image from "next/image";
import { categoriesData } from "../../_data/category";
import SubCategoryCards from "./subCategoryCards"


function Slider() {
  return (
    <div className="">
        <div className=" ">
            {
                categoriesData?.map((cate)=> (
                    <div className="pb-10 mb-10 border-b border-green-100" key={cate.name}>
                            <div className="">
                                <div className="w-fit mx-auto relative overflow-hidden rounded-xl border border-lime-200 cursor-pointer hover:scale-105 my-5">
                                    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-80 flex items-center justify-center ">
                                       <h4 className='text-2xl uppercase text-lime-200'>
                                          {cate.name} section
                                      </h4>
\                                  </div>
                                    <Image 
                                        className="max-h-[200px]"  
                                        src={cate.image} alt={cate.name} 
                                        width="550" 
                                        height="200" 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center max-h-full overflow-y-auto gap-4">
                                {
                                    cate.subName.map((sub)=> (
                                        <SubCategoryCards ket={sub.name} sub={sub} />
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

export default Slider