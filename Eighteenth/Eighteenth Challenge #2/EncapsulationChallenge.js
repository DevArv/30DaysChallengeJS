/* eslint-disable no-unused-vars */
/*
Ejemplo 1:

Input:

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages()

Output:

["Hola Maria!"]

Ejemplo 2:

Input:

const usuario1 = new User("Juan", 20);
usuario1.name = "Pepito"
console.log(usuario1.name)

Output:

"Pepito" */

// Encapsulate data of users - Challenge # 2 ***

/* En este desafío, debes implementar la lógica de la clase "Usuario"
que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.
La clase debe tener las siguientes variables privadas:

name
age
friends (array de objetos Usuario)
messages (array de strings)
*/
class User {
  constructor (name, age) {
    this._name = name
    this._age = age
    this._friends = []
    this._messages = []
  }

  /* Además, debes proporcionar los siguientes métodos públicos:

    addFriend(friend): agrega un usuario a la lista de amigos del usuario actual.
    sendMessage(message, friend): agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
    showMessages(): devuelve la lista de mensajes del usuario actual. */

  addFriend (friend) {
    this._friends.push(friend)
  }

  sendMessage (message, friend) {
    this._messages.push(message)
    friend._messages.push(message)
  }

  showMessages () {
    return this._messages
  }

  /* También debes tener definidos los getters y setters para acceder a los datos privados como el nombre
    y la edad, los cuales pueden ser modificados mediante su propio setter. */

  get name () {
    return this._name
  }

  set name (newName) {
    this._name = newName
  }

  get age () {
    return this._age
  }

  set age (newAge) {
    this._age = newAge
  }
}
