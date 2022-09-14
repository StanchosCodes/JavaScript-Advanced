function calc(input1, input2, input3)
{
    let input1Length = input1.length;
    let input2Length = input2.length;
    let input3Length = input3.length;

    let totalLength = input1Length + input2Length + input3Length;
    let averageLength = totalLength / 3;

    console.log(totalLength);
    console.log(Math.floor(averageLength));
}

calc('chocolate', 'ice cream', 'cake');
calc('pasta', '5', '22.3');