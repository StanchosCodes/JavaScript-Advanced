function sortProducts(arr) {
    let objArr = [];

    arr.forEach(product => {
        let [name, price] = product.split(' : ');
        price = Number(price);

        objArr.push({name, price});
    });

    
    objArr.sort((a, b) => a.name.localeCompare(b.name));

    let result = '';
    let firstLetter = objArr[0].name[0];
    
    objArr.forEach(product => {
        if (product.name[0] !== firstLetter || result === '') {
            firstLetter = product.name[0];
            result += firstLetter + "\n";
        }

        result += `${product.name}: ${product.price}\n`;
    });

    console.log(result);
}

sortProducts(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 
'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);

sortProducts(['Banana : 2', "Rubic's Cube : 5", 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10',
 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);