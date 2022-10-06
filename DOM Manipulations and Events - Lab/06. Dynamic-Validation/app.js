function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', check);

    function check(event) {
        let email = event.target.value;

        let emailSplitA = email.split('@');
        let emailSplitDot = email.split('.');

        if (emailSplitA.length !== 2 || emailSplitDot.length !== 2) {
            event.target.classList.add('error');
        }
        else { 
            event.target.classList.remove('error');
        }
    }
}