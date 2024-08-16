import { OffersContainer } from "./_components/offersContainer";
import { fetchData } from "@/lip/fetchData";

export default async function offersPage () {

   const data =  await fetchData('admin/offers?category=all&subcategory=all&page=1');

    return (
        <div className="p-3 lg:px-8">
            <OffersContainer data={data} />
        </div>
    )
};
