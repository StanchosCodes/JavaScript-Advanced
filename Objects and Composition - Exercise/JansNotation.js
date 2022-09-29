function calc(arr) {
    let result = [];
    let operands = [];
    let operators = [];

    let operatorsEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    for (let element of arr) {
        if (typeof(element) === "number") {
            operands.push(element);
        }
        else {
            operators.push(element);
        }
    }

    if (operators.length < operands.length - 1) {
        console.log("Error: too many operands!");
        return;
    }
    else if (operators.length >= operands.length) {
        console.log("Error: not enough operands!");
        return;
    }

    for (let element of arr) {
        if (typeof(element) === "number") {
            result.push(element);
            continue;
        }

        let firstNum = result.pop();
        let secondNum = result.pop();
        let operationResult = operatorsEnum[element](secondNum, firstNum);
        result.push(operationResult);
    }

    console.log(result.join());
}

calc([3, 4, '+']);
calc([5, 3, 4, '*', '-']);