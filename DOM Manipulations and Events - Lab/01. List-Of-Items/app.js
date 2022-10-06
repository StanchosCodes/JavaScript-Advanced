function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let newItemText = input.value;

    let listElement = document.createElement('li');
    listElement.textContent = newItemText;

    list.appendChild(listElement);
    input.value = '';
}