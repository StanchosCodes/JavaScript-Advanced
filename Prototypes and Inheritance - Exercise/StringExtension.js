(function solve() {
    String.prototype.ensureStart = function (str) {
        let result = this;

        if (result.startsWith(str)) {
            return result.toString();
        }

        return str + result;
    }

    String.prototype.ensureEnd = function (str) {
        let result = this;

        if (result.endsWith(str)) {
            return result.toString();
        }

        return result + str;
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function (n) {
        let result = this;

        if (result.length <= n) { // its required wrong in the task it says '<' only
            return result.toString();
        }

        if (n < 4) {
            result = '';

            for (let i = 0; i < n; i++) {
                result += '.';
            }

            return result;

            // return '.'.repeat(n); // more functional way
        }

            let resultArr = result.split(' ');

            while ((resultArr.join(' ') + '...').length > n) {
                if (resultArr.length > 1) {
                    resultArr.pop();
                } else {
                    resultArr[0] = resultArr[0].slice(0, n - 3)
                }
            }
            return resultArr.join(' ').trim() + '...';
    }

    String.format = function (str, ...params) {
        let result = str;

        params.forEach((word, i) => result = result.replace(`{${i}}`.toString(), word));

        return result;
    }
})()

let str = 'my string';

str = str.ensureStart('my');

str = str.ensureStart('hello ');

str = str.truncate(16);

str = str.truncate(14);

str = str.truncate(8);

str = str.truncate(4);

str = str.truncate(2);

str = String.format('The {0} {1} fox', 'quick', 'brown');

str = String.format('jumps {0} {1}', 'dog');