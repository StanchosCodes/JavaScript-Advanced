function extractText() {
    let elements = document.querySelectorAll('ul li');
    let extracted = '';

    for (let element of elements) {
        extracted += element.textContent + '\n';
    }

    let textArea = document.getElementById('result');

    textArea.textContent = extracted.trimEnd();
}