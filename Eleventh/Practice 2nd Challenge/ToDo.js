// This script export 3 functions that return promises

// Function to create a Promise that resolves with 'Note 1' after a delay of 1000 milliseconds (1 second)
export function toDoBoxion1 () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Note 1'), 1000)
  })
}

// Function to create a Promise that resolves with 'Note 2' after a delay of 2000 milliseconds (2 seconds)
export function toDoBoxion2 () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Note 2'), 2000)
  })
}

// Function to create a Promise that resolves with 'Note 3' after a delay of 3000 milliseconds (3 seconds)
export function toDoBoxion3 () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Note 3'), 3000)
  })
}
