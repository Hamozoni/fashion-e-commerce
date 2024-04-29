
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };
export async function POST (requist) {


    const formData  = await requist.formData();

    // const h = new Headers(requist.headers);



    // console.log(h);
    console.log(formData.get("imagePath-#b05e5e").name);

    return new Response()

}