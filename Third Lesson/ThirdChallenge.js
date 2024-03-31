// En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no.
// Un año es bisiesto si cumple con las siguientes condiciones:

// Es divisible por 4, pero no por 100.
// Si es divisible por 100 debe serlo por 400 también.
// La función isLeapYear recibe un único parámetro: el año a evaluar. Debe devolver true si el año es bisiesto o false en caso contrario.

// Toma en cuenta que la función debe ser capaz de manejar valores no enteros o negativos.

// Ejemplo 1:

// Input: 2000;
// Output: true;

// Ejemplo 2:

// Input: -2024;
// Output: false;

// Ejemplo 3:

// Input: 1984.25;
// Output: false;

function isLeapYear (year) {
  if (year >= 0) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(isLeapYear(2000))
console.log(isLeapYear(-2024))
console.log(isLeapYear(1984.25))

// En este desafío recibirás una serie de tipos de mascotas junto con su edad.

// Dependiendo de estos 2 factores tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto
// con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

// La función recibirá las siguientes mascotas:

// perro
// gato
// ave
// En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida"

// Para cada tipo de mascota, la función retornará diferente información basada en la edad.

// Perros
// Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
// Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
// Si la edad es mayor a 7 años, deberá retornar "Los perros viejos necesitan caminatas más cortas"
// gatos
// Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
// Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
// Si la edad es mayor a 7 años, deberá retornar "Los gatos viejos necesitan sesiones de juego más cortas"
// aves
// Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
// Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
// Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"
// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: getPetExerciseInfo("perro", 3)
// Output: "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"

// Ejemplo 2:

// Input: getPetExerciseInfo("gato", 8)
// Output: "Los gatos viejos necesitan sesiones de juego más cortas"

// Ejemplo 3:

// Input: getPetExerciseInfo("Mamut", 25)
// Output: "Tipo de mascota invalida"

function getPetExerciseInfo (type, age) {
  switch (type) {
    case 'dog':
      if (age <= 1) {
        return 'Puppies need small, frequent play sessions.'
      } else if (age <= 7) {
        return 'Dogs at this age need daily walks and play sessions.'
      } else if (age > 7) {
        return 'Older dogs need shorter walks.'
      }
      break
    case 'cat':
      if (age <= 1) {
        return 'Kittens need frequent play sessions.'
      } else if (age <= 7) {
        return 'Cats at this age need to play daily.'
      } else if (age > 7) {
        return 'Older cats need shorter play sessions.'
      }
      break
    case 'bird':
      if (age <= 1) {
        return 'Young birds need a lot of space to fly.'
      } else if (age <= 7) {
        return 'Birds need daily play and a place to fly.'
      } else if (age > 7) {
        return 'Older birds need more rest, but still occupy a place to fly.'
      }
      break
    default:
      return 'Invalid type of pet.'
  }
}

console.log(getPetExerciseInfo('dog', 3))
console.log(getPetExerciseInfo('cat', 8))
console.log(getPetExerciseInfo('mamut', 25))
console.log(getPetExerciseInfo('bird', 1))

// En este desafío, debes dibujar un triángulo isósceles usando bucles.

// Recibirás dos parámetros: size y character, que definen el tamaño y
// el carácter con el que se debe construir el triángulo, respectivamente.
// Además, el triángulo debe estar alineado a la derecha,
// lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.

// Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.

// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: printTriangle(5, "*")
// Output:
//     *
//    **
//   ***
//  ****
// *****

// Ejemplo 2:

// Input: printTriangle(6, "$")
// Output:
//      $
//     $$
//    $$$
//   $$$$
//  $$$$$
// $$$$$$

function printTriangle (size, character) {
  const triangle = []
  for (let i = 1; i <= size; i++) {
    const spaces = ' '.repeat(size - i)
    const characters = character.repeat(i)
    const figure = `${spaces}${characters}`
    triangle.push(figure)
  }
  return triangle.join('\n')
}

console.log(printTriangle(5, '*'))
console.log(printTriangle(6, '$'))
