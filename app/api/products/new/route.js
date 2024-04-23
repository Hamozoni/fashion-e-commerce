import { headers } from "next/headers"

export async function POST(request) {

    const h = headers();

    const data = await request.json()

    console.log(data)
    console.log(h)
  return new Response('hi')
}
