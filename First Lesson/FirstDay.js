//Variables that can change over time
var pet = "Cat";
var tail = true;

//Constant variables cant change over time
var paw = 3;

//Declaration
var car;
var animal;

//Initialization
age = 31;
nationality = "USA";

//Declaration and initialization
let age = 31;

//Functions
function myFuntion(paramether1, paramether2) {
    //code for this funtion
}

//To call a function
myFuntion(1, 2);

//Use of return in function
function incentive(a, b) {
    return a * b;
}

let payInventive = incentive(80000, 0.20);
console.log("The payment for this seller is: " + payInventive);

//Function Declarations
//1. Inmediately invoke function expression
(function () {
    console.log("Hello World");
}) ();

//2. Function expression
let userName = function () { 
    console.log("Administrator");
}

userName();

//3. Arrow functions
let pet = () => console.log("Cat");

pet();

//Brackets
const login = {
    user: "Alexander",
    password: "<password>",
    tocken: 9021
}

console.log("User: " + login.user + " password: " + login.password + " tocken: " + login.tocken);

//Data types
//Numbers //TODO