// import CategoriesCards from "./_ui/components/categoriesCards";
import Slide from "./_ui/home/slider";

export default async function Home() {
  
  const {data,error} = await fetchData('product')

    
  return (
    <div className="">
      <Slide />
       {/* <CategoriesCards/> */}
    </div>
  );
}
