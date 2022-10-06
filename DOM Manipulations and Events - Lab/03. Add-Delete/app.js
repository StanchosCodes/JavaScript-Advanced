function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let newItemText = input.value;

    let listElement = document.createElement('li');
    listElement.textContent = newItemText;

    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';

    deleteButton.addEventListener('click', deleteRow);

    listElement.appendChild(deleteButton);
    list.appendChild(listElement);
    input.value = '';

    function deleteRow(event) {
        event.target.parentNode.remove();
    }
}