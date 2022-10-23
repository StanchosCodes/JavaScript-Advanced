function solve (input) {
    let cars = {};

    for (let info of input) {
        let [brand, model, quantity] = info.split(' | ');
        quantity = Number(quantity);

        if (!cars[brand]) {

            cars[brand] = {};
        }

        if (!cars[brand][model]) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += quantity;
    }

    for (let [brand, model] of Object.entries(cars)) {
        let models = '';

        for (let [name, quantity]  of Object.entries(model)) {
            models += `###${name} -> ${quantity}\n`;
        }

        console.log(`${brand}\n${models.trimEnd()}`);
    }
}

solve(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100', 'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000', 'Lada | Jigula | 1000000', 'Citroen | C4 | 22',
'Citroen | C5 | 10']);