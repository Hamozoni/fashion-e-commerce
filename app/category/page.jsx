"use client"
import { useSearchParams } from "next/navigation"
import { categoriesData } from "../../data/categoriesData"
import { SubcategoryCard } from "../../ui/categories/subcategoryCard";
const CatecoryPage = () => {

  const searchParam = useSearchParams();

  const section = searchParam.get('category');

  const subcategories = categoriesData.find(e=> e.name === section).sub;

  return (
    <div className="p-3 lg:px-8 flex gap-3">
      <div className="">

      </div>

      <aside>
        <header>
          <nav>
            <ul className=" flex items-center overflow-x-auto gap-3">
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
        <section>
            <h5 className="text-xl text-teal-950 capitalize py-5 font-bold" >products for {section} :</h5>
            <div className="">
                
            </div>
        </section>

      </aside>
    </div>
  )
}

export default CatecoryPage