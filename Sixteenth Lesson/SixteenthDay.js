/* eslint-disable no-prototype-builtins */
// Object oriented programming
// Inheritance
// Excercise # 1
class Car {
  constructor (brand) {
    this.brand = brand
  }

  engine () {
    console.log('Turn on the engine...')
  }
}

class Mazda extends Car {
  transport () {
    console.log('The car is moving!')
  }
}

const MAZDA = new Mazda('Mazda CX-7')
console.log(MAZDA.brand)
MAZDA.engine()
MAZDA.transport()

// Exercise # 2
class Phone {
  constructor (serie) {
    this.serie = serie
  }

  battery () {
    console.log('The phone is charging...')
  }
}

class Iphone extends Phone {
  percentage () {
    console.log('The actual battery level is 20%')
  }
}

const IPHONE = new Iphone('Iphone 15 plus')
console.log(IPHONE.serie)
IPHONE.battery()
IPHONE.percentage()

// The use of 'this'
// Exercise # 1
class Earbuds {
  constructor (brand) {
    this.brand = brand
  }

  music () {
    console.log(`The user is using ${this.brand} listening to music...`)
  }
}

const JLAB = new Earbuds('Jlab')
JLAB.music()

// Exercise # 2
class EcoDot {
  constructor (brand) {
    this.brand = brand
  }

  question () {
    console.log(`Im making some questions to ${this.brand}`)
  }
}

const ALEXA = new EcoDot('Alexa EcoDot')
ALEXA.question()

// The last 2 exercises but this time using classes
// Exercise # 1
class Earbud {
  constructor (brand) {
    this.brand = brand
  }

  music () {
    console.log(`The user is using ${this.brand} listening to music...`)
  }
}

const JLAB_TWO = new Earbud('Jlab')
JLAB_TWO.music()

// Exercise # 2
class EcoDotDemo {
  constructor (brand) {
    this.brand = brand
  }

  question () {
    console.log(`Im making some questions to ${this.brand}`)
  }
}

const ALEXA_TWO = new EcoDotDemo('Alexa EcoDot')
ALEXA_TWO.question()

// Literal Objects
// Object.assign()

const USER_ONE = { nameOne: 'Alex', ageOne: 30 }
const USER_TWO = { nameTwo: 'Nathaly', ageTwo: 26 }

const RESULT = Object.assign({}, USER_ONE, USER_TWO)
console.log(RESULT)

// Object.freeze()
const PLAYER = { level: 10 }
Object.freeze(PLAYER)
PLAYER.level = 11
console.log(PLAYER)

// Object.getOwnPropertyNames()
const GRADES = { a: 90, b: 80 }
const GRADES_TWO = Object.create(GRADES)
GRADES_TWO.c = 70
console.log(Object.getOwnPropertyNames(GRADES_TWO))

// Object using for-in
const USER_GRADES = { a: 88, b: 70, c: 82 }
for (const properties in USER_GRADES) {
  console.log(properties)
}

// Object.keys() and loop for-of
const TEAM_LEVEL = { playerOne: 8, playerTwo: 10, playerThree: 7 }
const PROPERTIES = Object.keys(TEAM_LEVEL)
for (const properties of PROPERTIES) {
  console.log(properties)
}

// Object.values()
const ENEMY_LEVEL = { enemyOne: 11, enemyTwo: 6, enemyThree: 9 }
const ENEMY_LEVEL_TWO = Object.create(ENEMY_LEVEL)
ENEMY_LEVEL_TWO.enemyFour = 10
console.log(Object.values(ENEMY_LEVEL_TWO))

// Object.entries()
const AGE = { a: 7, b: 9 }
const AGE_TWO = Object.create(AGE)
AGE_TWO.c = 10
console.log(Object.entries(AGE_TWO))

// Object.hasOwnProperty()
const MOUSE = { brand: 'Logitech', color: 'white' }
const KEYBOARD = Object.create(MOUSE)
KEYBOARD.battery = 2
console.log(KEYBOARD.hasOwnProperty('brand')) // false
console.log(KEYBOARD.hasOwnProperty('battery')) // true
