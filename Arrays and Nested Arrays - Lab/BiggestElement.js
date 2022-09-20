function solve(arr) {
    let maxElement = Number.MIN_SAFE_INTEGER;

    for (let innerArray of arr) {
        for (let num of innerArray) {
            if (num > maxElement)
            {
                maxElement = num;
            }
        }
    }

    return maxElement;
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));
console.log(solve([[-3, -5, -6, -9], [-1, -3, -5, -6]]));