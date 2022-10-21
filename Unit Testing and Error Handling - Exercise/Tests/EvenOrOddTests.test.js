const { expect } = require('chai');
const { isOddOrEven } = require('../EvenOrOdd');

describe('isOddOrEven', () => {

    it ('should return even if input string is with even length', () => {
        // Arrange
        let input = 'even';
        // Act
        let result = isOddOrEven(input)
        // Assert
        expect(result).to.be.equal('even');
    });

    it ('should return odd if input string is with odd length', () => {
        // Arrange
        let input = 'odd';
        // Act
        let result = isOddOrEven(input)
        // Assert
        expect(result).to.be.equal('odd');
    });

    it ('should return undefined if input is not a string', () => {
        // Arrange
        let input = 10;
        // Act
        let result = isOddOrEven(input)
        // Assert
        expect(result).to.be.undefined;
    });
});