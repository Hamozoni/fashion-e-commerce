

export function getCurrency(priceIncent) {

    let SAR = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "SAR"
    });

    let price = SAR.format(priceIncent / 100)
     
  return price;
};