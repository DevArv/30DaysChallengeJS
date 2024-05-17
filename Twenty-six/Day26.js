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

// Maps

let map = new Map();

// Add key-value pairs to Map
map.set("USA", "english");
map.set("Dominican Republic", "spanish");
map.set("Italy", "Italian");
console.log(map); //> Map(3) { 'USA' => 'english', 'Dominican Republic' => 'spanish', 'Italy' => 'Italian' }

// Get the value of a key
map.get("USA");
console.log(map.get("USA")); //> english

// Check if a key exists
map.get("Canada");
console.log(map.has("Canada")); //> false

// Delete a key-value pair
map.delete("Dominican Republic");
console.log(map); //> Map(2) { 'USA' => 'english', 'Italy' => 'Italian' }

// Check if the key exists after being deleted
console.log(map.has("Dominican Republic")); //> false

// Clear the Map
map.clear();
console.log(map); //> Map(0) { }

// Get the size of the Map
console.log(map.size); //> 0