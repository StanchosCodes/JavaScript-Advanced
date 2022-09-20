function solve(arr) {
    let mainDiagonalSum = 0;
    let secondaryDiagnalSum = 0;
    let mainStartIndex = 0;
    let secondaryStartIndex = arr[0].length - 1;

    for (let array of arr) {
        mainDiagonalSum += array[mainStartIndex];
        mainStartIndex++;

        secondaryDiagnalSum += array[secondaryStartIndex];
        secondaryStartIndex--;
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagnalSum);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);