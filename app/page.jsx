// import CategoriesCards from "./_ui/components/categoriesCards";
import Slide from "./_ui/home/slider";
// import {fetchData} from "./_lip/fetchData";

const getProduct = async ()=>{
  const data  =  await fetch('http://localhost:3000/api/product')

  return data.json()
}


export default async function Home() {
  
  const data  =  await getProduct()

  console.log(data)

    
  return (
    <div className="">
      <Slide />
       {/* <CategoriesCards/> */}
    </div>
  );
}
