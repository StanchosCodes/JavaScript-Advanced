function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');

    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');

    for (let cell of tableCells) {
        if (cell.textContent === input) {
            cell.parentElement.remove();
            result.textContent = 'Deleted.'
        }
        else {
            result.textContent = 'Not found.'
        }
    }
}