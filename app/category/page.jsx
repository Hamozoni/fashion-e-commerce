"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// data
import { categoriesData } from "../../data/categoriesData";
import { fetchData } from "../../lip/fetchData";
// components
import { SubcategoryCard } from "../../ui/cards/subcategoryCard";
import { ProductCard } from "../../ui/cards/productCard";
import { LoadMoreBtn } from "../../ui/buttons/buttons";
import Loading from "../loading";

const CatecoryPage = () => {
  
  const searchParam = useSearchParams();
  const section = searchParam.get('category');
  const subcategories = categoriesData.find(e=> e.name === section).sub;

  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [isDataDone,setIsDataDone] = useState(false);
  const [isLoadingMore,setIsLoadingMore] = useState(false);
  const [page,setPage] = useState(1);

  useEffect(()=> {

    if(products?.length > 0){
      setIsLoadingMore(true);
    }else {
      setIsLoading(true)
    }

    fetchData(`products/category?category=${section}&page=${page}`)
    .then((data)=> {
        if(data?.length === 0) {
          setIsDataDone(true);
        }
        console.log(data)

        setProducts(prev=> [...prev,...data]);
    })
    .catch((error)=> {
        console.log(error)
    })
    .finally(()=> {
      setIsLoadingMore(false);
      setIsLoading(false)
    })

  },[section,page]);

  return (
    <div className="p-3 lg:px-8">
        <header>
          <nav>
            <ul className=" flex items-center overflow-x-auto gap-3 min-w-fit">
               {
                subcategories?.map((sub)=> (
                  <li key={sub?.id} className="min-w-fit w-full flex-1">
                     <SubcategoryCard sub={sub} />
                  </li>

                ))
               }
            </ul>
          </nav>
        </header>
        <section>
            <h5 className="text-lg sm:text-xl text-teal-950 dark:text-teal-50 capitalize mt-10 mb-5 font-bold" >
              products for {section} :
            </h5>
            <div className=""> 
              <div className="flex flex-wrap gap-2 sm:gap-4 w-full">
                  {
                    isLoading ? <Loading /> : 
                    products?.map((product)=> (
                       <ProductCard key={product.id} product={product}/>
                    ))
                  }
              </div>
              {
                isDataDone ? null :
                <div className="max-w-fit mx-auto mt-6">
                   <LoadMoreBtn 
                      isLoadingMore={isLoadingMore} 
                      onClick={()=> setPage(page + 1)} 
                      />
                </div>
              }
            </div>
        </section>
    </div>
  )
}

export default CatecoryPage