// "use client";

// import { useContext } from "react";
// import { AppContext } from "../../../contextProvider";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// export const Header = ()=> {
//     const {currentUser} = useContext(AppContext);
//     const pathname = usePathname();

//     return (
//         <header className="bg-white dark:bg-black p-3 lg:px-8 sticky z-[60] top-0 border-b-4 border-b-teal-300">
//             <div className=" capitalize flex items-center justify-between">

//                 <h3 className="text-xl text-teal-950 dark:text-teal-50 font-bold">
//                     {pathname === '/admin/products/new' ? 'add new product' : pathname === '/admin' ? 'overview' : pathname?.replace('/admin/','')}
//                 </h3>
//             </div>
//         </header>
//     )
// }