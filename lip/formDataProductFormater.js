import { 
    zProductColorSchema, 
    zProductDetailsSchema, 
    zProductSizesSchema, 
    zProductSpeciSchema 
} from "../validationSchemas/newProductSchemas";

export const formDataProductFormater = (
    formData,
    productColors,
    setColValidError,
    productSizes,
    setSizeValidError,
    productDetails,
    setDetValidError,
    productSpecifications,
    setSpeciValidError
) => {

    console.log(productColors);

    const validateDetails = zProductDetailsSchema?.safeParse(productDetails);
    if(validateDetails.success) {
        setDetValidError(null)
    }else {
        setDetValidError(JSON.parse(validateDetails?.error));
    };

    const validateColor = zProductColorSchema?.safeParse(productColors);
    if(validateColor.success) {
    }else {
        setColValidError(JSON.parse(validateColor?.error));
    };

    const sizes = []

    for(let index = 0;index < productColors?.length;index++){
        for(let s = 0; s < productSizes[index]?.length; s++){
            sizes.push(productSizes[index][s])
        };
    };


    const validateSize = zProductSizesSchema.safeParse(sizes);
    if(validateSize.success){
        setSizeValidError(null)
    }else {
        setSizeValidError(JSON.parse(validateSize?.error));
    }

    const validateSpecif = zProductSpeciSchema?.safeParse(productSpecifications);
    if(validateSpecif.success){
        setSpeciValidError(null)
    }else {
       setSpeciValidError(JSON.parse(validateSpecif?.error));
    }
    // giving eatch size objet prop of color nam
    formData.append('sizes',JSON.stringify(sizes));
    formData.set('colors',JSON.stringify(productColors));
    formData.set('details',JSON.stringify(productDetails));
    formData.set('specifications',JSON.stringify(productSpecifications));

    if(validateDetails.success && validateColor.success && validateSize.success && validateSpecif.success) {
        return formData
    }else {
        return null;
    };
}
