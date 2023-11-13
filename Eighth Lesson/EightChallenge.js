// En este desafío tendrás que crear una calculadora mediante el uso de closures.

// La calculadora debe contar con los siguientes métodos:

// add: recibe un número, lo suma al total y devuelve el resultado
// subtract: recibe un número, lo resta al total y devuelve el resultado
// multiply: recibe un número, lo multiplica al total y devuelve el resultado
// divide: recibe un número, lo divide al total y devuelve el resultado
// clear: reinicia el total a 0 y devuelve el resultado
// getTotal: devuelve el total actual.
// Ejemplo 1:

// Input:
// const calculator = createCalculator()
// calculator.add(10)

// Output: 10

// Ejemplo 2:

// const calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)

// Output: 20

// Ejemplo 3:

// const calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)
// calculator.clear()

// Output: 0

function createCalculator() {
    let total = 0;

    const calculator = {
        add: function(number) {
            total += number;
            return total;
        },
        subtract: function(number) {
            total -= number;
            return total;
        },
        clear: function() {
            total = 0;
            return total;
        },
        getTotal: function() {
            return total;
        },
        multiply: function(number) {
            total *= number;
            return total;
        },
        divide: function(number) {
            total /= number;
            return total;
        }
    }

    return calculator;
}

const calculator = createCalculator();

console.log(calculator.add(5));
console.log(calculator.subtract(3));
console.log(calculator.getTotal());
console.log(calculator.clear());
console.log(calculator.add(10));
console.log(calculator.multiply(2));
console.log(calculator.divide(3));

// En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

// Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) 
// y la función se utilizará para aplicar una acción sobre cada elemento del array. 
// Tu objetivo es devolver un nuevo array con los resultados de la función tal y como lo haría el método map.

// Ejemplo 1:

// Input: myMap([1,2,3,4], (num) => num * 2)

// Output: [2,4,6,8]

// Ejemplo 2:

// Input: myMap([
//   {name: "michi", age: 2},
//   {name: "firulais", age: 6}],
//   (pet) => pet.name)

// Output: ["michi", "firulais"]

function myMap(array, func) {
    var myArray = [];

    for (var i = 0; i < array.length; i++) {
        myArray.push(func(array[i]));
    }

    return myArray;
}

var petArray = [
    {name: "michi", age: 2},
    {name: "firulais", age: 6}
];

const petNames = myMap(petArray, (pet) => pet.name);
console.log(petNames);