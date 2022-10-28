const { expect} = require('chai');
const {companyAdministration} = require('./companyAdministration');

describe("Tests …", function() {
    describe("hiringEmployee", function() {

        it("should add correctly with Programmer and years above 3", function() {
            let result = companyAdministration.hiringEmployee('Stancho', 'Programmer', 4);

            expect(result).to.be.equal('Stancho was successfully hired for the position Programmer.');
        });

        it("should add correctly with Programmer and years equal to 3", function() {
            let result = companyAdministration.hiringEmployee('Stancho', 'Programmer', 3);

            expect(result).to.be.equal('Stancho was successfully hired for the position Programmer.');
        });

        it("should not add with Programmer and years below 3", function() {
            let result = companyAdministration.hiringEmployee('Stancho', 'Programmer', 2);

            expect(result).to.be.equal('Stancho is not approved for this position.');
        });

        it("should not add with other positions", function() {
            expect(() => companyAdministration.hiringEmployee('Stancho', 'BackEnd', 6)).to.throw('We are not looking for workers for this position.');
        });
     });

     describe('calculateSalary', () => {

        it('should throw if hours is not a number', () => {
            expect(() => companyAdministration.calculateSalary('test')).to.throw('Invalid hours');
        });

        it('should throw if hours is not a number', () => {
            expect(() => companyAdministration.calculateSalary('10')).to.throw('Invalid hours');
        });

        it('should throw if hours below 0', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });

        it('return corectly', () => {
            let result = companyAdministration.calculateSalary(10);

            expect(result).to.be.equal(150);
        });

        it('return corectly', () => {
            let result = companyAdministration.calculateSalary(160);

            expect(result).to.be.equal(2400);
        });

        it('return corectly', () => {
            let result = companyAdministration.calculateSalary(161);

            expect(result).to.be.equal(3415);
        });

        it('return corectly', () => {
            let result = companyAdministration.calculateSalary(0);

            expect(result).to.be.equal(0);
        });

        it('return corectly', () => {
            let result = companyAdministration.calculateSalary(160.5);

            expect(result).to.be.equal(3407.5);
        });
     });

     describe('firedEmployee', () => {

        it('should throw if array is not array', () => {
            expect(() => companyAdministration.firedEmployee('ArrayTest', -1)).to.throw('Invalid input');
        });

        it('should throw if index is not integer', () => {
            expect(() => companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho'], 'test')).to.throw('Invalid input');
        });

        it('should throw if index is not integer', () => {
            expect(() => companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho', 'Mitko'], 2.5)).to.throw('Invalid input');
        });

        it('should throw if index is below 0', () => {
            expect(() => companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho'], -1)).to.throw('Invalid input');
        });

        it('should throw if index is equal the arrays length', () => {
            expect(() => companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho', 'Mitko'], 4)).to.throw('Invalid input');
        });

        it('should throw if index is above the arrays length', () => {
            expect(() => companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho', 'Mitko'], 6)).to.throw('Invalid input');
        });

        it('return corect array', () => {
            let result = companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho', 'Mitko'], 2);

            expect(result).to.be.equal('Gosho, Pencho, Mitko');
        });

        it('return corect array', () => {
            let result = companyAdministration.firedEmployee(['Gosho', 'Pencho', 'Stancho', 'Mitko'], 0);

            expect(result).to.be.equal('Pencho, Stancho, Mitko');
        });
     });
});