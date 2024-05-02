

function Categories() {

    const className = {
        cateBtn: 'text-base font-bold text-green-950 uppercase',
        ul: 'absolute left-0 p-3 hidden group/edit  '

    }
  return (
     <section className="flex items-center gap-4">
          <div className="relative group/item ">
               <button className={className.cateBtn}>men</button>
               <ul className={className.ul}>
                    <li>T-Shirts</li>
                    <li>Shirts</li>
                    <li>Jeans & Trousers</li>
                    <li>Activewear</li>
                    <li>Cardigans & Sweaters</li> 
                    <li>Hoodies & Sweatshirts</li>
                    <li>Coats & Jackets</li>
                    <li>Nightwear</li>
                    <li>Innerwear</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                   <li>Bags & Wallets</li> 
               </ul>
          </div>
          <div className="relative group/item ">
               <button className={className.cateBtn}>women</button>
               <ul className={className.ul}>
                    <li>Tops & Tees </li>
                    <li>Dresses & Jumpsuits</li>
                    <li>Jeans & Jeggings</li>
                    <li>Pants & Trousers</li>
                    <li>Leggings</li>
                    <li>Skirts</li>
                    <li>Cardigans & Sweaters</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Activewear</li>
                    <li>Jackets</li>
                    <li>Lingerie</li>
                    <li>Nightwear</li>
                    <li>Plus Size</li>
                    <li>Maternity</li>
                    <li>Shoes</li>
                    <li>Bags & Wallets</li>
                    <li>Accessories</li>
                    <li>Beauty & Perfumes</li>
               </ul>
          </div>
          <div className="relative group/item ">
               <button className={className.cateBtn}>kids</button>
               <ul className={className.ul}>
                   <li> Tops </li>
                   <li> Dresses</li>
                   <li> Bottoms</li>
                   <li> Clothing sets</li>
                   <li> Nightwear</li>
                   <li> Rompers & Jumpsuits</li>
                   <li> Sweaters & Cardigans</li>
                   <li> Hoodies & Sweatshirts</li>
                   <li> Coats & Jackets</li>
                   <li> Shoes</li>
                   <li> Accessories</li>
               </ul>
          </div>
     </section>
  )
}

export default Categories