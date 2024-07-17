
export const formDataProductFormater = (formData,productColors,productSizes,productDetails,productSpecifications) => {

            // giving eatch size objet prop of color nam
            formData.append('sizes',JSON.stringify(productSizes));
            formData.set('colors',JSON.stringify(productColors));
            formData.set('details',JSON.stringify(productDetails));
            formData.set('specifications',JSON.stringify(productSpecifications));


    return formData;
}
