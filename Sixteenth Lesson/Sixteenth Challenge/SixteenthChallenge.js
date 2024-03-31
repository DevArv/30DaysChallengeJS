/* Implementa la lógica para proteger un objeto de cambios.

En este desafío, debes implementar la lógica de la función llamada
protectDog que reciba como parámetro los datos de un perro como objeto.

La función debe crear una copia del objeto original utilizando el método Object.assign,
almacenarla en una variable y luego congelar la copia utilizando el método Object.freeze
para evitar cualquier cambio en sus propiedades, incluyendo los objetos anidados.

De esta manera, el objeto original no se verá afectado y todos los objetos anidados también serán protegidos de ser modificados.

Ejemplo 1:

Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.name = "Toro"
protectedDog.name // "Romeo"

Ejemplo 2:

Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.owner.name = "Pedro"
protectedDog.owner.name // "Victor" */

// Function to protect a dog object from changes
function protectDog (dog) {
  // Create a copy of the original object using Object.assign
  const PROTECTED_DOG = Object.assign({}, dog)

  // Loop through properties of the copied object
  for (const prop in PROTECTED_DOG) {
    // Check if the property is an object (excluding null) and freeze it
    if (typeof PROTECTED_DOG[prop] === 'object' && PROTECTED_DOG[prop] !== null) {
      Object.freeze(PROTECTED_DOG[prop])
    }
  }

  // Freeze the entire copied object to prevent any further modifications
  Object.freeze(PROTECTED_DOG)

  // Return the protected object
  return PROTECTED_DOG
}

// Example pet object
const PET = {
  name: 'Toby',
  age: 5,
  owner: { name: 'Nathaly', email: 'test@test.com' },
  favoriteFood: 'chicken',
  activities: 'sleep all the day'
}

// Protect the pet object using the protectDog function
const PROTECTED_LACAYO = protectDog(PET)

// Attempt to modify a property of the protected object
PROTECTED_LACAYO.name = 'Tito'

// Display the result after attempting to modify the property
console.log(PROTECTED_LACAYO.name) // Output: "Tobbie" (unchanged due to protection)
