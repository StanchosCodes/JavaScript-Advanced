function solution() {
    // creating a store object with which we will work
    let store = {
        protein: 0,
        carbohydrate: 0,
        flavour: 0,
        fat: 0
    }

    // creating a recipes Enums so it will be easier to prepare the meals
    let resipesEnum = {
        apple: { carbohydrate: 1, flavour: 2},
        lemonade: { carbohydrate: 10, flavour: 20},
        burger: { carbohydrate: 5, fat: 7, flavour: 3},
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    // creating a function which will execute the given commands
    function commandsExecute() {
        return {
            restock: (ingradient, quantity) => {
                store[ingradient] += Number(quantity);
                return "Success";
            },
            prepare: (meal, quantity) => {
                let fakeStore = JSON.parse(JSON.stringify(store));
                // let isEnough = true;

                for (let [ingradient, qnty] of Object.entries(resipesEnum[meal])) {
                    let neededIngradientsQnty = Number(quantity) * qnty;

                    if (fakeStore[ingradient] < neededIngradientsQnty) {
                       // isEnough = false;
                        return `Error: not enough ${ingradient} in stock`;
                    }

                    fakeStore[ingradient] -= neededIngradientsQnty;
                }

                // if (!isEnough) {
                    //     return `Error: not enough ${ingradient} in stock`;
                    // }
                    
                    store = fakeStore;
                    return "Success";
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }
        }
    }

    // creating a function which will manipulte the input
    return function inputManipulator(input) {
        let commandExecuter = commandsExecute();
        let [command, element, quantity] = input.split(' ');
        return commandExecuter[command](element, quantity);
    }
}

let manager = solution();

console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));

console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));