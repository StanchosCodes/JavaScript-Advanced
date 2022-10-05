function solve() {
    document.querySelector('#container button').addEventListener('click', convert)

    document.getElementById('selectMenuTo').innerHTML = "<option>Binary</option>";
    document.getElementById('selectMenuTo').innerHTML += "<option>Hexadecimal</option>";

    document.querySelectorAll("option")[1].value = 'binary';
    document.querySelectorAll("option")[2].value = 'hexadecimal';

    function convert() {
        let num = document.getElementById('input').value;
        num = Number(num);

        let typeToConvert = document.getElementById('selectMenuTo').value;
        let resultField = document.getElementById('result');

        if (typeToConvert === 'binary') {
            resultField.value = num.toString(2);
        }
        else if (typeToConvert === 'hexadecimal') {
            resultField.value = num.toString(16).toUpperCase();
        }
    }
}