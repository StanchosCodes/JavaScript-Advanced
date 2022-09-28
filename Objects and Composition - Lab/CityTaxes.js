function solve(name, population, treasury) {

    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };
}

let city = solve('Trotuga', 7000, 15000);
console.log(city);

city.collectTaxes();
console.log('Treasury: ' + city.treasury);

city.applyGrowth(5);
console.log('Population: ' + city.population);

city.applyRecession(10);
console.log('Treasury: ' + city.treasury);
console.log(city);

console.log(solve('Trotuga', 7000, 15000));