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

const words = [
    { palindrome: "racecar" },
    { palindrome: "level" },
    { palindrome: "world" },
    { palindrome: "hello" },
];
function findLargestPalindrome(words) {
    let maxPalindrome = "";
    let lengthPalindrome = 0;

    for (const word of words) {
        const lengthWord = word.palindrome.length;

        console.log(`Length of ${word.palindrome}: ${lengthWord}`);

        if (lengthWord >= lengthPalindrome && word.palindrome !== "") {
            maxPalindrome = word.palindrome;
            lengthPalindrome = lengthWord;
        }
    }

    if (maxPalindrome == "") {
        return null;
    }

    console.log(`Largest Palindrome: ${maxPalindrome}`);
    return maxPalindrome;
}

const result = findLargestPalindrome(words);
console.log(result);