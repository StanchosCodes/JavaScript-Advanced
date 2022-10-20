const { expect } = require('chai');
const { sum } = require('../SumOfNumbers');

describe('sum', () => { // comes from mocha

    it ('should return correct result', () => { // comes from mocha
        // Arrange
        let array = [1, 2, 3];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(6); // comes from chai
    });

    it ('should return correct result with string numbers', () => { // comes from mocha
        // Arrange
        let array = ['1', '2', '3'];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(6); // comes from chai
    });

    it ('should return correct result with empty array', () => { // comes from mocha
        // Arrange
        let array = [];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(0); // comes from chai
    });

    it ('should return NaN array is not with Numbers or parsable values', () => { // comes from mocha
        // Arrange
        let array = ['something', 'something else'];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.NaN; // comes from chai
    });
});