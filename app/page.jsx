
import {HomeSlider} from "../ui/home/homeSlider";
import {Categories} from "../ui/categories/categories";
import {CategoriesProducts} from "../ui/home/categoriesProducts"

export default async function Home() {

  return (
    <div >
      <HomeSlider />
      <Categories />
      <CategoriesProducts />
    </div>
  );
}
