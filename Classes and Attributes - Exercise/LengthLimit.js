class Stringer {
    constructor(word, length) {
        this.innerString = word;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength < length) {
            this.innerLength = 0;
        }
        else {
            this.innerLength -= length;
        }
    }

    toString() {
        let currString = this.innerString;
        let isCut = false;

        if (currString.length > this.innerLength) {
            currString = currString.substring(0, currString.length - this.innerLength);
            isCut = true;
        }

        if (this.innerLength === 0) {
            currString = '';
            isCut = true;
        }

        if (isCut) {
            return currString + '...';
        }

        return currString;
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test