// Prototype js
// Exercise # 1

function Phone() {
    this.isCharging = true;
}

function Iphone() {
    Phone.call(this);
}

Iphone.prototype = Object.create(Phone.prototype);


// const IPHONE = new Iphone();
// console.log(IPHONE.isCharging);


// Iphone.prototype.isCharged = function () { console.log ("Phone is charged"); }
// const IPHONE = new Iphone();
// IPHONE.isCharged();

Array.prototype.sum = function() { return this.reduce((a, b) => a + b);}
const NUMBERS = [1, 2, 3, 4, 5];
console.log(NUMBERS.sum());

String.prototype.capitalLetter = function() { return this.toUpperCase(); }
const ANIMAL = 'dog';
console.log(ANIMAL.capitalLetter());

// Exercise # 2

// Define a constructor function named Wifi that sets a property isActivated to true.
function Wifi() {
    this.isActivated = true;
}

// Define another constructor function named Laptop that inherits properties from Wifi.
function Laptop() {
    // Call the Wifi constructor with the 'this' context to set the isActivated property.
    Wifi.call(this);
}

// Set the prototype chain of Laptop to inherit from Wifi.
Laptop.prototype = Object.create(Wifi.prototype);

// Create an instance of Laptop.
const LAPTOP = new Laptop();

// Print the value of the isActivated property in the instance of Laptop.
console.log(LAPTOP.isActivated);

// Defines a constructor function 'Game' with a property 'isPrivate' set to true.
function Game() {
    this.isPrivate = true;
}

// Defines a constructor function 'Palworld' that inherits from 'Game'.
function Palworld() {
    // Calls the 'Game' constructor within the context of 'Palworld'.
    Game.call(this);
}

// Sets the prototype of 'Palworld' to a new object created from the prototype of 'Game'.
Palworld.prototype = Object.create(Game.prototype);

// Adds a method 'isLocked' to the prototype of 'Palworld'.
Palworld.prototype.isLocked = function() { console.log("This server of Palworld is Locked"); }

// Creates an instance of 'Palworld' and calls the 'isLocked' method.
const PALWORLD = new Palworld();
PALWORLD.isLocked();

// Extends the prototype of 'Array' with a method 'multiply' that multiplies all elements.
Array.prototype.multiply = function() { return this.reduce((a, b) => a * b); }

// Creates an array 'FOR_MULTIPLY' and calls the 'multiply' method on it, logging the result.
const FOR_MULTIPLY = [1, 2, 3, 4, 5];
console.log(FOR_MULTIPLY.multiply());

// Extends the prototype of 'String' with a method 'lowercase' that converts the string to lowercase.
String.prototype.lowercase = function() { return this.toLowerCase(); }

// Creates a string 'ANIMALS' and calls the 'lowercase' method on it, logging the result.
const GAME_NAME = "PALWORLD";
console.log(GAME_NAME.lowercase());