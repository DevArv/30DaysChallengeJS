// En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

// Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, 
//la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, 
//debes devolver el primer palíndromo encontrado en la lista.

// Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

// Ejemplo 1:

// Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

// Output: "racecar"

// Ejemplo 2:

// Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

// Output: null

//Palindrome challenge
// Función para encontrar el palíndromo más largo en una lista de palabras
function palindromeFinder(words) {
  // Array para almacenar todos los palíndromos encontrados
  let palindromes = [];
  
  // Variable para almacenar el palíndromo más largo, inicialmente establecido como nulo
  let longestPalindrome = null;

  // Iterar a través de cada palabra en la lista
  words.forEach((word) => {
      // Crear una versión invertida de la palabra actual para verificar si es un palíndromo
      let palindromeCheck = word.split('').reverse().join('');

      // Si la palabra es un palíndromo, agregarla al array de palíndromos
      if (word === palindromeCheck) {
          palindromes.push(word);

          // Actualizar el palíndromo más largo si es necesario
          if (!longestPalindrome || word.length > longestPalindrome.length) {
              longestPalindrome = word;
          }
      }
  });

  // Devolver el palíndromo más largo encontrado (o nulo si no se encontró ninguno)
  return longestPalindrome;
}

// Lista de palabras de ejemplo
const words = ["Radar", "Salas", "Reconocer"];

// Imprimir el resultado de la función al llamarla con la lista de palabras
console.log(palindromeFinder(words));
