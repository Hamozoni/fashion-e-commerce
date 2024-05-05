

function getCurrency(priceIncent) {

    let SAR = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "SAR"
    });

    let price = SAR.format(price / 100)
     
  return price;
}

export default getCurrency