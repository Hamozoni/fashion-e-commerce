import { Navbar } from "./_components/navbar";


export default function ProductsLayout ({children}) {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )
}