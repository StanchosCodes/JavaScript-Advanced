function validate() {
    let submitBtn = document.getElementById('submit');
    //submitBtn.type = 'button'; // the default type of the button in a form is submit, so making it
    // button prevents the button to reload/submit the page

    let usernameField = document.getElementById('username');
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm-password');
    let companyField = document.getElementById('company');
    let companyInfoField = document.getElementById('companyInfo');
    let companyNumberField = document.getElementById('companyNumber');
    let validDiv = document.getElementById('valid');

    companyField.addEventListener('change', includeCompanyInfo);
    submitBtn.addEventListener('click', submit);
    companyNumberField.addEventListener('change', validateCompanyNumber);

    function submit(event) {
        event.preventDefault();

        let username = usernameField.value;
        let email = emailField.value;
        let password = passwordField.value;
        let confirmPassword = confirmPasswordField.value;

        let isValidUsername = true;
        let isValidPassword = true;
        let isValidEmail = true;
        let isPasswordsMatch = true;
        let isValidCompanyNumber = true;
        let isFormsValid = true;

        if (username.length < 3 || username.length > 20) { // check the length of the username
            isValidUsername = false;
        }
        else {
            let result = isNumberOrLetter(username);
            if (result[1]) { // check if there is underline in the username
                isValidUsername = false;
            }
            else {
                isValidUsername = result[0]; // check if username is numbers and letters only
            }
        }

        if (!isValidUsername) {
            invalidBorderStyle(usernameField); // setting the border color to red
        }
        else {
            usernameField.style.borderColor = ''; // removing the setting of the border style
        }

        if (password.length < 5 || password.length > 15) { // check the length of the password
            isValidPassword = false;
        }
        else {
            isValidPassword = isNumberOrLetter(password); // check if username is numbers and letters only
        }

        if (!isValidPassword) {
            invalidBorderStyle(passwordField); // setting the border color to red
        }
        else {
            passwordField.style.borderColor = ''; // removing the setting of the border style
        }

        if (confirmPassword !== password || !isValidPassword) {
            invalidBorderStyle(passwordField);
            invalidBorderStyle(confirmPasswordField); // setting the border color to red
            isPasswordsMatch = false;
        }
        else {
            confirmPasswordField.style.borderColor = ''; // removing the setting of the border style
            passwordField.style.borderColor = ''; // removing the setting of the border style
        }

        let indexOfAt = email.indexOf('@') // checking if the email contains @
        if (indexOfAt !== -1) {
            let subStr = email.substring(indexOfAt);

            if(!subStr.includes('.')) { // checking if the email contains at least one '.'
                isValidEmail = false;
            }
        }
        else {
            isValidEmail = false;
        }

        if (!isValidEmail) {
            invalidBorderStyle(emailField); // setting the border color to red
        }
        else {
            emailField.style.borderColor = ''; // removing the setting of the border style
        }

        if (companyNumberField.style.borderColor === 'red') {
            isValidCompanyNumber = false;
        }
        else {
            isValidCompanyNumber = true;
        }

        if (companyField.checked) {
            if (isValidUsername && isValidPassword && isValidEmail && isPasswordsMatch && isValidCompanyNumber) {
                isFormsValid = true;
            }
            else {
                isFormsValid = false;
            }
        }
        else {
            if (isValidUsername && isValidPassword && isValidEmail && isPasswordsMatch) {
                isFormsValid = true;
            }
            else {
                isFormsValid = false;
            }
        }
        if (isFormsValid) {
            validDiv.style.display = 'block';
        }
        else {
            validDiv.style.display = 'none';
        }
    }

    function validateCompanyNumber() {
        let companyNumber = companyNumberField.value;

        if (Number(companyNumber) < 1000 || Number(companyNumber) > 9999) {
            invalidBorderStyle(companyNumberField);
        }
        else {
            companyNumberField.style.borderColor = '';
        }
    }

    function includeCompanyInfo() {
        let isCheckedCompany = companyField.checked;
        
        if (isCheckedCompany) {
            companyInfoField.style.display = 'block';
            invalidBorderStyle(companyNumberField);
        }
        else {
            companyNumberField.value = '';
            companyNumberField.style.borderColor = '';
            companyInfoField.style.display = 'none';
        }
    }

    function invalidBorderStyle(field) {
        field.style.borderColor = 'red';
    }

    function isNumberOrLetter(input) {
        let isValid = true;
        let isUnderline = false;

        for (let i = 0; i < input.length; i++) {
            if (typeof (Number(input[i])) !== 'number') {
                let numValue = input.charCodeAt(i);

                if (numValue === 95) {
                    isUnderline = true;
                    continue;
                }
                if (numValue >= 65 && numValue <= 90 || numValue >= 97 && numValue <= 122) {
                    continue;
                }

                isValid = false;
                break;
            }
        }

        return [isValid, isUnderline];
    }
}
