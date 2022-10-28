class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;

        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        //`Successfully added {type1}, {type2}, …{typeN}`
        let buff = 'Successfully added ';
        let vegArr = [];

        for (let veg of vegetables) {
            let vegInfo = veg.split(' ');
            let type = vegInfo[0];
            let quantity = Number(vegInfo[1]);
            let price = Number(vegInfo[2]);

            let productIndex = this.availableProducts.findIndex(p => p.type === type);

            if (productIndex === -1) {
                this.availableProducts.push({ type: type, quantity: quantity, price: price });
            }
            else {
                this.availableProducts[productIndex].quantity += quantity;

                if (this.availableProducts[productIndex].price < price) {
                    this.availableProducts[productIndex].price = price;
                }
            }

            if (!vegArr.includes(type)) {
                vegArr.push(type);
            }
        }

        buff += vegArr.join(', ');

        return buff;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let product of selectedProducts) {
            let productInfo = product.split(' ');

            let type = productInfo[0];
            let quantity = Number(productInfo[1]);

            let productIndex = this.availableProducts.findIndex(p => p.type === type);

            if (productIndex === -1) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (this.availableProducts[productIndex].quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += this.availableProducts[productIndex].price * quantity;
            this.availableProducts[productIndex].quantity -= quantity;

        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let productIndex = this.availableProducts.findIndex(p => p.type === type);

        if (productIndex === -1) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (this.availableProducts[productIndex].quantity <= quantity) {
            this.availableProducts[productIndex].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        this.availableProducts[productIndex].quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let buff = "Available vegetables:\n";

        for (let product of this.availableProducts.sort((a, b) => a.price - b.price)) {
            buff += `${product.type}-${product.quantity}-$${product.price}\n`;
        }

        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return buff;
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2",
// "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2",
//     "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2",
// "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2",
"Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

