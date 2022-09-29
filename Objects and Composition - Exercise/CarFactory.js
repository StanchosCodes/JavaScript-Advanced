function pickACar(carObj) {
    let resultCar = {};
    resultCar.model = carObj.model;

    let engineEnum = {
        "Small Engine": { power: 90, volume: 1800},
        "Normal Engine": { power: 120, volume: 2400},
        "Monster Engine": { power: 200, volume: 3500}
    };

    if (carObj.power <= 90) {
        resultCar.engine = engineEnum["Small Engine"];
    }
    else if (carObj.power <= 120) {
        resultCar.engine = engineEnum["Normal Engine"];
    }
    else {
        resultCar.engine = engineEnum["Monster Engine"];
    }

    resultCar.carriage = {
        type: '',
        color: carObj.color
    };

    if (carObj.carriage === 'hatchback') {
        resultCar.carriage["type"] = 'hatchback';
    }
    else {
        resultCar.carriage["type"] = 'coupe'
    }

    let wheelsSize = carObj.wheelsize;

    if (carObj.wheelsize % 2 === 0) {
        wheelsSize = carObj.wheelsize - 1;
    }
    resultCar.wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];

    return resultCar;
}

console.table(pickACar({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', 
wheelsize: 14 }));

console.table(pickACar({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', 
wheelsize: 17 }));