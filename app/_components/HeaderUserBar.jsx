import { PiShoppingCart } from "react-icons/pi";

function HeaderUserBar() {
  return (
    <section>
        <div className="">
            <h5>en</h5>
            <ul>
                <li></li>
            </ul>
        </div>
        <div className="">
            <div className="">
                <h5>sign in</h5>
            </div>
        </div>
        <div className="">
            <button>orders</button>
        </div>
        <div className="">
            <PiShoppingCart />
        </div>
    </section>
  )
}

export default HeaderUserBar