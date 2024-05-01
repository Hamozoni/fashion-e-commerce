import { PiShoppingCart } from "react-icons/pi";

function HeaderUserBar() {
    const className = {
        flex:  `flex items-center gap-4`,
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
        cartNumb: "absolute left-1/3 bottom-3 bg-green-800 text-slate-100 rounded-full w-5 h-5 flex items-center justify-center  "
    }
  return (
    <section className={className.flex} >
        <div className="">
            <h5 className={className.title}>en</h5>
            <ul>
                <li></li>
            </ul>
        </div>
        <div className="">
            <div className="">
                <h5 className={className.title}>sign in</h5>
            </div>
        </div>
        <div className="">
            <button className={className.title}>orders</button>
        </div>
        <div  className="relative cursor-pointer">
            <span className={className.cartNumb}>9</span>
            <PiShoppingCart size={28}/>
        </div>
    </section>
  )
}

export default HeaderUserBar