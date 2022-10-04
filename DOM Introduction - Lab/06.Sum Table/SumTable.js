function sumTable() {
    let tableRows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < tableRows.length - 1; i++) { // skipping the first row by starting from 1, and
                                              // skipping the last row by ending to length - 1
        let columns = tableRows[i].children;  // taking the elements in the first array in the tableRows
                                              // array of arrays

        sum += Number(columns[1].textContent); // taking the second element of the array because its the
                                               // number value that we need
    }
    console.log(sum);

    let sumArea = document.getElementById('sum');

    sumArea.innerText = sum; // works with .textContent too
}