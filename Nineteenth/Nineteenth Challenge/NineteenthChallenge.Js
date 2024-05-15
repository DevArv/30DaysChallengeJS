/* eslint-disable no-unused-vars */
/* En este desafío, debes crear una jerarquía de clases mediante el uso de la herencia.

La clase base será Animal con las propiedades name, age y species,
 y un método getInfo que devuelve un objeto con la información del animal.

Luego, debes crear una clase Mammal que herede de Animal y tenga una propiedad adicional hasFur
y un método getInfo que sobreescriba al del padre y incluya la información de hasFur.

Finalmente, debes crear una clase Dog que herede de Mammal y tenga una propiedad adicional breed y
un método getInfo que sobreescriba al del padre y incluya la información de breed,
al igual que el método bark que devuelva el string "woof!".

Ejemplo 1

Input:
const bird = new Animal("pepe", 1, "bird")
bird.getInfo()

Output:

{
  name: "pepe",
  age: 1,
  specie: "bird",
}

Ejemplo 2

Input:
const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()

Output:

{
  name: "bartolo",
  age: 3,
  specie: "hippo",
  hasFur: false,
}

Ejemplo 3

Input:
const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()

Output:
"woof!" */

class Animal {
  constructor (name, age, specie) {
    this._name = name
    this._age = age
    this._specie = specie
  }

  getInfo () {
    const ANIMAL_INFO = {
      name: this._name,
      age: this._age,
      specie: this._specie
    }

    return ANIMAL_INFO
  }
}

class Mammal extends Animal {
  constructor (name, age, specie, hasFur) {
    super(name, age, specie)
    this._hasFur = hasFur
  }

  getInfo () {
    const MAMMAL_INFO = {
      name: this._name,
      age: this._age,
      specie: this._specie,
      hasFur: this._hasFur
    }

    return MAMMAL_INFO
  }
}

class Dog extends Mammal {
  constructor (name, age, specie, hasFur, breed) {
    super(name, age, specie, hasFur)
    this._breed = breed
  }

  getInfo () {
    const DOG_INFO = {
      name: this._name,
      age: this._age,
      specie: this._specie,
      hasFur: this._hasFur,
      breed: this._breed
    }

    return DOG_INFO
  }

  bark () {
    return 'woof!'
  }
}
