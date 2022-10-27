const { expect, assert } = require('chai');
const {bookSelection} = require('./solution');

describe("Tests …", function() {
    describe("isGenreSuitable", function() {

        it("should throw if age lower than 12 and genre is Horror", function() {
            let result = bookSelection.isGenreSuitable('Horror', 10);
            expect(result).to.be.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });

        it("should throw if age lower than 12 and genre is Thriller", function() {
            let result = bookSelection.isGenreSuitable('Thriller', 10);
            expect(result).to.be.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
        });

        it("should throw if age equal 12 and genre is Thriller", function() {
            let result = bookSelection.isGenreSuitable('Thriller', 12);
            expect(result).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });

        it("should throw if age equal 12 and genre is Horror", function() {
            let result = bookSelection.isGenreSuitable('Horror', 12);
            expect(result).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });

        it("should throw if age above 12 and genre is Horror", function() {
            let result = bookSelection.isGenreSuitable('Horror', 13);
            expect(result).to.be.equal(`Those books are suitable`);
        });

        it("should throw if age above 12 and genre is Thriller", function() {
            let result = bookSelection.isGenreSuitable('Thriller', 13);
            expect(result).to.be.equal(`Those books are suitable`);
        });
     });

     describe('isItAffordable', function () {

        it('throw if price not a number', function () {
            assert(() => bookSelection.isItAffordable('test', 100), 'Invalid input');
        });

        it('throw if budget not a number', function () {
            assert(() => bookSelection.isItAffordable(100, 'test'), 'Invalid input');
        });

        it('returns error if budget not enough', function () {
            let result = bookSelection.isItAffordable(100, 10);

            expect(result).to.be.equal("You don't have enough money");
        });

        it('returns error if budget not enough', function () {
            let result = bookSelection.isItAffordable(100, 99.5);

            expect(result).to.be.equal("You don't have enough money");
        });

        it('returns correct message if budget enough', function () {
            let result = bookSelection.isItAffordable(10, 100);

            expect(result).to.be.equal(`Book bought. You have ${100 - 10}$ left`);
        });

        it('returns correct message if budget enough', function () {
            let result = bookSelection.isItAffordable(99.5, 100);

            expect(result).to.be.equal(`Book bought. You have ${100 - 99.5}$ left`);
        });
     });

     describe('suitableTitles', () => {
        
        it('array is not array', () => {
            assert(() => bookSelection.suitableTitles(100, 'Horror'), 'Invalid input');
        });

        it('array is not array', () => {
            assert(() => bookSelection.suitableTitles('test', 'Horror'), 'Invalid input');
        });

        it('genre is not a string', () => {
            assert(() => bookSelection.suitableTitles([], 100), 'Invalid input');
        });

        it('genre is not a string', () => {
            assert(() => bookSelection.suitableTitles([], "test"), 'Invalid input');
        });

        it('should return correct array with valid input', () => {
            let input = [ {title: "Harry Potter", genre: "Fantasy"},
                {title: "Born a Crime", genre: "Comedy"}, {title: "Paragraph-22", genre: "Comedy"}];

            let expected = ["Born a Crime", "Paragraph-22"];

            expect(bookSelection.suitableTitles(input, 'Comedy')).to.deep.equal(expected);
            expect(bookSelection.suitableTitles(input, 'Fantasy')).to.deep.equal(["Harry Potter"]);
        });
     });
});