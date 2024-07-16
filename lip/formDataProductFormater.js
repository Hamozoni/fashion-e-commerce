
export const formDataProductFormater = (formData,productColors,setProductSizes,productSizes,productDetails,productSpecifications) => {

            // giving eatch size objet prop of color name
            productColors.map(({colorName},index)=> {
                setProductSizes(prev=> {
                    prev[index].map((el)=> {
                        el.colorName = colorName;

                    });
                    
                    return [...prev]
                });
            });
            formData.append('sizes',JSON.stringify(productSizes));
            formData.set('colors',JSON.stringify(productColors));
            formData.set('details',JSON.stringify(productDetails));
            formData.set('specifications',JSON.stringify(productSpecifications));


    return formData;
}
