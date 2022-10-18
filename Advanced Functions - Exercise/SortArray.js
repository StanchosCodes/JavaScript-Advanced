function sort(arr, sortMethod) {
    return sortMethod === "desc" ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));