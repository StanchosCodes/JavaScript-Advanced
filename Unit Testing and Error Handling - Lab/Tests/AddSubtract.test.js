const { expect } = require('chai');
const { createCalculator } = require('../AddSubtract');

describe('createCalculator', () => { // comes from mocha

    it ('should return an object', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        // Assert
        expect(result).to.be.an('object'); // comes from chai
    });

    it ('should return result 0', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        // Assert
        expect(result.get()).to.be.equal(0); // comes from chai
    });

    it ('add should return correct result', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        result.add(10);
        // Assert
        expect(result.get()).to.be.equal(10); // comes from chai
    });

    it ('add should return NaN with unparsable to number string', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        result.add('adding');
        // Assert
        expect(result.get()).to.be.NaN; // comes from chai
    });

    it ('add should return correct result with string parameter', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        result.add('10');
        // Assert
        expect(result.get()).to.be.equal(10); // comes from chai
    });

    it ('subtract should return correct result', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        result.add(10);
        result.subtract(8);
        // Assert
        expect(result.get()).to.be.equal(2); // comes from chai
    });

    it ('subtract should return NaN with unparsable to number string', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        result.add(10);
        result.subtract("subtract");
        // Assert
        expect(result.get()).to.be.NaN; // comes from chai
    });

    it ('subtract should return correct result with string parameter', () => { // comes from mocha
        // Arrange
        // and
        // Act
        let result = createCalculator()
        result.add(10);
        result.subtract('8');
        // Assert
        expect(result.get()).to.be.equal(2); // comes from chai
    });
});