function print(arr, step) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i += step) {
        resultArr.push(arr[i]);
    }

    return resultArr;
}

console.log(print(['5', '20', '31', '4', '20'], 2));