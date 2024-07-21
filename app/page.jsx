
import {HomeSlider} from "../ui/home/homeSlider";
import {Categories} from "../ui/categories/categories";
import {HomeProducts} from "../ui/home/homeProducts"

export default async function Home() {

  return (
    <div >
      <HomeSlider />
      <Categories />
      <HomeProducts />
    </div>
  );
}
