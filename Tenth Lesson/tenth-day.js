//ES6
//Class syntax

class cellphone {
    constructor(brand, model, actualPrice) {
        this.brand = brand;
        this.model = model;
        this.actualPrice = actualPrice;
    }
}

const iPhone = new cellphone("Apple", "iPhone 8", 165);
console.log(iPhone); //> { brand: 'Apple', model: 'iPhone 8', actualPrice: 165 }

//Template literals

const pet = "Dog";
let age = 3;
const message = `My pet is a ${pet} and he is ${age} years old.`;
console.log(message); //> My pet is a Dog and he is 3 years old.

//Arrow functions

let personSize = [168, 180, 156]
const half = personSize.map(size => size / 2);
console.log(half); //> [ 84, 90, 78 ]

//Spread Operator

const person = ["Joan", "Nathaly"];
const personAdd = [...person, "Ana"];
console.log(personAdd); //> [ 'Joan', 'Nathaly', 'Ana' ]

//Destructuring

const championInfo = { champion: "Lux", level: 12};
const {champion, level} = championInfo;
console.log(champion); //> Lux
console.log(level); //> 12

//New methods for arrays

const championArray = ["Lux", "Garen", " Sylas", "Annie"];
const championFound = championArray.find(champion => champion === "Annie");
console.log(championFound); //> Annie

//Promises in JavaScript

let myPromise = new Promise((resolve, reject) => {
    let promiseSuccess = false;

    setTimeout(() => {
    if(promiseSuccess) {
        resolve("Success");
    } else {
        reject("Failed");
    }
}, 3000 );
});

myPromise
.then((result) => {
    console.log("The operation: " + result);
})
.catch((error) => {
    console.log("The operation: " + error);
});

//Try-catch

function halfNumber (number) {
    try {
        const result = number / 2;
        console.log("The half of this number is: " + result);
    } catch (error) {
        console.error("Imposible to divide this number " + error.message);
    } finally {
        console.log("The divide operation is finished");
    }
}

halfNumber(10);
halfNumber(5);
halfNumber(23);

//Exponientiation operator (**)

function myExponentiation(firstNumber, secondNunber) {
        this.firstNumber = firstNumber;
        this.secondNunber = secondNunber;
    
    return firstNumber ** secondNunber;
}

console.log(myExponentiation(2, 3)); //> 8
console.log(myExponentiation(3, 4)); //> 81
console.log(myExponentiation(4, 5)); //> 1024

//Trailing commas

const weather = ["Sunny", "Cloudy", "Rainy",];
console.log(weather); //> [ 'Sunny', 'Cloudy', 'Rainy'

const ocupation = {role: "Developer", yearExperience: 1,};
console.log(ocupation); //> { role: 'Developer', yearExperience: 1 }

//string.prototype.padStart() y string.prototype.padEnd()

const headphone = "Earbuds";
const starHeadphones = headphone.padStart(10, "*");
const endHeadPhones = headphone.padEnd(10, "*");
console.log(starHeadphones); //> ***Earbuds
console.log(endHeadPhones); //> Earbuds***