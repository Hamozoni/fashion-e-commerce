"use client"
import { useSearchParams } from "next/navigation"
import { categoriesData } from "../../data/categoriesData"
import { SubcategoryCard } from "../../ui/categories/subcategoryCard";
import { useEffect, useState } from "react";
import { fetchData } from "../../lip/fetchData";
import { ProductCard } from "../../ui/productCard/ProductCard";
import Loading from "../loading";
import { PulseLoader } from "react-spinners";
import { LoadMoreBtn } from "../../components/buttons";


const CatecoryPage = () => {

  const searchParam = useSearchParams();
  const section = searchParam.get('category');
  const subcategories = categoriesData.find(e=> e.name === section).sub;

  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [isDataDone,setIsDataDone] = useState(false);
  const [isLoadingMore,setIsLoadingMore] = useState(false);
  const [page,setPage] = useState(2);

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
            <h5 className="text-xl text-teal-950 capitalize mt-10 mb-5 font-bold" >products for {section} :</h5>
            <div className=""> 
              <div className="flex justify-center flex-wrap gap-4">
                  {
                    isLoading ? <Loading /> : 
                    products?.map((product)=> (
                       <ProductCard key={product.id} product={product}/>
                    ))
                  }
              </div>
              {
                isDataDone ? null :
                <div className="max-w-fit mx-auto">
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