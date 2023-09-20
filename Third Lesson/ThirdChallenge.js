// En este desafío, debes crear la lógica de la función isLeapYear, que determina si un año es bisiesto o no. 
//Un año es bisiesto si cumple con las siguientes condiciones:

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

function isLeapYear(year) {
    if (year >= 0) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
        return true;
        } else {
        return false;
        }
    } else {
      return false;
    }
    
  }
  
  console.log(isLeapYear(2000));
  console.log(isLeapYear(-2024));
  console.log(isLeapYear(1984.25));

// En este desafío recibirás una serie de tipos de mascotas junto con su edad.

// Dependiendo de estos 2 factores tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto 
//con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

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

function getPetExerciseInfo(type, age) {
    switch (type) {
        case "perro":
            if (age <= 1) {
                console.log("Los cachorros necesitan pequeñas y frecuentes sesiones de juego");
            }else if (age <= 7) {
                console.log("Los perros a esta edad necesitan caminatas diarias y sesiones de juego");
            }else if (age > 7) {
                console.log("Los perros viejos necesitan caminatas más cortas");
            }else {
                console.log("El perro no es un cachorro");
            }
            break;
        default:
            console.log("Tipo de mascota inválida");
    }
}

getPetExerciseInfo("perro", 1);
getPetExerciseInfo("perro", 5);
getPetExerciseInfo("perro", 9);