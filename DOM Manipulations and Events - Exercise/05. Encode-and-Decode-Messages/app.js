function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');

    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    let textAreas = document.querySelectorAll('textarea');

    let inputArea = textAreas[0];
    let outputArea = textAreas[1];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode() {
        let message = inputArea.value;
        let encodedMessage = '';

        for (let ch of message) {
            let asciiValue = ch.charCodeAt();

            encodedMessage += String.fromCharCode(asciiValue + 1);
        }

        outputArea.textContent = encodedMessage;
        inputArea.value = '';
    }

    function decode() {
        let message = outputArea.value;
        let decodedMessage = '';

        for (let ch of message) {
            let asciiValue = ch.charCodeAt();

            decodedMessage += String.fromCharCode(asciiValue - 1);
        }

        outputArea.textContent = decodedMessage;
    }
}