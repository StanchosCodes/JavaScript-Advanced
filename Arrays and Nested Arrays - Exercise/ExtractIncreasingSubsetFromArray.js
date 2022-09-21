function extract(arr) {
    let resultArr = [];
    let currBiggest = Number.MIN_SAFE_INTEGER;

    arr.forEach(element => {
        if (element >= currBiggest)
        {
            currBiggest = element;
            resultArr.push(currBiggest);
        }
    });

    return resultArr;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract([1, 2, 3, 4]));
console.log(extract([20, 3, 2, 15, 6, 1]));
console.log(extract([0, -5, 0, -10]));