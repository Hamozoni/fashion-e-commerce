"use client"
// import CategoriesCards from "./_ui/components/categoriesCards";
import Slide from "./_ui/home/slider";
// import {fetchData} from "./_lip/fetchData";


export default async function Home() {


  const fetchData = async function(){
    const {data }= await fetch("/api/product")
    console.log(data)

  }

  
  return (
    <div >
      <Slide />
       {/* <CategoriesCards/> */}
       <div onClick={fetchData} >go000000000</div>
    </div>
  );
}
