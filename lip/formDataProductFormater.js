
export const formDataProductFormater = (formData,colors,specifications,sizes) => {
    let informations = []
    let newSizes = []

    colors?.map(({image,color,colorName},index)=> {

        newSizes[index] = sizes[index];

        sizes[index]?.map((_,i)=> {
            newSizes[index][i].stackQuantity = +formData.get(`stackQuantity ${sizes[index][i]?.shortName} ${index}`)
            formData.delete(`stackQuantity ${sizes[index][i]?.shortName} ${index}`)
        })

        newSizes[index]

        informations?.push({
            colorName: formData.get(`${colorName} ${index}`),
            color: formData.get(`${color} ${index}`),
            princeInHalala : +formData.get(`price in halala ${index}`),
            images: formData.getAll(`${image} ${index}`) ,
            sizes: newSizes[index]
        });

        formData.delete(`${colorName} ${index}`)
        formData.delete(`${color} ${index}`)
        formData.delete(`price in halala ${index}`)
    });

    let newSpecifications = []

    specifications?.map(({name,value},index)=> {
        newSpecifications?.push({
            name: formData.get(`${name} ${index}`),
            value: formData.get(`${value} ${index}`),
        })

        formData.delete(`${name} ${index}`);
        formData.delete(`${value} ${index}`)
    })

    const data = {
        name : formData.get('name'),
        brand: formData.get('brand'),
        serialNumber : formData.get('serialNumber'),
        category : formData.get('category'),
        subcategory: formData.get('subcategory'),
        describtion: formData.get('describtion'),
        specifications: newSpecifications,
        informations
    };


    const formDataInfo =  [];

    const length = informations?.length

    for(let i = 0; i < length; i++){
        ifo.sizes[i] = JSON.stringify(ifo[i].sizes)
        formDataInfo.push(ifo[i]);
    };

    formData.set('specifications',JSON.stringify(specifications));
    formData.set('informations',JSON.stringify(formDataInfo));

    return data;
}
