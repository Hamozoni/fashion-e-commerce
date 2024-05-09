
import CategoriesCards from "./_ui/components/categoriesCards";
import Slide from "./_ui/home/slider";


export default async function Home() {

  return (
    <div >
      <Slide />
       <CategoriesCards/>
       <div onClick={fetchData} >go000000000</div>
    </div>
  );
}
