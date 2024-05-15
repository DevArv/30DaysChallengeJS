/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
// Arithmetic operators
console.log(31 + 9) // > (Sum) 40
console.log(31 - 9) // > (Difference) 22
console.log(31 * 9) // > (Product) 279
console.log(31 / 9) // > (Quotient) 3.9166666666666665
console.log(31 % 9) // > (Remainder) 3

// Assgination operators
let x = 7
x += 3
console.log(x) // > 10

x -= 3
console.log(x) // > 7

x *= 3
console.log(x) // > 21

x /= 3
console.log(x) // > 5.666666666666666

x %= 3
console.log(x) // > 2

// Comparison operators
console.log(31 > 26) // > true
console.log(31 < 26) // > false
console.log(31 >= 26) // > true
console.log(31 <= 26) // > false
console.log(31 === 26) // > false
console.log(31 !== 26) // > true

console.log(31 == '31') // > true
console.log(31 === '31') // > a number its not the sane that a string. So this line of code is false.

// Logic operators
// && AND
const actualLevel = 4
const ultimateLevel = true

if (actualLevel >= 6 && ultimateLevel) {
  console.log('This champion can cast his ultimate.')
} else {
  console.log('This champion has to wait at least to level 6 to cast his ultimate.')
}

// || OR
const level = 5
const ultimate = true

if (level >= 6 || ultimate) {
  console.log('This champion can cast his ultimate.')
} else {
  console.log('This champion has to wait at least to level 6 to cast his ultimate.')
}

const needMana = true

if (!needMana) {
  console.log('This champion dont need mana to cast skills')
} else {
  console.log('This champion needs mana to cast skills.')
}

// Hoisting
console.log(y)
y = 5 // >Undefined

// Coercion
console.log(true == 1) // >true
