

export async function POST (requist) {


    const formData = await requist.body;

    // const h = new Headers(requist.headers);



    // console.log(h);
    console.log(formData);

    return new Response()

}