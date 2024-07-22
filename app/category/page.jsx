"use client"
import { useSearchParams } from "next/navigation"
import { categoriesData } from "../../data/categoriesData"
import { SubcategoryCard } from "../../ui/categories/subcategoryCard";
const CatecoryPage = () => {

  const searchParam = useSearchParams();

  const section = searchParam.get('category');

  const subcategories = categoriesData.find(e=> e.name === section).sub;

  return (
    <div className="">
        <header>
          <h4>{section} section</h4>
          <nav>
            <ul>
               {
                subcategories?.map((sub)=> (
                  <li key={sub?.id}>
                     <SubcategoryCard sub={sub} />
                  </li>

                ))
               }
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default CatecoryPage