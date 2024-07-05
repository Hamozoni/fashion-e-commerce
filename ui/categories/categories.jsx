import {categories} from "../../data/categories";
import { CategoryCard } from "./categoryCard";

export const Categories = ()=> {
    return (
        <div className="">
            {
                categories?.map(({name,sub})=> (
                    <section key={name} className="">
                        <h4>{name}</h4>
                        <div className="">
                            <div className="">
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