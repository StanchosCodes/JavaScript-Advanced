const { expect } = require('chai');
const { isSymmetric } = require('../CheckForSymmetry');

describe('isSymmetric', () => {

    it ('should return false if input is a string', () => {
        // Arrange
        let input = "somthing";
        // Act
        let result = isSymmetric(input);
        // Assert
        expect(result).to.be.false;
    });

    it ('should return false if input is number', () => {
        // Act and Arrange
        let result = isSymmetric(1, 2, 3, 4);
        // Assert
        expect(result).to.be.false;
    });

    it('should return true if the Array is symmetric', () => {
        let input = [1, 2, 3, 3, 2, 1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it('should return false if the Array is not symmetric', () => {
        let input = [1, 2, 3, 4, 5, 6];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });

    it('should return true if the Array is symmetric with one element', () => {
        let input = [1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it('should return true if the Array is symmetric with odd elements', () => {
        let input = [1, 2, 3, 2, 1];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    it('should return true if the Array is empty', () => {
        let input = [];
        let result = isSymmetric(input);
        expect(result).to.be.true;
    });

    // required for the second test in judge
    it('should return false if the Array is with mixed values but symmetric', () => {
        let input = ["2", 2];
        let result = isSymmetric(input);
        expect(result).to.be.false;
    });
});