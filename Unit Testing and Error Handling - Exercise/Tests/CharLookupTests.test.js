const { expect } = require('chai');
const { lookupChar } = require('../CharLookup');

describe('lookupChar', () => {

    it ('should return correct result', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar('something', 3)
        // Assert
        expect(result).to.be.equal('e');
    });

    it ('should return undefined if first parameter is not a string', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar(10, 3)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined if second parameter is not a number', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar('something', 'something else')
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return Incorrect index if is below zero', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar('something', -1)
        // Assert
        expect(result).to.be.equal('Incorrect index');
    });

    it ('should return Incorrect index if is above the strings length', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar('something', 10)
        // Assert
        expect(result).to.be.equal('Incorrect index');
    });

    it ('should return Incorrect index if is equal to strings length', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar('something', 9)
        // Assert
        expect(result).to.be.equal('Incorrect index');
    });
    
    it ('should return undefined if second parameter is a floating point number', () => {
        // Arrange
        // and
        // Act
        let result = lookupChar('something', 0.5)
        // Assert
        expect(result).to.be.undefined;
    });
});