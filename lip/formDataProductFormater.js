
export const formDataProductFormater = (formData,productColors,setProductSizes,productSizes,productDetails,setProductDetails,productSpecifications) => {

            setProductDetails(prev=> {
                const moreDertails = {
                    priceInHalala : productColors[0].priceInHalala,
                    size : productSizes[0][0].shortName,
                    color : productColors[0].color,
                    colorName :productColors[0].colorName
                }
                return {...prev,...moreDertails}
            });
            // giving eatch size objet prop of color name
            productColors.map(({colorName},index)=> {
                setProductSizes(prev=> {
                    prev[index].map((el)=> {
                        el.colorName = colorName;

                    });
                    
                    return [...prev]
                })
            });
            formData.append('sizes',JSON.stringify(productSizes));
            formData.set('colors',JSON.stringify(productColors));
            formData.set('details',JSON.stringify(productDetails));
            formData.set('sepecifications',JSON.stringify(productSpecifications));


    return formData;
}
