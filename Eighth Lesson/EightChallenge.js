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