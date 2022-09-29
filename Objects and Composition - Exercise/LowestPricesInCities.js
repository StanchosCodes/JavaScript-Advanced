function lowestPrice(productsData) {
    let objProducts = [];
    
    productsData.forEach(productInfo => {
        let [town, product, price] = productInfo.split(' | ');
        price = Number(price);
        
        if (objProducts.hasOwnProperty(product)) {
            let currPrice = objProducts[product]["price"];

            if (currPrice > price) {
                objProducts[product] = {town, price};
            }
        }
        else {
            objProducts[product] = {town, price};
        }
    });

    for (let [product, townPrice] of Object.entries(objProducts)) {
            console.log(`${product} -> ${townPrice.price} (${townPrice.town})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2',
'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2',
'New York | Sample Product | 1000.1', 'New York | Burger | 10']);