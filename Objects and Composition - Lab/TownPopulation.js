function populate(towns) {
    let resultTowns = [];

    for (let town of towns) {
        let townsArgs = town.split(" <-> ");

        let currTown = townsArgs[0];
        let currPopulation = Number(townsArgs[1]);

        let currTownObj = {
            name: currTown,
            population: currPopulation
        };

        if (resultTowns.some(town => town.name === currTownObj.name)) {
            let indexOfTown = resultTowns.findIndex(town => town.name === currTown);
            resultTowns[indexOfTown].population += currTownObj.population;
        }
        else {
            resultTowns.push(currTownObj);
        }
    }

    resultTowns.forEach(town => {
        console.log(`${town.name} : ${town.population}`);
    });
}

populate(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

populate(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 
'Mexico City <-> 23401925', 'Istanbul <-> 1000']);