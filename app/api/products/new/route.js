import { headers } from "next/headers"

export default async function POST(request) {

    const h = headers();

    const data = await request.json()

    console.log(data)
    console.log(h)
  return Response('hi')
}
