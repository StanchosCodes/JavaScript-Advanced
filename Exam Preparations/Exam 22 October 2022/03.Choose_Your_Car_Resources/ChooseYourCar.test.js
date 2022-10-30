const { expect } = require('chai');
const {chooseYourCar} = require('./chooseYourCar');

describe("Tests …", function() {
    describe("choosingType", function() {
        it("should throw if year below 1900", function() {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899), 'Invalid Year!');
        });

        it("should throw if year above 2022", function() {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023), 'Invalid Year!');
        });

        it("should throw if type not Sedan", function() {
            expect(() => chooseYourCar.choosingType('Coupe', 'red', 2020), 'This type of car is not what you are looking for.');
        });

        it("should return correctly if year above 2010", function() {
            let result = chooseYourCar.choosingType('Sedan', 'red', 2020)
            expect(result).to.be.equal('This red Sedan meets the requirements, that you have.');
        });

        it("should return correctly if year equals 2010", function() {
            let result = chooseYourCar.choosingType('Sedan', 'red', 2010)
            expect(result).to.be.equal('This red Sedan meets the requirements, that you have.');
        });

        it("should return correctly if year below 2010", function() {
            let result = chooseYourCar.choosingType('Sedan', 'red', 2009)
            expect(result).to.be.equal('This Sedan is too old for you, especially with that red color.');
        });
     });
     
     describe("brandName", function() {

        it("should throw if array is not array", function() {
            expect(() => chooseYourCar.brandName({}, 0), 'Invalid Information!');
        });

        it("should throw if array is not array", function() {
            expect(() => chooseYourCar.brandName(null, 0), 'Invalid Information!');
        });

        it("should throw if array is not array", function() {
            expect(() => chooseYourCar.brandName(undefined, 0), 'Invalid Information!');
        });

        it("should throw if array is not array", function() {
            expect(() => chooseYourCar.brandName('test', 0), 'Invalid Information!');
        });

        it("should throw if array is not array", function() {
            expect(() => chooseYourCar.brandName(10, 0), 'Invalid Information!');
        });

        it("should throw if index if greater than array length", function() {
            expect(() => chooseYourCar.brandName([], 5), 'Invalid Information!');
        });

        it("should throw if index is not integer", function() {
            expect(() => chooseYourCar.brandName([], 5.5), 'Invalid Information!');
        });

        it("should throw if index is not integer", function() {
            expect(() => chooseYourCar.brandName([], '5'), 'Invalid Information!');
        });

        it("should throw if index is below 0", function() {
            expect(() => chooseYourCar.brandName([], -1), 'Invalid Information!');
        });

        it("should throw if index is equal to array length", function() {
            expect(() => chooseYourCar.brandName([], 0), 'Invalid Information!');
        });

        it("should return correctly", function() {
            let result = chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot', 'Nissan'], 0);

            expect(result).to.be.equal('Toyota, Peugeot, Nissan');
        });

        it("should return correctly", function() {
            let result = chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot', 'Nissan'], 2);

            expect(result).to.be.equal('BMW, Toyota, Nissan');
        });
     });

     describe("carFuelConsumption", function() {
        it("should throw if distance is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption('100', 5), 'Invalid Information!');
        });

        it("should throw if distance is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption([], 5), 'Invalid Information!');
        });

        it("should throw if distance is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(null, 5), 'Invalid Information!');
        });

        it("should throw if distance is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(undefined, 5), 'Invalid Information!');
        });

        it("should throw if consumption is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, '5'), 'Invalid Information!');
        });

        it("should throw if consumption is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, null), 'Invalid Information!');
        });

        it("should throw if consumption is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, undefined), 'Invalid Information!');
        });

        it("should throw if consumption is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, []), 'Invalid Information!');
        });

        it("should throw if consumption is not a number", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, {}), 'Invalid Information!');
        });

        it("should throw if distnace is equal 0", function() {
            expect(() => chooseYourCar.carFuelConsumption(0, 5), 'Invalid Information!');
        });

        it("should throw if distnace is below 0", function() {
            expect(() => chooseYourCar.carFuelConsumption(-10, 5), 'Invalid Information!');
        });

        it("should throw if consumption is below 0", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, -5), 'Invalid Information!');
        });

        it("should throw if consumption is equal 0", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, 0), 'Invalid Information!');
        });

        it("should return correctly", function() {
            let result = chooseYourCar.carFuelConsumption(100, 5);

            expect(result).to.be.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        });

        it("should return correctly", function() {
            let result = chooseYourCar.carFuelConsumption(100, 7);

            expect(result).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it("should return correctly", function() {
            let result = chooseYourCar.carFuelConsumption(100, 8);

            expect(result).to.be.equal('The car burns too much fuel - 8.00 liters!');
        });

        it("should return correctly", function() {
            let result = chooseYourCar.carFuelConsumption(100, 11);

            expect(result).to.be.equal('The car burns too much fuel - 11.00 liters!');
        });
     });
});