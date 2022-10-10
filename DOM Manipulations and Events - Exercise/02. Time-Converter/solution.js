function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type = button]');

    for (let button of buttons) {
        button.addEventListener('click', normalise);
    }

    function normalise(event) {
        let value = Number(event.target.parentElement.querySelector('input[type = text]').value);
        let unit = event.target.id;
        
        switch (unit) { // converting all units in days
            case 'daysBtn':
                convert(value);
                break;
            case 'hoursBtn':
                convert(value / 24);
                break;
            case 'minutesBtn':
                convert(value / 60 / 24);
                break;
            case 'secondsBtn':
                convert(value / 60 / 60 / 24);
                break;
        }
    }

    function convert(value) {
        let inputAreas = Array.from(document.querySelectorAll('input[type = text]'));
        inputAreas.shift().value = value; // the days

        let currValue = value * 24; // convering the days in hours

        for (let inputArea of inputAreas) {
            inputArea.value = currValue; // setting the hours value with the already converted value
            currValue *= 60; // converting the minutes value in 1st iteration and the seconds in 2nd
        }
    }
}