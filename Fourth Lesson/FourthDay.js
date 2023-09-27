//Arrays
const elements = ["water", "electric", "fire", "normal", "dark"];
elements.push("grass"); //> Add a new element to the list...
console.log(elements);

const elements1 = ["water", "electric", "fire", "normal", "dark"];
elements1.pop(); //> Remove the last element from the list...
console.log(elements1);

const age = [26, 28, 31];
const doubleAge = age.map(function(age) {
    return age * 2;
}, 0);
console.log(doubleAge); //> [ 52, 56, 62 ]

const price = [0.9, 5];
const localPrice = price.reduce(function(tax, price) {
    return tax + price;
}, 0);
console.log(localPrice); //> 5.9