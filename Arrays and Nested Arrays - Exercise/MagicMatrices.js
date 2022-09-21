function sum(matrix) {
    for (let row = 0; row < matrix.length - 1; row++) {
        let currRowSum = matrix[row].reduce((acumulator, element) => acumulator + element);
        let nextRowSum = matrix[row + 1].reduce((acumulator, element) => acumulator + element);

        let currColSum = 0;
        let nextColSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            currColSum += matrix[row][col];
            nextColSum += matrix[row + 1][col];
        }

        if (currRowSum !== nextRowSum || currColSum !== nextColSum) {
            return false;
        }
    }

    return true;
}

console.log(sum([[4, 5, 6],
                 [6, 5, 4],
                 [5, 5, 5]]));

console.log(sum([[11, 32, 45], 
             [21, 0, 1], 
             [21, 1, 1]]));