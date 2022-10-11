function solution() {
    let resultStr = '';

    return {
        append: (string) => resultStr += string,
        removeStart: (count) => resultStr = resultStr.substring(count),
        removeEnd: (count) => resultStr = resultStr.substring(0, resultStr.length - count),
        print: () => console.log(resultStr)
    };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();