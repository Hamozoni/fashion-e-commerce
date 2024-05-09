
import {fetchData} from "../_lip/fetchData";

async function page({params,searchParams}) {

    const {section} = params;
    const {sub} = searchParams;
    const product = await fetchData(`products/${section}?sub=${sub}`)

    console.log(product)


    return (
        <div className="">

        </div>
    )
}

export default page