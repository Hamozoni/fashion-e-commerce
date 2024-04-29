

export async function POST (requist) {


    const {formData } = await requist;

    // const h = new Headers(requist.headers);



    // console.log(h);
    console.log(formData);

    return new Response()

}