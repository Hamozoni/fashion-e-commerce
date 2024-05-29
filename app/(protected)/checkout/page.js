import{ auth} from "../../../auth"

const checkoutPage = async()=>  {

    const session =  await auth()
  return (
    <div>{JSON.stringify(session)}</div>
  )
}

export default checkoutPage