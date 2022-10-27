class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        // plantName, spaceRequired, ripe: default false, quantity: default 0

        let plantObj = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(plantObj);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plantIndex = this.plants.findIndex(p => p.plantName === plantName);
        //let currPlant = this.plants.find(p => p.plantName === plantName); // return the plant if found, otherway returns undefined
        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[plantIndex].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        this.plants[plantIndex].ripe = true;
        this.plants[plantIndex].quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plantIndex = this.plants.findIndex(p => p.plantName === plantName);
        
        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        
        if (this.plants[plantIndex].ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let currPlant = this.plants[plantIndex];

        let plantForStorage = {
            plantName: currPlant.plantName,
            quantity: currPlant.quantity
        }

        this.plants.splice(plantIndex, 1);
        this.spaceAvailable += currPlant.spaceRequired;
        this.storage.push(plantForStorage);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let resultBuff = `The garden has ${this.spaceAvailable} free space left.\n`;
       

        let plantBuff = 'Plants in the garden: ';

        for (let plant of this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))) {
            plantBuff += plant.plantName + ', ';
        }

        plantBuff = plantBuff.substring(0, plantBuff.length - 2);

        resultBuff += plantBuff + '\n';

        let storageBuff = 'Plants in storage: ';

        if (this.storage.length === 0) {
            resultBuff += `${storageBuff}The storage is empty.`;
        }
        else {
            for (let plant of this.storage) {
                storageBuff += `${plant.plantName} (${plant.quantity}), `
            }

            resultBuff += storageBuff.substring(0, storageBuff.length - 2);
        }

        return resultBuff;
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());