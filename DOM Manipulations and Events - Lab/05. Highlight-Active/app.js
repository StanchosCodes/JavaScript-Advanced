function focused() {
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', focusArea);
        input.addEventListener('blur', unfocusArea);
    }

    function focusArea(event) {
        event.target.parentElement.classList.add('focused');
    }

    function unfocusArea(event) {
        event.target.parentElement.classList.remove('focused');
    }
}