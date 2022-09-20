function smallestTwo(arr) {
    arr.sort(function(a, b){return a - b});

    let result = '';

    result += arr[0] + ' ';
    result += arr[1];

    console.log(result);
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);