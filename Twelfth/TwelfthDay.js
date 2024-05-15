/* eslint-disable no-array-constructor */
// Creations of Arrays using the class constructor Array

const developers = new Array('Nikolay', 'Alex', 'Sergey', 'Dmitry')
console.log(developers)
// output: [ 'Nikolay', 'Alex', 'Sergey', 'Dmitry' ]

// Array.from()
const separatedLetters = Array.from('developers')
console.log(separatedLetters)
// output: [ 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's' ]

// Array.fill()
const stars = Array(5).fill('*')
console.log(stars)
// output: [ '*', '*', '*', '*', '*' ]

// Array.isArray()
console.log(Array.isArray(separatedLetters))
// output: true

// Create a new instance of Array
const daysLeft = [15, 30, 45]
const rigthDayLeft = [...daysLeft]
console.log(rigthDayLeft)
// output: [ 15, 30, 45 ]
console.log(rigthDayLeft === daysLeft)
// output: false

// Use of methods incorporated with Arrays
const copiedDaysLeft = daysLeft.slice(0, 1)
console.log(copiedDaysLeft)
// output: [15]
console.log(copiedDaysLeft === daysLeft)
// output: false

// Method concat
const tenPlusNumber = [10, 20, 30]
const secondTenPlusNumber = [40, 50, 60]
const allPlusNumber = tenPlusNumber.concat(...secondTenPlusNumber)
console.log(allPlusNumber)
// output: [ 10, 20, 30, 40, 50, 60 ]

// Spread Operator
const spreadOperatorArrays = [...developers, ...daysLeft]
console.log(spreadOperatorArrays)
// output: [ 'Nikolay', 'Alex', 'Sergey', 'Dmitry', 15, 30, 45 ]

// Bidimensional Arrays
const matrix = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18]
]

console.log(matrix[2][2])
console.log(matrix[0][1])
console.log(matrix[1][0])
// output: 18
// output: 4
// output: 8

// Bidimensional Arrays using constructor class
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(3)
}

matrix[0][0] = 1
matrix[0][1] = 2
matrix[0][2] = 3
matrix[1][0] = 4
matrix[1][1] = 5
matrix[1][2] = 6
matrix[2][0] = 7
matrix[2][1] = 8
matrix[2][2] = 9

console.log(matrix)
// output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Bidimensional Arrays using spread operator
const matrix2 = [[1, 2, 3], [4, 5, 6]]
const copiedMatrix2 = [...matrix2]

console.log(copiedMatrix2)
// output: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// Tridimensional Arrays
const triangle = []
for (let i = 0; i < 3; i++) {
  triangle[i] = []
  for (let j = 0; j < 3; j++) {
    triangle[i][j] = []
    for (let k = 0; k < 3; k++) {
      triangle[i][j][k] = i + j + k
    }
  }
}

console.log(triangle)
// output: [ [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ], [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ], [ [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5, 6 ] ] ]

// Methods of Arrays: Every, find and findIndex

// every()
const AGE_STUDENTS = [10, 15, 12, 20]
const IS_AGE_EQUAL_TO = AGE_STUDENTS.every(function (age) {
  return age === 10
})

console.log(IS_AGE_EQUAL_TO)
// output: false

// every with function arrow
const IS_AGE_EQUAL_TO_ARROW = AGE_STUDENTS.every(age => age === 10)
console.log(IS_AGE_EQUAL_TO_ARROW)
// output: false

// every with objects
const FIND_AGE = [{ age: 10 }, { age: 15 }, { age: 12 }, { name: 'Niko' }]
const ALL_HAVE_AGE = FIND_AGE.every(function (result) {
  return Object.prototype.hasOwnProperty.call(result, 'age')
})

console.log(ALL_HAVE_AGE)
// output: false

// find()
const NUMBERS = [10, 20, 30, 40]
const IS_THIS_NUMBER = NUMBERS.find(number => number === 50)
console.log(IS_THIS_NUMBER)
// output: undefined

// find() in objects
const AGE_DOGS = [
  { name: 'Tobie', age: 4 },
  { name: 'Tito', age: 3 },
  { name: 'Katy', age: 5 }
]

const RESULT = AGE_DOGS.find(dog => dog.age < 4)
console.log(RESULT)
// output: { name: 'Tito', age: 3 }

// findIndex()
const IS_THIS_AGE = AGE_DOGS.findIndex(dog => dog.age < 5)
console.log(IS_THIS_AGE)
// output: 0
