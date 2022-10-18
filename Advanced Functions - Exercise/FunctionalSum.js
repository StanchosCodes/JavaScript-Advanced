function add(num) {
    let sum = num;

    function inner(num2) {
        sum += num2;
        return inner;
    }

    inner.toString = function () {
        return sum;
    }

    return inner;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());