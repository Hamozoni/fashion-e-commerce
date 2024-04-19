

const NewProducts = () => {

    const className = {
        inputsDev: 'pb-4 mb-3 min-w-fit  border-b border-slate-100',
        inputClass : 'min-w-full text-gray-900 border-slate-200 border  focus:border-slate-400 rounded-lg p-2 my-2',
        label: 'text-xl font-bold text-slate-700',
        sumBtn: 'min-w-full rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md '
    };

  return (
    <div className="p-4 lg:p-10 w-full">
        <form className="mx-auto  border border-slate-100 p-4 rounded-md   min-w-fit shadow-lg" action="" type='POST' >
        <h3 className="py-4 mb-4 font-bold text-2xl border-b border-slate-100 ">adding new product form</h3>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="title">title : </label>
                <input type="text" name="title" id="title" className={className.inputClass} placeholder="the name of the product..." />
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="price">price : </label>
                <input className={className.inputClass} type="number" name="price" id="price" placeholder="the price of the product in cent..." />
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="category">category : </label>
                <input className={className.inputClass} type="text" name="category" id="category" placeholder="the category of the product..." />
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="description">description : </label>
                <textarea className={className.inputClass}  name="description" id="description" placeholder="the description of the product..." cols="10" rows="10"></textarea>
            </div>
            <div className={className}>
                <label  className={className.label} htmlFor="subcategory">subcategory : </label>
                <input className={className.inputClass} type="text" name="subcategory" id="subcategory" placeholder="the subcategory of the product..." />
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="count">count : </label>
                <input className={className.inputClass} type="number" name="count" id="count" placeholder="the count of the product..." />
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="specifications">specifications : </label>
               <textarea className={className.inputClass}  name="specifications" id="specifications" placeholder="specifications should be key_value; key_value;key_value;else.." cols="10" rows="10"></textarea>
               
            </div>
            <div className={`${className.inputsDev} flex gap-4`}>
                <div className='{className}'>
                    <label className={className.label}  htmlFor="not-availble"> not availble : </label>
                    <input type="radio" name="notAvailble" id="not-availble" />
                </div>
                <div className='{className}'>
                   <label className={className.label}  htmlFor="availble">availble : </label>
                   <input type="radio" name="availble" id="availble" />
                </div>
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="image-path">image : </label>
                <input className={className.inputClass} type="file" name="imagePath" id="image-path" />
            </div>

            <button type="submit" className={className.sumBtn}>save</button>
            
        </form>
    </div>
  )
}

export default NewProducts