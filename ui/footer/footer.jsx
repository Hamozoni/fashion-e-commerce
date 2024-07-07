import Link from "next/link"


export const Footer = ()=> {
    return (
        <footer className="bg-teal-600">
            <div className="p-3 lg:px-8">
                <Link className=" text-teal-50 capitalize text-lg lg:text-3xl font-extrabold" href='/'
                  >system
               </Link> 
            </div>
        </footer>
    )
}