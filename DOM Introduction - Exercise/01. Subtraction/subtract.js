function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);

    let resultDiv = document.getElementById('result');

    resultDiv.textContent = firstNum - secondNum;
}