
export const formDataProductFormater = (formData,colors,specifications,sizes) => {
    let informations = []
    let newSizes = []
    let newSizesArray = []

    colors?.map(({color,colorName},index)=> {

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
        });

        newSizesArray.push(newSizes[index])



        formData.append('sizes',JSON.stringify(newSizesArray))

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
    };

    formData.set('specifications',JSON.stringify(specifications));
    formData.set('informations',JSON.stringify(informations));

    const size = formData.getAll('size')

    return {data,specifications,informations,sizes:size};
}
