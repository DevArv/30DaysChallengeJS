// Closures example 1

function secondsCounter () {
  let count = 0
  return function increment () {
    count++
    return count
  }
}

const counter = secondsCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

// Closures example 2
function multiplyBy (multiplier) {
  return function (number) {
    return number * multiplier
  }
}

const double = multiplyBy(2)
console.log(double(5))
console.log(double(10))

const triple = multiplyBy(3)
console.log(triple(5))
console.log(triple(10))

// Higher order functions
// Example 1
const actualLevelTeam = [8, 12, 7, 10, 14]
const expectedLevelTeam = actualLevelTeam.map(function (level) {
  return level * 2
})

console.log(expectedLevelTeam)
console.log(actualLevelTeam) // Array is not modified

// Example 2
const championLevel = [8, 12, 7, 10, 14]
const halfLevel = championLevel.filter(function (experience) {
  return experience % 2 === 0
})

console.log(halfLevel) // > [8, 12, 10, 14]

// Challenge (2) example.
// Definition of the mainMap function that takes an array and a function as arguments
function mainMap (array, func) {
  // Create a new empty array to store the results
  const mainArray = []

  // Iterate through each element of the input array
  for (let i = 0; i < array.length; i++) {
    // Apply the provided function to each element and add the result to the new array
    mainArray.push(func(array[i]))
  }

  // Return the new array with the results
  return mainArray
}

// Define an array of objects representing players with properties 'name' and 'point'.
const playerArray = [
  { name: 'Alex', point: 90 },
  { name: 'Maria', point: 93 },
  { name: 'Pedro', point: 87 }
]

// Use the mainMap function to obtain a new array of player names.
const playerNames = mainMap(playerArray, (players) => players.name)

// Use the mainMap function to obtain a new array with the players points.
const playerPoints = mainMap(playerArray, (players) => players.point)

// Print the new array with the players names
console.log(playerNames) // > ["Alex", "Maria", "Pedro"]

// Print the new array with the players points
console.log(playerPoints) // > [90, 93, 87]
