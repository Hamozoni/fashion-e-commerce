

export async function POST (requist) {

    const body = await requist.body;

    // const h = new Headers(requist.headers);



    // console.log(h);
    console.log(body);

    return new Response()

}