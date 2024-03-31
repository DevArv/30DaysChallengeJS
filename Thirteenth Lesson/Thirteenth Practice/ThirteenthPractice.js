// Practice #1
function getProductsDetails (types, section) {
  const productType = types
    .filter(type => type.section === section)
    .map(type => type.name)
    .join(', ')

  const totalPrice = types
    .filter(type => type.section === section)
    .reduce((total, type) => total + type.price, 0)

  return {
    types: productType,
    totalPrice
  }
};

const products = [
  { name: 'M&M', section: 'Candy', price: 1.80 },
  { name: 'Macbook Pro', section: 'Computers', price: 1560 },
  { name: 'Mac mini', section: 'Computers', price: 800 },
  { name: 'Logi Mouse', section: 'Electroics', price: 120 }
]

console.log(getProductsDetails(products, 'Computers'))

// Practice #2
function getChampionStats (roles, type) {
  const championRoles = roles
    .filter(role => role.type === type)
    .map(role => role.name)
    .join(', ')

  const damageDone = roles
    .filter(role => role.type === type)
    .reduce((total, role) => total + role.damage, 0)

  return {
    roles: championRoles,
    damegeDone: damageDone
  }
}

const champions = [
  { name: 'Mid', type: 'Mage', damage: 700 },
  { name: 'Top', type: 'Tank', damage: 800 },
  { name: 'Jungle', type: 'Tank', damage: 1000 },
  { name: 'Bot', type: 'Marksman', damage: 500 },
  { name: 'Support', type: 'Support', damage: 400 }
]

console.log(getChampionStats(champions, 'Tank'))

// Practice #3

// Define a 2D array 'levels' representing different game levels, each row containing values corresponding to the level's difficulty.
const levels = [
  [2, 4, 6],
  [3, 6, 9],
  [10, 20, 30]
]

// Define a variable 'value' with a specific value that we want to search for in the 'levels' array.
const value = 9

// Define a function 'getLevel' that takes a 2D array 'levels' and a value as parameters and searches for the value in the array.
function getLevel (levels, value) {
  // Iterate through the rows of the 'levels' array using a for loop.
  for (let row = 0; row < levels.length; row++) {
    // Iterate through the columns of each row using another for loop.
    for (let column = 0; column < levels[row].length; column++) {
      // Check if the current element in the 'levels' array matches the target 'value'.
      if (levels[row][column] === value) {
        // If a match is found, return an object with the row and column indices where the value is located.
        return {
          row,
          column
        }
      }
    }
  }
  // If the value is not found in the 'levels' array, throw an error indicating that the level does not exist.
  throw new Error('This level does not exist')
}

try {
  // Attempt to find the level containing the specified 'value' using the 'getLevel' function.
  const result = getLevel(levels, value)
  // If successful, log the result to the console.
  console.log(result)
} catch (error) {
  // If an error occurs (e.g., level not found), log the error message to the console.
  console.error(error.message)
}
