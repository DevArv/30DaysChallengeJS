// Modify the array prototype
// Challenge # 1

/* En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.

Esto implica agregar un nuevo método llamado myFilter al prototype de los arrays, 
el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. 
El objetivo es poder usar el método myFilter de la siguiente manera:

Ejemplo 1:


Input:

const array = [1,2,3,4,5,6]

array.myFilter(num => num % 2 === 0)

Output: [2,4,6]

Ejemplo 2:


Input:

const arr = [
  {
    name: "Juan",
    age: 10,
  },
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
];

array.myFilter((person) => person.age > 18)

Output: [
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
] */

// Define a function called arrayModified
function arrayModified() {
  // Extend the Array prototype by adding a custom myFilter method
  Array.prototype.myFilter = function(callback) {
    // Create an empty array to store filtered elements
    const NEW_ARRAY = [];
    // Iterate through each element of the array
    for (let i = 0; i < this.length; i++) {
      // Check if the callback function returns true for the current element
      if (callback(this[i], i, this)) {
        // If the callback returns true, push the current element to the new array
        NEW_ARRAY.push(this[i]);
      }
    }
    // Return the new array containing filtered elements
    return NEW_ARRAY;
  }
}

/* This code defines a custom myFilter method for JavaScript arrays, 
which filters elements based on a provided callback function. 
When the myFilter method is called on an array, it iterates through each element 
and pushes the elements for which the callback function returns true into a new array, 
which is then returned. */
