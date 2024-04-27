

export async function POST (requist) {

    const {data}= await requist.json();

    const h = new Headers(requist.headers);

    h.set('Content-Type', 'image/*')

    console.log(h);
    console.log(data);

    return new Response()

}