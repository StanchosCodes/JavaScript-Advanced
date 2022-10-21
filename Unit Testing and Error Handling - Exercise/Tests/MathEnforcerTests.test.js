const { expect } = require('chai');
const { mathEnforcer } = require('../MathEnforcer');

describe('mathEnforcer', () => {

    describe('addFive', () => {

        it('should return correct result', () => {
            // Arrange
            let addFive = mathEnforcer.addFive;
            // and
            // Act
            let result = addFive(5);
            
            // Assert
            expect(result).to.be.equal(10);
        });

        it('should return correct result with floating point number', () => {
            // Arrange
            let addFive = mathEnforcer.addFive;
            // and
            // Act
            let result = addFive(0.5);
            
            // Assert
            expect(result).to.be.closeTo(5.5, 0.001);
        });

        it('should return correct result with negative values', () => {
            // Arrange
            let addFive = mathEnforcer.addFive;
            // and
            // Act
            let result = addFive(-5);
            
            // Assert
            expect(result).to.be.equal(0);
        });

        it('should return undefined if input is not a number', () => {
            // Arrange
            let addFive = mathEnforcer.addFive;
            // and
            // Act
            let result = addFive('five');
            
            // Assert
            expect(result).to.be.undefined;
        });
    });

    describe('subtractTen', () => {

        it('should return correct result', () => {
            // Arrange
            let subtractTen = mathEnforcer.subtractTen;
            // and
            // Act
            let result = subtractTen(20);
            
            // Assert
            expect(result).to.be.equal(10);
        });

        it('should return correct result with floating point number', () => {
            // Arrange
            let subtractTen = mathEnforcer.subtractTen;
            // and
            // Act
            let result = subtractTen(20.5);
            
            // Assert
            expect(result).to.be.closeTo(10.5, 0.001);
        });

        it('should return correct result with negaive number', () => {
            // Arrange
            let subtractTen = mathEnforcer.subtractTen;
            // and
            // Act
            let result = subtractTen(-10);
            
            // Assert
            expect(result).to.be.equal(-20);
        });

        it('should return undefined if input is not a number', () => {
            // Arrange
            let subtractTen = mathEnforcer.subtractTen;
            // and
            // Act
            let result = subtractTen('five');
            
            // Assert
            expect(result).to.be.undefined;
        });
    });

    describe('sum', () => {

        it('should return correct result', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(5, 5);
            
            // Assert
            expect(result).to.be.equal(10);
        });

        it('should return correct result with floating point first parameter', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(5.5, 5);
            
            // Assert
            expect(result).to.be.closeTo(10.5, 0.001);
        });

        it('should return correct result with floating point second parameter', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(5, 5.5);
            
            // Assert
            expect(result).to.be.closeTo(10.5, 0.001);
        });

        it('should return correct result with floating point numbers', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(5.5, 5.6);
            
            // Assert
            expect(result).to.be.closeTo(11.1, 0.001);
        });

        it('should return correct result with negative first parameter', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(-5, 5);
            
            // Assert
            expect(result).to.be.equal(0);
        });

        it('should return correct result with negative second parameter', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(5, -5);
            
            // Assert
            expect(result).to.be.equal(0);
        });

        it('should return correct result with negative numbers', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(-5, -5);
            
            // Assert
            expect(result).to.be.equal(-10);
        });

        it('should return undefined if the first parameter is not a number', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum('five', 5);
            
            // Assert
            expect(result).to.be.undefined;
        });

        it('should return undefined if the second parameter is not a number', () => {
            // Arrange
            let sum = mathEnforcer.sum;
            // and
            // Act
            let result = sum(5, 'five');
            
            // Assert
            expect(result).to.be.undefined;
        });
    });
});