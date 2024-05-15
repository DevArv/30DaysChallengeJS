// Set

// Transform an Array to a Set

let numbers = [1, 2, 3, 4, 5, 5];
let setOfNumbers = new Set(numbers);
console.log(setOfNumbers); //> Set(5) { 1, 2, 3, 4, 5 }

// Methods

let set = new Set();

// Add
set.add(1);
set.add(2);
set.add(3);
console.log(set); //> Set(3) { 1, 2, 3 }

// Delete
set.delete(2);
console.log(set); //> Set(2) { 1, 3 }

// Has
set.has(2);
console.log(set.has(2)); //> false

// Size
set.size;
console.log(set.size); //> 2

// Clear
set.clear();
set.size;
console.log(set.size); //> 0