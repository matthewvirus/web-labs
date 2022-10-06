let form = document.forms[0];

let passButton = document.getElementById('btn-pass');
let passField = document.getElementById('fld-pass');
let resetButton = document.getElementById('btn-reset');
let textArea = document.getElementById('txt-area');
let submitButton = document.getElementById('btn-submit');
let buttonButton = document.getElementById('btn-btn');

let checkboxes = document.querySelectorAll('input[name="check"]');
let radios = document.querySelectorAll('input[name="gender"]');

let select = form.elements.country;

let flag = false;

let ev = "dblclick";

passButton.addEventListener("click", onPassButtonClick);
resetButton.addEventListener("click", onResetButtonClick);
submitButton.addEventListener("dblclick", onSubmitButtonClick);
buttonButton.addEventListener("click", () => {
    submitButton.removeEventListener("dblclick", onSubmitButtonClick);
    submitButton.addEventListener("click", onSubmitButtonClick);
});

function onPassButtonClick() {
    if (passField.value === "" || passField.value != "Text field") {
        passField.value = "Text field"
        passField.style.color = "black";
    } else {
        if (flag) {
            passField.style.color = "red";
        } else {
            passField.style.color = "blue";
        }
        flag = !flag;
    }
}

function onResetButtonClick() {
    let stringFromArea = textArea.value;
    let compareText = prompt("Please enter text", "");
    if (compareText === stringFromArea) {
        alert("True");
    } else {
        alert("False");
    }
}

function getSelectedOption() {
    let value = "";
    for (let i = 0; i < select.options.length; i++) {
        let option = select.options[i];
        if (option.selected) {
            value = option.value;
        }
    }
    return checkIfEmpty(value, "Please, select your country!\n");
}

function getCheckboxes() {
    let value = "";
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            value += checkbox.value + "\n";
        }
    });
    return checkIfEmpty(value, "Please, choose additional settings!\n");
}

function getRadio() {
    let value = "";
    radios.forEach((radio) => {
        if (radio.checked) {
            value = radio.value;
        }
    });
    return checkIfEmpty(value, "Please, select your gender!\n");
}

function checkIfEmpty(value, message) {
    if (value.length === 0) {
        return message;
    }
    return value;
}

function onSubmitButtonClick() {
    alert("Country:\n" + getSelectedOption() + "\n\nPreferences:\n" + getCheckboxes() + "\nGender:\n" + getRadio());
}