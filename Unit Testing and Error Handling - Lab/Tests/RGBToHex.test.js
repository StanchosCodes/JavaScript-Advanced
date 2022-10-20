const { expect } = require('chai');
const { rgbToHexColor } = require('../RGBToHex');

describe('rgbtoHexCovert', () => {

    it ('should return correct result', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, 20, 30)
        // Assert
        expect(result).to.be.equal('#0A141E');
    });

    it ('should return correct result', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(255, 255, 255)
        // Assert
        expect(result).to.be.equal('#FFFFFF');
    });

    it ('should return correct result', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(0, 0, 0)
        // Assert
        expect(result).to.be.equal('#000000');
    });

    it ('should return undefined result with all parameters above 255', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(256, 256, 256)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with red above 255', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(256, 20, 30)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with green above 255', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, 256, 30)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with blue above 255', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, 20, 256)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with red below 0', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(-1, 20, 30)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with green below 0', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, -1, 30)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with blue below 0', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, 20, -1)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with red string', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor('10', 20, 30)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with green string', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, '20', 30)
        // Assert
        expect(result).to.be.undefined;
    });

    it ('should return undefined result with blue string', () => {
        // Arrange
        // and
        // Act
        let result = rgbToHexColor(10, 20, '30')
        // Assert
        expect(result).to.be.undefined;
    });
});