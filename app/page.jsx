
import {HomeSlider} from "../ui/home/homeSlider";
import {CategoriesNav} from "../ui/categoriesCard/categoriesNav";
import {CategoriesProducts} from "../ui/home/categoriesProducts"



export default async function Home() {
  

  return (
    <div >
      <HomeSlider />
      <CategoriesNav />
      <div className=" mt-[-100px]">
          <CategoriesProducts />
      </div>
    </div>
  );
}
