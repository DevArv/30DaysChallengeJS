//Try - catch exampla 1
let message = "This is not a complete week.";

try {
    const weekDays = 6;

    if (weekDays < 7) {
        throw new Error(message);
    }
    console.log("This is a complete week.");
} catch (error) {
    console.log(error.message);
}; //> This is not a complete week.

//Try - catch exampla 2
let warning = "Water and electricity together are very dangerous.";

try {
    const electricity = true;
    const water = false;

    if (electricity && water) {
        throw new Error(warning);
    }
    console.log("Keep electricity and water as far as possible.");
} catch (error) {
    console.log(error.message);
}; //> Keep Electricity and water as far as possible.

//Debugger example
let fahrenheit = 90;
debugger;
let ftoCelsius = (fahrenheit - 32) * 0.5556;
console.log(ftoCelsius);

//Functional programming example 1
const convertToCelcius = 32;
const fahrenheitConvert = 0.556;

function fahrenheitToCelcius(a, convertToCelcius, fahrenheitConvert) {
    return (a - convertToCelcius) * fahrenheitConvert;
};

const operation = fahrenheitToCelcius;
let a = 100;

function makeOperation(operation, a, convertToCelcius, fahrenheitConvert) {
    return operation(a, convertToCelcius, fahrenheitConvert);
};

console.log(makeOperation(operation, a, convertToCelcius, fahrenheitConvert)); //> 37.80800000000001

//Functional programming example 2
const ages = [31, 21, 26];
const doubleAges = ages.map(function(age) {
    return age * 2;
})
console.log(doubleAges); //> [62, 42, 52]