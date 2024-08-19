"use client";
import Image from "next/image";
import {categoriesData} from "@/data/categoriesData";
import { IoMdArrowDropdown,IoMdArrowDropright } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchData } from "@/lip/fetchData";
import { Loading } from "@/ui/models/Loading";
import { Error } from "@/ui/components/error";

export const Navbar = ({setData,setCount,setPage,pathname})=> {

    const searchParams = useSearchParams();
    const {category,subcategory} = Object.fromEntries(searchParams.entries());
    const router = useRouter();

    const [subcategoryData,setSubCategoryData] = useState([]);
    const [isSubcategory,setIsSubcategory] = useState(false);
    const [isError,setIsError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);


    const className = {
        categoryLi: ' px-3 py-2 text-xs sm:text-sm border border-teal-100 dark:border-stone-700 cursor-pointer rounded-full flex items-center gap-2 min-w-fit'
    };

    const handleFetch = useCallback(()=> {
        setPage(1)
        setIsLoading(true)
        fetchData(`${pathname}?category=${category || 'all'}&subcategory=${subcategory || "all"}&page=1`)
        .then(data=> {
            setData(data?.products);
            setCount(data?.count);

            console.log(data)
        })
        .catch(error=> {
            setIsError(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    },[category,subcategory]);

    useEffect(()=> {
        handleFetch()
    },[handleFetch])


    const handleCategory = (cate)=> {
        setSubCategoryData(cate.sub);
        router.push(`?category=${cate?.name}&subcategory=all`);
    }

    return (
        <>
            <header className="flex justify-between items-start flex-wrap bg-white dark:bg-black sticky top-0 left-0 z-30 mb-3 py-3">
                <nav className="">
                    <ul className="flex items-stretch gap-3 capitalize overflow-x-auto">
                        <li 
                        onClick={() => router.push('?category=all&subcategory=all')}
                            className={`${category === 'all' ? 'bg-teal-400 text-teal-50' : 'bg-teal-50 dark:bg-stone-800 dark:text-teal-50'} ${className.categoryLi}`} >
                            <h4>all</h4>
                        </li>
                        {
                            categoriesData?.map((cate)=> (
                                <li 
                                    onClick={() => handleCategory(cate)}
                                    key={cate?.id} 
                                    className={`${category === cate?.name ? 'bg-teal-400 text-teal-50 border-gray-400' : 'bg-teal-50 dark:bg-stone-800 text-teal-950 dark:text-teal-50'} ${className.categoryLi}`}
                                    >
                                        <Image className="rounded-full" src={cate?.imagePath} width={50} height={30} alt="cate"/>
                                        <h4 className="text-center">{cate?.name}</h4>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className=" relative capitalize min-w-[150px]">
                    <div 
                        onClick={()=> setIsSubcategory(!isSubcategory)}
                        className="flex justify-between flex-col gap-3 cursor-pointer bg-teal-50 dark:bg-stone-900 text-teal-950 dark:text-teal-50  p-3 rounded-md border border-teal-100 dark:border-gray-600">
                        <h6 className="flex items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-200">
                        filter:  {subcategory} { isSubcategory ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                        </h6>
                    </div>
                    {
                    isSubcategory ? 
                    <ul className=" absolute z-50 min-w-fit right-0 top-[102%] w-full bg-teal-50 dark:bg-stone-900 text-teal-950 dark:text-teal-50 p-3 rounded-md border border-teal-100 dark:border-gray-600">
                        <li 
                            className={`${subcategory === 'all' ? 'bg-teal-600 text-teal-50 rounded-md' : 'hover:bg-white dark:hover:bg-stone-800'} flex items-center gap-3 px-3 py-2 cursor-pointer`}
                            onClick={()=> router.push(`?category=${category}&subcategory=all`)}>
                            all
                        </li>
                        {
                            ['men','women','kids']?.includes(category) ? 
                            subcategoryData?.map((subCate)=> (
                                <li 
                                    onClick={()=> router.push(`?category=${category}&subcategory=${subCate?.name}`)}
                                    key={subCate?.id} 
                                    className={`${subcategory === subCate?.name ? 'bg-teal-600 text-teal-50 rounded-md' : 'hover:bg-white dark:hover:bg-stone-800'} flex items-center gap-3 px-3 py-2 cursor-pointer`}>
                                    <Image 
                                        className="rounded-full" 
                                        src={subCate?.imagePath} 
                                        width={30} height={30} 
                                        alt={subCate?.name} 
                                        />  
                                    {subCate?.name}
                                </li>

                            )) : null
                        }
                    </ul>
                    : null
                    }

                </div>
            </header>
            {
                isLoading ? <Loading /> :
                isError && 
                <div 
                    className="fixed top-0 left-0 w-full h-screen bg-black dark:bg-white opacity-80 z-[99]">
                        <Error onClick={handleFetch} />

                </div>
            }
        </>
    )
}