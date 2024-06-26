/* En este desafío, tendrás que implementar la lógica para procesar correos electrónicos en una empresa utilizando una queue, 
priorizando siempre los emails más antiguos.

Tendrás crear una clase Queue para representar nuestra cola de correos electrónicos. La clase debe tener los siguientes métodos:

enqueue(from, to, body, subject): Agrega un correo electrónico al final de la queue.
dequeue(): Elimina y devuelve un objeto con siguientes propiedades: { from, to, body, subject } del email más antiguo de la cola.
peek(): Devuelve el correo electrónico más antiguo de la cola sin eliminarlo.
size(): Devuelve la cantidad de correos electrónicos en la cola.
Tendrás una clase Mail ya construida para usarla dentro del desarrollo de tu solución que simulará ser un nodo dentro de la queue.

Ejemplo 1

Input:
const emailQueue = new Queue();

emailQueue.enqueue(
  'jane@ejemplo.com',
  'support@ejemplo.com',
  'No puedo iniciar sesión en mi cuenta',
  'Problema de inicio de sesión'
);

emailQueue.enqueue(
  'joe@ejemplo.com',
  'support@ejemplo.com',
  'Mi pedido no ha llegado todavía',
  'Estado del pedido'
);

emailQueue.dequeue();

Output:

{
  from: 'jane@ejemplo.com',
  to: 'support@ejemplo.com',
  body: 'No puedo iniciar sesión en mi cuenta',
  subject: 'Problema de inicio de sesión'
} */

class Mail {
    constructor(from, to, body, subject) {
        this.from = from;
        this.to = to;
        this.body = body;
        this.subject = subject;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(from, to, body, subject) {
        const newMail = new Mail(from, to, body, subject);
        if(this.length == 0) {
            this.first = newMail;
            this.last = newMail;
        } else {
            this.last.next = newMail;
            this.last = newMail;
        }
        this.length++;
    }

    dequeue() {
        if(this.length == 0) {
            throw new Error('Queue is empty');
        }
        const FIRST_MAIL = this.first;
        if(this.length == 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return FIRST_MAIL;
    }

    peek() {
       return this.first; 
    }

    size() {
        return this.length;
    }
}
