
export const arrayGroupBykey = (images, key) => images.reduce(
    (result,item) => ({
      ...result,[item[key]]: [...(result[item[key]] || []),item,],}), 
    {},
  );