
export async function GET (req) {

    const searchParams = new URL(req.url);
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    
}