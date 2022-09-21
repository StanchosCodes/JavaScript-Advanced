function rotate(arr, rotations) {
    let currValue;
    for (let i = 1; i <= rotations; i++) {
        currValue = arr[arr.length - 1];

        arr.pop();
        arr.unshift(currValue);
    }

    console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4'], 2);
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);