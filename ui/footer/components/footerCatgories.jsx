
import Link from "next/link";
import {categoriesData} from "../../../data/categoriesData";

export const FooterCategories = ()=> {
    return (
        <div className="capitalize">
            <div className="flex gap-5 py-3">
                {
                    categoriesData?.map(({name,sub})=> (
                        <div key={name} className="">
                            <h4 className="text-lg mb-2 font-bold text-teal-50">{name} fashion</h4>
                            <ul>
                                {
                                    sub?.map(({name,linkPath})=> (
                                        <li key={name} className="text-md font-bold text-teal-200 hover:text-teal-50 hover:scale-110 cursor-pointer">
                                            <Link href={linkPath}>
                                               {name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};