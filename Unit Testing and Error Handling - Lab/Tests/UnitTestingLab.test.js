const { expect } = require('chai');
const { sum } = require('../SubSum');

describe('sum', () => { // comes from mocha

    it ('should return correct result', () => { // comes from mocha
        // Arrange
        let array = [1, 2, 3];
        // Act
        let result = sum(array, 0, 2)
        // Assert
        expect(result).to.be.equal(6); // comes from chai
    });
});