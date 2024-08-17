import { fetchData } from "@/lip/fetchData"
import { Header } from "./_components/header";


export default async function CustomersPage () {

    const {
        customers,
        adminCount,
        allCount,
        verifiedCount,
        unverifiedCount
    } = await fetchData('admin/customers?page=1');

    return (
        <div className="">
            <Header 
                data={{
                    allCount,adminCount,
                    verifiedCount,
                    unverifiedCount
                    }} 
            /> 
        </div>
    )
}