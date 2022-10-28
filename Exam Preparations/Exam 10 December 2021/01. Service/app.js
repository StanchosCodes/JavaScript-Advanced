window.addEventListener("load", solve);

function solve() {
    let sendBtn = document.querySelectorAll('button[type="submit"]')[0];
    sendBtn.addEventListener('click', createElements);

    let productField = document.getElementById('type-product');
    let descriptionField = document.getElementById('description');
    let nameField = document.getElementById('client-name');
    let phoneField = document.getElementById('client-phone');
    let receivedOrders = document.getElementById('received-orders');
    let completeOrders = document.getElementById('completed-orders');
    let clearBtn = document.querySelector('button[class = "clear-btn"]');

    clearBtn.addEventListener('click', clearOrders);

    function createElements(event) {
        event.preventDefault();

        if (!descriptionField.value || !nameField.value || !phoneField.value) {
            return;
        }

        let productType = productField.value;
        let description = descriptionField.value;
        let name = nameField.value;
        let number = phoneField.value;

        descriptionField.value = '';
        nameField.value = '';
        phoneField.value = '';
        
        sendValues(productType, description, name, number);
    }

    function sendValues(productType, description, name, number) {

        let divElement = document.createElement('div')
        divElement.classList.add('container');

        let divContent = `<h2>Product type for repair: ${productType}</h2>\n` +
            `<h3>Client information: ${name}, ${number}</h3>\n` +
            `<h4>Description of the problem: ${description}</h4>\n`;

        let startBtn = document.createElement('button');
        let finishBtn = document.createElement('button');

        startBtn.classList.add('start-btn');
        finishBtn.classList.add('finish-btn');
        startBtn.textContent = 'Start repair';
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        startBtn.addEventListener('click', startRepair);
        finishBtn.addEventListener('click', finishRepair);

        divElement.innerHTML += divContent;
        divElement.appendChild(startBtn);
        divElement.appendChild(finishBtn);

        receivedOrders.appendChild(divElement);
    }

    function startRepair(event) {
        event.target.disabled = true;
        event.target.parentElement.getElementsByClassName('finish-btn')[0].disabled = false;
    }

    function finishRepair(event) {
        let divToMove = event.target.parentElement;
        divToMove.children[3].remove();
        divToMove.children[3].remove();
        completeOrders.appendChild(divToMove);
    }

    function clearOrders(event) {
        let divArray = Array.from(event.target.parentElement.querySelectorAll('div[class = "container"]'));
        divArray.forEach(div => div.remove());
    }
}