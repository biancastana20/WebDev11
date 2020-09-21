// get elements from document
const formElem = document.getElementById('form');
const firstNameElem = document.getElementById('first-name');
const lastNameElem = document.getElementById('last-name');
const emailElem = document.getElementById('email');
const messageElem = document.getElementById('message');

// check elements
// console.log(formElem, firstNameElem, lastNameElem, emailElem, messageElem);

class UI {
    constructor() {
        this.allElementsAreValid = true; // pt a avea toate inputurile rosu daca nu sunt completate
    }
    showError(elem, message) {
        elem.parentElement.classList.add('error');
        const smallElem = elem.parentElement.querySelector('small');
        smallElem.innerHTML = message;
    }

    showSuccess(elem) {
        elem.parentElement.classList.remove('error');
        elem.parentElement.classList.add('success');
    }

    showSubmitSuccessMessage() {
        if (this.allElementsAreValid) {
            let successMessage = document.createElement('p');
            successMessage.className = "success";
            successMessage.innerHTML = "Thank you for contacting us " + firstNameElem.value + " " + lastNameElem.value + "!";
            let firstInput = document.getElementById('first-input');
            formElem.insertBefore(successMessage, firstInput);

            setTimeout(() => { // sa dispara bannerul "Thnak you..." dupa 2 sec
                    successMessage.remove();
                },
                2000);
        }
    }

    clearFields() {
        formElem.reset(); //reset class success for all input elements
        firstNameElem.parentElement.classList.remove('success');
        lastNameElem.parentElement.classList.remove('success');
        emailElem.parentElement.classList.remove('success');
        messageElem.parentElement.classList.remove('success');
    }
}

formElem.addEventListener('submit', (e) => {
    e.preventDefault(); // eliminam comportamentul default al butonului de tip submit (afiseaza 1,2 sec)

    let ui = new UI();

    if (firstNameElem.value === '') {
        ui.showError(firstNameElem, "First Name required");
        ui.allElementsAreValid = false;
    } else {
        ui.showSuccess(firstNameElem);
    }
    if (lastNameElem.value === '') {
        ui.showError(lastNameElem, "Last Name required");
        ui.allElementsAreValid = false;
    } else {
        ui.showSuccess(lastNameElem);
    }
    if (emailElem.value === '') {
        ui.showError(emailElem, "Email required");
        ui.allElementsAreValid = false;
    } else {
        ui.showSuccess(emailElem);
    }
    if (messageElem.value === '') {
        ui.showError(messageElem, "Message required");
        ui.allElementsAreValid = false;
    } else {
        ui.showSuccess(messageElem);
    }
    ui.showSubmitSuccessMessage();
    ui.clearFields();
});