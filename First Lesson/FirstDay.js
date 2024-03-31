/* eslint-disable no-use-before-define */
/* eslint-disable symbol-description */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Variables that can change over time
const pet = 'Cat'
const tail = true

// Constant variables cant change over time
const paw = 3

// Declaration
let car
let animal

// Initialization
age = 31
nationality = 'USA'

// Declaration and initialization
let age = 31

// Functions
function myFuntion (_paramether1, _paramether2) {
  // code for this funtion
}

// To call a function
myFuntion(1, 2)

// Use of return in function
function incentive (a, b) {
  return a * b
}

const payInventive = incentive(80000, 0.20)
console.log('The payment for this seller is: ' + payInventive);

// Function Declarations
// 1. Inmediately invoke function expression
(function () {
  console.log('Hello World')
})()

// 2. Function expression
const userName = function () {
  console.log('Administrator')
}

userName()

// 3. Arrow functions
const pet1 = () => console.log('Cat')

pet1()

// Brackets
const login = {
  user: 'Alexander',
  password: '<password>',
  tocken: 9021
}

console.log('User: ' + login.user + ' password: ' + login.password + ' tocken: ' + login.tocken)

// Data types
// Numbers
const employee = 23
const salary = 3650
const currency = 56.95
// Scientific notation
const methers = 1e4 // > 10000
const methersNegative = 1e-4 // > 0.0001

// String
const employeeRole = 'Developer'
const timeExperience = 1

console.log(`The role of this employee is ${employeeRole} and has ${timeExperience} year of experience`)

const brand = 'Iphone'

console.log(brand.length) // > 6
console.log(brand.toUpperCase()) // > IPHONE
console.log(brand.toLowerCase()) // > iphone
console.log(brand.substring(0, 3)) // > iph

// Objects
const warrior = {
  name: 'Garen',
  maxLevel: 18,
  mana: false
}

console.log(warrior.name) // > Garen
console.log(warrior.maxLevel) // > 18
console.log(warrior.mana) // > false

// Boolean
const gravity = true
const planetEarth = false

// Type of data
function leagueChampion (champion) {
  return typeof champion
}

console.log(leagueChampion('Shaco'), // > String
  leagueChampion(18), // > Number
  leagueChampion(false)) // > Boolean

// Null
const namaConsume = null

console.log(namaConsume) // > Null

// Undefined
let newChampion

console.log(newChampion) // > undefined

// Symbol
const roleLeague = Symbol()

const jungleChampion = {
  name: 'amumu',
  mana: true,
  [roleLeague]: 'jungle',
  maxLevel: 18
}

console.log(jungleChampion[roleLeague]) // > jungle

// BigInt
const distanceToDestination = 1696249n

console.log(distanceToDestination + 1n) // > 1696250n
console.log(distanceToDestination - 1n) // > 1696248n
console.log(distanceToDestination * 2n) // > 3392498n
console.log(distanceToDestination / 2n) // > 849124n
