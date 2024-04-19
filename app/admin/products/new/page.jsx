

const NewProducts = () => {
  return (
    <div className="p-4">
        <form className="my-auto max-w-xl" action="" type='POST' >
            <div className="">
                <label htmlFor="title">title : </label>
                <input type="text" name="title" id="title" placeholder="the name of the product" />
            </div>
            <div className="">
                <label htmlFor="price">price : </label>
                <input type="number" name="price" id="price" placeholder="the price of the product in cent" />
            </div>
            <div className="">
                <label htmlFor="description">description : </label>
                <input type="text" name="description" id="description" placeholder="the description of the product" />
            </div>
            <div className="">
                <label htmlFor="description">description : </label>
                <input type="text" name="description" id="description" placeholder="the description of the product" />
            </div>
            <div className="">
                <label htmlFor="category">category : </label>
                <input type="text" name="category" id="category" placeholder="the category of the product" />
            </div>
            <div className="">
                <label htmlFor="subcategory">subcategory : </label>
                <input type="text" name="subcategory" id="subcategory" placeholder="the subcategory of the product" />
            </div>
            <div className="">
                <label htmlFor="count">count : </label>
                <input type="number" name="count" id="count" placeholder="the count of the product" />
            </div>
            <div className="">
                <label htmlFor="specifications">specifications : </label>
               <input type="text" name="specifications" id="specifications" placeholder="specifications should be key_value;"/>
            </div>
            <div className="">
                <div className="">
                    <label htmlFor="not-availble"> not availble : </label>
                    <input type="radio" name="notAvailble" id="not-availble" />
                </div>
                <div className="">
                   <label htmlFor="availble">availble : </label>
                   <input type="radio" name="availble" id="availble" />
                </div>
            </div>
            <div className="">
                <label htmlFor="image-path">image : </label>
                <input type="file" name="imagePath" id="image-path" />
            </div>

            <button type="submit">save</button>
            
        </form>
    </div>
  )
}

export default NewProducts