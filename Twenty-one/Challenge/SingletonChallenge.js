/* En este desafío, tendrás que aplicar el patrón de diseño Singleton en un Chat.

Tu objetivo es crear la lógica en la clase Chat para garantizar que exista una única instancia de la clase en todo momento.

Además, la clase Chat deberá contener los siguientes métodos:

sendMessage(message): Este método debe permitir enviar un mensaje a todos los usuarios en la lista, 
accediendo al método receiveMessage de cada instancia de usuario.

addUser(user): Este método debe agregar un nuevo usuario a la lista, 
verificando que sea una instancia de la clase User (el código de esta clase la puedes ver dentro del sistema de archivos del playground).

removeUser(name): Este método te permitirá eliminar un usuario de la lista por su nombre.

Y deberás almacenar los usuarios en una propiedad llamada users.

Ejemplo 1:


Input:
const chat1 = new Chat();
const chat2 = new Chat();

console.log(chat1 === chat2)

Output: true

Ejemplo 2:


Input:

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages)
console.log(user2.messages)

Output:
["Nunca pares de aprender!"]
["Nunca pares de aprender!"] */

export class User {
    // Este código no debe ser editado ❌
    constructor(name) {
        this.name = name;
        this.messages = [];
    }

    receiveMessage(message) {
        this.messages.push(message);
    }
}

export class Chat {
    // Private static variable to hold the single instance of Chat
    static #instance = null;

    // Static method to get the singleton instance of Chat
    static getInstance() {
        // Check if instance doesn't exist
        if (!Chat.#instance) {
            // Create a new instance of Chat if it doesn't exist
            Chat.#instance = new Chat();
        }
        // Return the existing or newly created instance
        return Chat.#instance;
    }

    // Constructor method to initialize the instance
    constructor() {
        // Check if instance already exists
        if (Chat.#instance) {
            // Return the existing instance to enforce Singleton pattern
            return Chat.#instance;
        }
        // Initialize the instance and set up the users list
        Chat.#instance = this;
        this.users = [];
    }

    // Method to send a message to all users
    sendMessage(message) {
        // Iterate through each user and call their receiveMessage method
        this.users.forEach(user => user.receiveMessage(message));
    }

    // Method to add a user to the chat
    addUser(user) {
        // Check if the user parameter is an instance of the User class
        if (user instanceof User) {
            // Add the user to the users list
            this.users.push(user);
        }
    }

    // Method to remove a user from the chat by name
    removeUser(name) {
        // Filter the users list to exclude the user with the specified name
        this.users = this.users.filter(user => user.name !== name);
    }
}