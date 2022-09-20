function halfArr(arr) {
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);

    let halfArray = arr.slice(middle);

    return halfArray;
}

console.log(halfArr([4, 7, 2, 5]));
console.log(halfArr([3, 19, 14, 7, 2, 19, 6]));