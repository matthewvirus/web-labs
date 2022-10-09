let getJSONButton = document.getElementById('get-json');
let JSONTextField = document.getElementById('json-field');
let convertJSONButton = document.getElementById('convert-json');
let objectTextField = document.getElementById('object-field');

let string = '';

let jsonString = '{"username": "Matthew", "passwordHash": "ahasf34u78joi", "age":20}';
function returnCustomObject() {
    let finalString = '';
    JSON.parse(jsonString, function(key, value) {
        finalString += key + ": " + value + "\n";
    });
    return finalString;
}

class Parking {
    constructor(address, capacity, phone, price) {
        this.address = address;
        this.capacity = capacity;
        this.phone = phone;
        this.price = price;
    }
};

let address = prompt("Parking address:");
let capacity = Number(prompt("Parking capacity:"));
let phone = prompt("Parking owner phone:");
let price = Number(prompt("Parking price for an hour:"));

const parking = new Parking(address, capacity, phone, price);

getJSONButton.addEventListener("click", () => {
    string = JSON.stringify(parking);
    JSONTextField.innerHTML = string;
});

convertJSONButton.addEventListener("click", () => {
    var obj = JSON.parse(string, function(key, value) {
        return typeof(value) === "string" ? alert(key + ": " + value) : undefined;
    });
});

console.log(returnCustomObject());