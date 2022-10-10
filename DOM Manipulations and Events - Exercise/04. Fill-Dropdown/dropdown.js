function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');
    
    let optionElement = document.createElement('option');

    optionElement.textContent = text;
    optionElement.value = value;
    menu.appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}