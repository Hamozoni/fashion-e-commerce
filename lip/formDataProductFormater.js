
export const formDataProductFormater = (formData,colors,specifications,sizes) => {
    let informations = []
    let newSizes = []
    let newSizesArray = []

    const newFormData = new FormData();

    colors?.map(({color,colorName},index)=> {

        newSizes[index] = sizes[index];

        sizes[index]?.map((_,i)=> {
            newSizes[index][i].stackQuantity = +formData.get(`stackQuantity ${sizes[index][i]?.shortName} ${index}`)
        })

        newSizes[index]

        informations?.push({
            colorName: formData.get(`${colorName} ${index}`),
            color: formData.get(`${color} ${index}`),
            princeInHalala : +formData.get(`price in halala ${index}`),
        });

        newSizesArray.push(newSizes[index])



        newFormData.append('sizes',JSON.stringify(newSizesArray));
        newFormData.append(`images ${index}`,formData.get(`images ${index}`));
    });

    let newSpecifications = []

    specifications?.map(({name,value},index)=> {
        newSpecifications?.push({
            name: formData.get(`${name} ${index}`),
            value: formData.get(`${value} ${index}`),
        })
    })

    const details = {
        name : formData.get('name'),
        brand: formData.get('brand'),
        serialNumber : formData.get('serialNumber'),
        category : formData.get('category'),
        subcategory: formData.get('subcategory'),
        describtion: formData.get('describtion'),
    };

    newFormData.set('specifications',JSON.stringify(specifications));
    newFormData.set('informations',JSON.stringify(informations));
    newFormData.set('details',JSON.stringify(details));


    return newFormData;
}
