/* eslint-disable no-unreachable-loop */
// Arrays
const elements = ['water', 'electric', 'fire', 'normal', 'dark']
elements.push('grass') // > Add a new element to the list...
console.log(elements)

const elements1 = ['water', 'electric', 'fire', 'normal', 'dark']
elements1.pop() // > Remove the last element from the list...
console.log(elements1)

const age = [26, 28, 31]
const doubleAge = age.map(function (age) {
  return age * 2
}, 0)
console.log(doubleAge) // > [ 52, 56, 62 ]

const price = [0.9, 5]
const localPrice = price.reduce(function (tax, price) {
  return tax + price
}, 0)
console.log(localPrice) // > 5.9

// Example 1 of the first challenge in the fourth day.

const championLeague = [
  { name: 'Shaco', Damage: [240, 309] },
  { name: 'Maokai', Damage: [190, 285] },
  { name: 'Morgana', Damage: [308, 201] }
]

function findMaxDamage (championLeague) {
  const maxDamageChampion = {
    name: [],
    maxDamage: 0
  }

  for (let i = 0; i < championLeague.length; i++) {
    const champion = championLeague[i]

    const totalDamage = champion.Damage.reduce(
      (total, current) => total + current, 0)

    if (totalDamage === maxDamageChampion.maxDamage) {
      maxDamageChampion.name.push(champion.name)
    }

    if (totalDamage > maxDamageChampion.maxDamage) {
      maxDamageChampion.maxDamage = totalDamage
      maxDamageChampion.name = []
      maxDamageChampion.name.push(champion.name)
    }
  }
  return maxDamageChampion.name
}

const maxDamageChampionName = findMaxDamage(championLeague)
console.log('The champion with the highest damage is:', maxDamageChampionName)

// Example 2 of the first challenge in the fourth day.

const stepsWeek = [
  { name: 'Alex', steps: [1800, 2000, 3190] },
  { name: 'Maria', steps: [1200, 4600, 1800] },
  { name: 'Jose', steps: [900, 3200, 1200] }
]

function findMaxSteps (stepsWeek) {
  const maxStepsUser = {
    name: [],
    maxSteps: 0
  }

  for (let i = 0; i < stepsWeek.length; i++) {
    const user = stepsWeek[i]

    const totalSteps = user.steps.reduce(
      (total, current) => total + current, 0)

    if (totalSteps === maxStepsUser.maxSteps) {
      maxStepsUser.name.push(user.name)
    }

    if (totalSteps > maxStepsUser.maxSteps) {
      maxStepsUser.maxSteps = totalSteps
      maxStepsUser.name = []
      maxStepsUser.name.push(user.name)
    }
    return maxStepsUser.name
  }
}

const maxStepsUserName = findMaxSteps(stepsWeek)
console.log('The user with the highest steps is:', maxStepsUserName)

// Objets example 1.
const pokemon = {
  name: 'Gengar',
  type: 'Ghost',
  health: 130,
  attack: 110,
  specialAttack: 220,
  defense: 90,
  specialDefense: 190
}

console.log(pokemon.name) // > Gengar

// Objets example 2.
const cellphone = {
  brand: 'Iphone',
  serie: '8 plus',
  color: 'white',
  storage: '64 GB',
  details: {
    camara: '12 MP',
    ram: '4 GB',
    battery: '3000 mAh'
  },
  sellDetails: {
    comments: 'Its in a great condition.',
    price: 6000,
    available: true
  }
}

console.log(cellphone.details)
console.log(cellphone.sellDetails)

// Objets example 3.
const sms = {
  company: 'Claro',
  send: function () {
    console.log('SMS sent')
  }
}

sms.send() // > SMS sent

// Example (1) of the second challenge in the fourth day.
/**
 * Arreglo de objetos que representa a los estudiantes y sus calificaciones.
 * Cada objeto tiene una propiedad 'name' (nombre) que almacena el nombre del estudiante
 * y una propiedad 'grades' (calificaciones) que almacena un arreglo de calificaciones numéricas.
 */
const studentsName = [
  { name: 'Alex', grades: [92, 88, 94] },
  { name: 'Maria', grades: [84, 90, 88] }

]
/* Funcion que calcula el promedio individual por estudiantes y el promedio global del salon de clase */
function findAverage (students) {
  if (!students) {
    // Calcula el promedio de toda la clase

    // Reducir el arreglo de estudiantes para obtener la suma de todas las calificaciones
    const totalGrades = studentsName.reduce((total, student) => {
      return total + student.grades.reduce((sum, grade) => sum + grade, 0)
    }, 0)

    // Reducir el arreglo de estudiantes para obtener el número total de calificaciones
    const totalStudents = studentsName.reduce((total, student) => total + student.grades.length, 0)

    // Calcular el promedio de la clase
    const classAverage = totalGrades / totalStudents

    // Formatear el resultado con 2 decimales usando toFixed
    return classAverage.toFixed(2)
  } else {
    // Calcula el promedio de un estudiante específico

    // Buscar al estudiante por nombre en el arreglo
    const student = studentsName.find(student => student.name === students)
    if (!student) {
      // Si el estudiante no se encuentra, muestra un mensaje de error y devuelve undefined
      console.log('Student not found')
    } else {
      // Calcula el promedio del estudiante

      // Reducir el arreglo de calificaciones del estudiante para obtener la suma
      const average = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length

      // Formatear el resultado con 2 decimales usando toFixed
      return average.toFixed(2)
    }
  }
}

// Muestra el promedio de los estudiantes.
console.log(findAverage('Alex'))
console.log(findAverage('Maria'))

// Muestra el promedio global del salon de clase.
console.log(findAverage(''))

// Example (2) of the second challenge in the fourth day.
const weekSteps = [
  { name: 'Alex', steps: [1000, 2300] },
  { name: 'Maria', steps: [1200, 2000] },
  { name: 'Pedro', steps: [400, 900] },
  { name: 'Jose', steps: [200, 1460] }
]

function findWeekSteps (weekSteps) {
  const weekIndividualSteps = weekSteps.map((weekStep) => {
    const steps = weekStep.steps
    const individualAverage = steps.reduce((total, step) => total + step, 0) / steps.length
    return {
      name: weekStep.name,
      average: Number(individualAverage.toFixed(2))
    }
  })

  const globalStepsAverage = weekIndividualSteps.reduce((total, weekStep) => total + weekStep.average, 0) / weekIndividualSteps.length

  const totalStepsAverage = {
    globalStepsAverage: Number(globalStepsAverage.toFixed(2)),
    weekSteps: weekIndividualSteps
  }
  return totalStepsAverage
};

console.log(findWeekSteps(weekSteps))
