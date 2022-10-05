function generateReport() {
    let tableRow = document.querySelectorAll('tbody tr');
    let tableHeader = document.querySelectorAll('thead tr th');

    let result = [];

    for (let i = 0; i < tableRow.length; i++) {
        let tableData = tableRow[i].cells;
        let currData = {};

        for (let j = 0; j < tableData.length; j++) {
            let infoTHeader = tableHeader[j].childNodes;

            if (infoTHeader[1].checked) {
                currData[infoTHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[j].textContent;
            }
        }

        result.push(currData)
    }

    let jsonResult = JSON.stringify(result);
    document.getElementById('output').textContent = jsonResult;
    debugger
}