

function Categories() {

    const className = {
        cateBtn: 'text-base font-bold text-green-950 uppercase'
    }
  return (
     <section className="flex  items-center gap-4">
          <div className="">
               <button className={className.cateBtn}>men</button>
          </div>
          <div className="">
               <button className={className.cateBtn}>women</button>
          </div>
          <div className="">
               <button className={className.cateBtn}>kids</button>
          </div>
     </section>
  )
}

export default Categories