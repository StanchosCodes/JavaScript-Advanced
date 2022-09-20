function solve(ingredients, startIndex, endIndex) {
    let start = ingredients.indexOf(startIndex);
    let end = ingredients.indexOf(endIndex);

    let newArray = ingredients.slice(start, end + 1);
    return newArray;
}

console.log(solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'));