import {categories} from "../../data/categories";
import { CategoryCard } from "./categoryCard";

export const Categories = ()=> {
    return (
        <div className="p-3 lg:px-8">
            {
                categories?.map(({name,sub})=> (
                    <section key={name} className="mb-8">
                        <h4 className="text-2xl font-bold capitalize text-teal-950 mb-3 text-center">{name}</h4>
                        <div className="overflow-x-auto">
                            <div className="flex items-center justify-center gap-3 min-w-fit">
                                {
                                    sub?.map((category)=> (
                                        <CategoryCard key={category?.name} category={category}/>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                ))
            }
        </div>
    )
}