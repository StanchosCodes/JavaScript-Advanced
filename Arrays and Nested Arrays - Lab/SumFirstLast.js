function sum(arr) {
    let sum = 0;

    sum += Number(arr.pop());
    sum += Number(arr.shift());

    return sum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));