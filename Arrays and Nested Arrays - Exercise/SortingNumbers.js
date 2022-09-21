function sorting(arr) {
    let resultArr = [];
    arr.sort((a, b) => a - b);

    while (arr.length !== 0) {
        // let smallest = Math.min(...arr);
        // let biggest = Math.max(...arr);

        // resultArr.push(smallest);
        // resultArr.push(biggest);
        
        // let indexOfSmallest = arr.indexOf(smallest);
        // arr.splice(indexOfSmallest, 1);
        // let indexOfBiggest = arr.indexOf(biggest);
        // arr.splice(indexOfBiggest, 1);

        resultArr.push(arr[0]);
        arr.shift();
        resultArr.push(arr[arr.length - 1]);
        arr.pop();
    }

    return resultArr;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sorting([-1.2, -65.84, -3.78, 52.6, -48.3, 63.5]));