

const NewProducts = () => {

    const className = 'pb-4 mb-3 min-w-fit  border-b border-slate-100';
    const inputClass = 'min-w-full'
  return (
    <div className="p-4 w-full">
        <form className="mx-auto  border border-slate-100 p-4 rounded-md   min-w-fit shadow-lg" action="" type='POST' >
        <h3 className="pb-5 font-bold text-2xl ">adding new product form</h3>
            <div className={className}>
                <label htmlFor="title">title : </label>
                <input type="text" name="title" id="title" className={inputClass} placeholder="the name of the product..." />
            </div>
            <div className={className}>
                <label htmlFor="price">price : </label>
                <input className={inputClass} type="number" name="price" id="price" placeholder="the price of the product in cent..." />
            </div>
            <div className={className}>
                <label htmlFor="category">category : </label>
                <input className={inputClass} type="text" name="category" id="category" placeholder="the category of the product..." />
            </div>
            <div className={className}>
                <label htmlFor="description">description : </label>
                <textarea className={inputClass}  name="description" id="description" placeholder="the description of the product..." cols="10" rows="10"></textarea>
            </div>
            <div className={className}>
                <label htmlFor="subcategory">subcategory : </label>
                <input className={inputClass} type="text" name="subcategory" id="subcategory" placeholder="the subcategory of the product..." />
            </div>
            <div className={className}>
                <label htmlFor="count">count : </label>
                <input className={inputClass} type="number" name="count" id="count" placeholder="the count of the product..." />
            </div>
            <div className={className}>
                <label htmlFor="specifications">specifications : </label>
               <textarea className={inputClass}  name="specifications" id="specifications" placeholder="specifications should be key_value; key_value;key_value;else.." cols="10" rows="10"></textarea>
               
            </div>
            <div className={`${className} flex gap-4`}>
                <div className='{className}'>
                    <label htmlFor="not-availble"> not availble : </label>
                    <input type="radio" name="notAvailble" id="not-availble" />
                </div>
                <div className='{className}'>
                   <label htmlFor="availble">availble : </label>
                   <input type="radio" name="availble" id="availble" />
                </div>
            </div>
            <div className={className}>
                <label htmlFor="image-path">image : </label>
                <input className={inputClass} type="file" name="imagePath" id="image-path" />
            </div>

            <button type="submit" className="my-auto">save</button>
            
        </form>
    </div>
  )
}

export default NewProducts