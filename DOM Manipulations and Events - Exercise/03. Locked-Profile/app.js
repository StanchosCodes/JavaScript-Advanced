function lockedProfile() {
    let showButtons = Array.from(document.querySelectorAll('button'));

    for (let button of showButtons) {
        button.addEventListener('click', show);
    }

    function show(event) {
        let button = event.target;
        let profileToShow = event.target.parentNode;

        let hiddenInfo = profileToShow.getElementsByTagName('div')[0];
        let lockingButtons = profileToShow.querySelector('input[type = radio]:checked').value;

        if (lockingButtons === 'unlock') {
            if (button.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                event.target.textContent = 'Hide it';
            }
            else {
                hiddenInfo.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}