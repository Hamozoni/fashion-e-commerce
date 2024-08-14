"use client"
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
// data
import { categoriesData } from "@/data/categoriesData";
import { fetchData } from "@/lip/fetchData";
// components
import { SubcategoryCard } from "@/ui/cards/subcategoryCard";
import { ProductCard } from "@/ui/cards/productCard";
import { LoadMoreBtn } from "@/ui/buttons/buttons";
import Loading from "../loading";
import { Error } from "@/ui/components/error";

const CatecoryPage = () => {
  
  const searchParam = useSearchParams();
  const section = searchParam.get('category');
  const subcategories = categoriesData.find(e=> e.name === section).sub;

  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [IsError,setIsError] = useState(null);
  const [count,setCount] = useState(0);
  const [isLoadingMore,setIsLoadingMore] = useState(false);
  const [page,setPage] = useState(1);


  const fetchCategory = useCallback((page = 1,isMore = false)=> {
    if(isMore){
      setIsLoadingMore(true);
    }else {
      setIsLoading(true)
    }
    setIsError(null)
    fetchData(`products/category?category=${section}&page=${page}`)
    .then((data)=> {
        if(isMore) {
          setProducts(prev=> [...prev,...data?.products]);
        }else {
          setProducts(data?.products)
        }
        setCount(data?.count)
    })
    .catch((error)=> {
      setIsError(error)
    })
    .finally(()=> {
      setIsLoadingMore(false);
      setIsLoading(false)
    })
  },[section]);

  useEffect(()=> {
    fetchCategory(1,false)
  },[]);

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
            {
             isLoading ? <Loading /> 
             : IsError ?  <Error onClick={()=> fetchCategory(page,false)} /> 
             :
            <div className=""> 
              <div className="flex flex-wrap gap-2 sm:gap-4 w-full">
                  {
                    products?.map((product)=> (
                       <ProductCard key={product.id} product={product}/>
                    ))
                  }
              </div>
              {
                count > products?.length ? 
                <div className="max-w-fit mx-auto mt-6">
                   <LoadMoreBtn 
                      isLoadingMore={isLoadingMore} 
                      onClick={()=> {
                        fetchCategory(page + 1,true)
                        setPage(page + 1)
                      }} 
                      />
                </div>
                : null
              }
            </div>
            }
        </section>
    </div>
  )
}

export default CatecoryPage