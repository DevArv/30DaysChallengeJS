// En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

// Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista,
// la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima,
// debes devolver el primer palíndromo encontrado en la lista.

// Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

// Ejemplo 1:

// Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

// Output: "racecar"

// Ejemplo 2:

// Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

// Output: null

// Palindrome challenge

// Define a function named findLargestPalindrome that takes an array of words as a parameter
function findLargestPalindrome (words) {
  // Initialize a variable to store the largest palindrome found
  let largestPalindrome = ''

  // Iterate through each word in the array
  for (const word of words) {
    // Clean the word by converting it to lowercase and removing spaces
    const cleanedWord = word.toLowerCase().replace(/\s/g, '')

    // Reverse the cleaned word
    const invertedWord = cleanedWord.split('').reverse().join('')

    // Check if the cleaned word is equal to its reverse (palindrome) and longer than the current largest palindrome
    if (cleanedWord === invertedWord && cleanedWord.length > largestPalindrome.length) {
      // If true, update the largest palindrome
      largestPalindrome = cleanedWord
    }
  }

  // Check if no palindromes were found
  if (largestPalindrome === '') {
    return null // Return null if no palindromes found
  } else {
    return largestPalindrome // Return the largest palindrome found
  }
}

// Define an array of words
const words = ['racecar', 'level', 'madam', 'civic', 'radar', 'hello', 'Avion']

// Call the findLargestPalindrome function with the array of words and print the result
console.log(findLargestPalindrome(words))
