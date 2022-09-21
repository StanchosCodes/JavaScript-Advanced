function orbit(args) {
    let rowsCount = args[0];
    let colsCount = args[1];
    let startRow = args[2];
    let startCol = args[3];

    let matrix = [];

    for (let i = 0; i < rowsCount; i++) {

        matrix[i] = [];
    }

        for (let row = 0; row < rowsCount; row++) {
            for (let col = 0; col < colsCount; col++) {
                matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
            }
        }
    
        matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);