function calculator() {
    let field1;
    let field2;
    let resultField;

    return {
        init: (selector1, selector2, resultSelector) => {
            field1 = document.querySelector(selector1);
            field2 = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
        },
        add: () => {
            let num1 = Number(field1.value);
            let num2 = Number(field2.value);
            let sum = num1 + num2;
            resultField.value = sum;
        },
        subtract: () => {
            let num1 = Number(field1.value);
            let num2 = Number(field2.value);
            let diff = num1 - num2;
            resultField.value = diff;
        }
    }
}

const calculate = calculator();

calculate.init ('#num1', '#num2', '#result');